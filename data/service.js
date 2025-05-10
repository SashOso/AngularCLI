const data=[

{
title:"Comando",
code:
`ng g s services/proveedor --skip-tests`
},

{
title:"services",
code:
`export class ProveedorService {
    private url = environment.apiUrl;
    private http: HttpClient = inject(HttpClient);
    private listaCambio:Subject<Proveedor[]> = new Subject<Proveedor[]>();

    constructor (){}
              
    list(): Observable<any> {
        return this.http.get<Proveedor[]>(this.url + "/proveedores");
    }
    listID(id: number): Observable<any> {
        return this.http.get<Proveedor[]>(this.url + "/proveedor/" + id);
    }
    insert(obj: Proveedor): Observable<any> {
        return this.http.post(this.url + "/proveedor", obj);
    }
    update(obj: Proveedor): Observable<any> {
        return this.http.put(this.url + "/proveedor", obj);
    }
    delete(id: number) {
        return this.http.delete(this.url + "/proveedor/" + id);
    }

    setList(listaNueva:Proveedor[]){
        return this.listaCambio.next(listaNueva);
    }
    getList():Observable<Proveedor[]>{
        return this.listaCambio.asObservable();
    }
}`
},

]