const data=[

{
title:"Comando",
code:
`ng g c components/proveedor-nuevo-edit --skip-tests

//cambiar
ng g c components/NOMBRE/form --skip-tests`
},


{
title:"TS",
code:
`import { Component, inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ProveedorService } from '../../services/proveedor.service'; //service
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Proveedor } from '../../models/proveedor'; //model

import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { NgForOf } from '@angular/common';

import { TallaService } from '../../services/talla.service'; //ervice de lcombobox
import { Talla } from '../../models/talla';// model del comobox
/*
import {MatDatepicker, MatDatepickerInput, MatDatepickerToggle,MatDatepickerModule} from '@angular/material/datepicker';//add
import {MatNativeDateModule, MatOption} from "@angular/material/core";//add
import {MatInputModule} from "@angular/material/input";//add
import {MatSelect} from '@angular/material/select';//add
import {NgForOf} from '@angular/common';//add
*/
@Component({
    ...
    imports: [
        MatCardModule,
        MatFormFieldModule,
        MatInputModule,
        MatDatepickerModule,
        MatNativeDateModule,
        MatSelectModule,
        MatButtonModule,
        ReactiveFormsModule,
        FormsModule,
        NgForOf
       /*
        MatCardContent, MatLabel, MatHint, //add
        MatDatepickerModule,//add
        MatNativeDateModule, //add
        MatInputModule, MatSelect, MatOption, NgForOf, //add
        */
      ],
    ...
})
export class ProveedorNuevoEditComponent {
    formulario: FormGroup;
    fb = inject(FormBuilder);
    service: ProveedorService = inject(ProveedorService);
    router: Router = inject(Router);
    //edicion
    edicion: boolean = false;
    route: ActivatedRoute = inject(ActivatedRoute);
    id: number = 0 ;

    tallaService:TallaService=inject(TallaService)
    public talla_id: number = 0;
    lista_talla: Talla[] = [];
    talla: Talla = new Talla();
    
    constructor() {
        this.formulario = this.fb.group({
            id: [''],
            nombre: ['', Validators.required],
            fechaInscripcion: ['', Validators.required],
            direccion: ['', Validators.required],
            telefono: ['', [Validators.required, Validators.pattern("^[0-9]{9}$")]],
            email: ['', [Validators.required, Validators.email]],
            talla: ['', Validators.required],
        })
    }

    loadComboboxTalla():void{
        this.tallaService.list().subscribe({
            next: (data: Talla[]) => {
                this.lista_talla = data;
            },
            error: (error: any) => {
                console.error(error);
            }
        })
    }
    
    
    ngOnInit(): void {
        this.loadComboboxTalla();
        this.route.params.subscribe((data: Params) => {
            this.id = data['id'];
            this.edicion = data['id'] != null;
            this.cargaForm();
        });
    }
    cargaForm() {
        if (this.edicion) {
            this.service.listId(this.id).subscribe((data: Proveedor) => {
                this.formulario.patchValue({
                    nombre: data.nombre,
                    fechaInscripcion: data.fechaInscripcion,
                    telefono: data.telefono,
                    direccion: data.direccion,
                    email: data.email,
                    talla:data.talla.id,
                });
            });
        }
    }
    
    onSubmit() {
        if (this.formulario.valid ) {
            const obj: Proveedor = new Proveedor();
            obj.id = this.id;
            obj.nombre = this.formulario.value.nombre;
            obj.fechaInscripcion = this.formulario.value.fechaInscripcion;
            obj.telefono = this.formulario.value.telefono;
            obj.direccion = this.formulario.value.direccion;
            obj.email = this.formulario.value.email;
            this.talla.id=this.formulario.value.talla;
            item.talla = this.talla; 
            if (!this.edicion ) {
                this.service.insert(obj).subscribe((data: Object): void => {
                    this.service.list().subscribe(data => {
                        this.service.setList(data);//enviando la lista al suscriptor
                    });
                });
            }else { //update
                this.service.update(obj).subscribe((data: Object): void => {
                    this.service.list().subscribe(data => {
                        this.service.setList(data);//enviando la lista al suscriptor
                    });
                });
            }
            this.router.navigate(['proveedores']);
        }else {
            console.log("Formulario no valido");
        }
    }

}`
},

{
title:"HTML",
code:
`<mat-card class="example-card">
    <mat-card-title>Formulario de Proveedor</mat-card-title>
    <mat-card-content>
        <form [formGroup]="formulario" class="form-container">

        <!--Texto-->
        <mat-form-field appearance="fill">
            <mat-label>Descripción</mat-label>
            <input matInput formControlName="descripcion" placeholder="Ingrese su nombre" />
        </mat-form-field>
        
        <!--Fecha-->
        <mat-form-field appearance="fill">
            <mat-label>Fecha</mat-label>
            <input matInput [matDatepicker]="picker" formControlName="fecha"
                    placeholder="Seleccione la fecha" />
            <mat-hint>DD/MM/YYYY</mat-hint>
            <mat-datepicker-toggle matSuffix [for]="picker"></mat-datepicker-toggle>
            <mat-datepicker #picker></mat-datepicker>
        </mat-form-field>
        
        <!--Decimal-->
        <mat-form-field appearance="fill">
            <mat-label>Monto</mat-label>
            <input matInput type="number" step="0.01" formControlName="monto" placeholder="Ingrese el monto" />
        </mat-form-field>

        <!--ComboBox-->
        <mat-form-field appearance="fill">
            <mat-label>Tipo</mat-label>
            <mat-select formControlName="talla" [(value)]="talla_id" required>
                <mat-option *ngFor="let item of lista_talla" [value]="item.id">
                {{item.nombre}}
                </mat-option>
            </mat-select>
        </mat-form-field>

        <!--ComboBox estatico-->
        <mat-form-field appearance="fill">
            <mat-label>Genero</mat-label>
            <mat-select formControlName="genero">
                <mat-option value="Masculino">Masculino</mat-option>
                <mat-option value="Femenino">Femenino</mat-option>
                <mat-option value="Otro">Otro</mat-option>
            </mat-select>
        </mat-form-field>

        <!--Boton Registrar-->
        <button mat-raised-button color="primary" (click)="onSubmit()">Registrar</button>

        </form>
    </mat-card-content>
</mat-card>`
},

]


