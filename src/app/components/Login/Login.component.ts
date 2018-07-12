import { Component, OnInit } from '@angular/core';
import {InformacionService} from "../../services/informacion.service";
import { ActivatedRoute } from "@angular/router";
import {Router}from "@angular/router";

@Component({
  selector: 'app-producto',
  templateUrl: './Login.component.html',
  styles: []
})
export class LoginComponent  {

  constructor(private route:ActivatedRoute ,public _is:InformacionService, private router:Router)
  {
    route.params.subscribe( parametros =>{
      //console.log(parametros);
      //console.log(parametros['nombre']);
    })
   }
   Registrarse(usuario:string,contraseña:string)
   {
     console.log(usuario,contraseña);
     this.router.navigate(['home']);
   }

}
