import { Injectable } from '@angular/core';
import {Http} from "@angular/http";


@Injectable({
  providedIn: 'root'
})
export class UsuariosService {

  usuarios:any[]=[];
  cargando_usuarios:boolean=true;

  constructor( public http:Http)
  {
      this.cargar_usuarios();
   }

   public cargar_usuarios()
   {
      this.cargando_usuarios = false;
        this.http.get('https://ventas-59938.firebaseio.com/Usuarios.json')
            .subscribe( res =>
              {
                console.log(res.json());
                this.cargando_usuarios = false;
              })


   }
}
