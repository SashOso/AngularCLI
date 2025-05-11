const data=[

{
title:"Comando",
code:
`ng g c components/proveedor-listar --skip-tests

//cambiar
ng g c components/NOMBRE/list --skip-tests`
},

{
title:"TS",
code:
`
import { AfterViewInit, Component, inject, OnInit, ViewChild } from '@angular/core';
import { IngresoService } from '../../services/ingreso.service';
import { Router } from '@angular/router';
import { Ingreso } from '../../models/ingreso';

import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';

import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';

@Component({
  .....
  imports: [
    MatTableModule,
    MatPaginatorModule,
    MatSortModule
  ],
  ....
})
export class ProveedorListarComponent implements OnInit, AfterViewInit{
    displayedColumns: string[] = ['id', 'nombre', 'fechaInscripcion', 'direccion', 'telefono', 'email', 'editar', 'eliminar'];
    dataSource: MatTableDataSource<Proveedor> = new MatTableDataSource<Proveedor>();
      
    @ViewChild(MatPaginator) paginator: MatPaginator;
    @ViewChild(MatSort) sort: MatSort;
      
    service : ProveedorService = inject(ProveedorService);
    route: Router = inject(Router);
      
    constructor() {
    }
      
    ngAfterViewInit(): void {
        this.dataSource.sort = this.sort;
        this.dataSource.paginator = this.paginator;
    }
      
    ngOnInit():void {
        this.loadLista();
    }
    
    loadLista() {
        this.service.list().subscribe({
            next: (data) => this.dataSource.data = data,
            error: (err) => console.error("Error en consulta", err)
        });
    }
      
}`
},

{
title:"HTML",
code:
`<div class="mat-elevation-z8">
    <table mat-table [dataSource]="dataSource" matSort>
  
        <!-- Texto -->
        <ng-container matColumnDef="id" >
            <th mat-header-cell *matHeaderCellDef mat-sort-header> No. </th>
            <td mat-cell *matCellDef="let element"> {{element.id}} </td>
        </ng-container>
  

        <!-- Boton Editar -->
        <ng-container matColumnDef="editar" >
            <th mat-header-cell *matHeaderCellDef> Editar </th>
            <td mat-cell *matCellDef="let element">
                <button mat-raised-button color="primary"
                    [routerLink]="['/editar-agregar-prenda',element.id]">
                    <span class="material-icons">update</span>
                </button>
            </td>
        </ng-container>

        <!-- Boton Eliminar -->
        <ng-container matColumnDef="eliminar" >
            <th mat-header-cell *matHeaderCellDef> Eliminar </th>
            <td mat-cell *matCellDef="let element">
                <button mat-raised-button color="warn"
                    (click)="openDialog(element.id)">
                    <span class="material-icons">delete_sweep</span>
                </button>
            </td>
        </ng-container>

  
        <tr mat-header-row *matHeaderRowDef="displayedColumns"></tr>
        <tr mat-row *matRowDef="let row; columns: displayedColumns;"></tr>
    </table>
    <mat-paginator [pageSizeOptions]="[5, 10, 20]"
        showFirstLastButtons
        aria-label="Select page of periodic elements">
    </mat-paginator>
</div>`
},

]

