const data=[

{
title:"DIALOG - HTML",
code:
`<h2 mat-dialog-title>Eliminar</h2>
<mat-dialog-content>
    <p>¿Estás seguro de eliminar?</p>
</mat-dialog-content>
<mat-dialog-actions>
    <button mat-raised-button color="warn" mat-dialog-close>No</button>
    <button mat-raised-button color="primary" [mat-dialog-close]="true" cdkFocusInitial>Sí</button>
</mat-dialog-actions>`
},

{
title:"LISTA - TS",
code:
`export class PrendaListarComponent implements OnInit, AfterViewInit{

    dialog:MatDialog = inject(MatDialog);

    onpenDialog(id:number):void{
        const dialogRef=this.dialog.open(PrendaEliminarDialogComponent);
        dialogRef.afterClosed().subscribe(result =>{
            if(result){
            console.log(id)
            this.delete(id)
            }else{
            console.log("No se pudo eliminar")
            }
        })
    }
    delete(id:number):void{
        console.log(id)
        this.service.delete(id).subscribe(()=>{
            this.loadLista();
        })
    }
}`
},

{
title:"LISTA - HTML",
code:
`<ng-container matColumnDef="eliminar">
    <th mat-header-cell *matHeaderCellDef> Delete </th>
    <td mat-cell *matCellDef="let element">
        <button mat-raised-button color="warn" (click)="onpenDialog(element.id)">
            <span class="material-icons">delete_sweep</span>
        </button>
    </td>
</ng-container>`
},

]