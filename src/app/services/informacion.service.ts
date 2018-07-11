import { Injectable } from '@angular/core';
import {Http} from "@angular/http";

@Injectable()
export class InformacionService {


  info:any={};
  cargada:boolean =false;
  cargada_productos:boolean =false;
  producto:any[]=[];

  constructor(public http:Http) {

      this.carga_info();
      this.carga_sobre_productos();
  }
  public carga_info()
  {
    this.http.get("assets/data/info.pagina.json")
              .subscribe( data=>{
                //console.log(data.json());
                this.cargada=true;
                this.info=data.json();
              })
  }
  public carga_sobre_productos()
  {
    this.http.get("https://ventas-59938.firebaseio.com/Productos.json")
              .subscribe( data=>{
                //console.log(data.json());
                setTimeout( () => {
                this.cargada_productos=true;
                this.producto=data.json();
                } ,1500)
              })
  }
}
