const data=[

{
title:"tsconfig.json",
code:
`{
//...import...
"strictPropertyInitialization": false,
//...target....
}`
},

{
title:"Comandos",
code:
`//...Crear componente...
ng g c components/home --skip-tests
ng g c components/NOMBRE/list --skip-tests
ng g c components/NOMBRE/form --skip-tests

//...crear modelo...
ng g class models/NOMBRE --skip-tests

//.. crear servicio
ng g s services/NOMBRBE --skip-tests

//... agregar materiales ...
ng add @angular/material`
},

{
title:"src/environments/environment.ts",
code:
`export const environment = {
    production: false,
    apiUrl: 'http://localhost:8080/api',
}`
},

{
title:"app.config.ts",
code:
`export const appConfig: ApplicationConfig = {
    providers: [...., provideHttpClient()]
};`
},

{
title:"app.routes.ts",
code:
`export const routes: Routes = [
    { path: '', component: HomeComponent , pathMatch: 'full' },
    { path: 'home', component: HomeComponent },
    { path: 'proveedores', component: ProveedorListarComponent },
];`
},

{
title:"app.componet.html",
code:
`<nav>
    <a [routerLink]="'/'">Home</a>
    <a [routerLink]="'proveedores'">Proveedores</a>
</nav>

<router-outlet />`
},

{
title:"style.css",
code:
`@import '@angular/material/prebuilt-themes/indigo-pink.css';
...`
},

]


