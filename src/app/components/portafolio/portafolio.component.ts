import { Component } from '@angular/core';
import {InformacionService} from "../../services/informacion.service";
import {Router} from "@angular/router";


@Component({
  selector: 'app-portafolio',
  templateUrl: './portafolio.component.html',

})
export class PortafolioComponent  {

  constructor(public _is:InformacionService
            ,
            router:Router) { }

  guardar(termino:string) {
      //console.log(termino);
  }
}
