import { Component } from '@angular/core';
import {InformacionService} from "../../services/informacion.service";



@Component({
  selector: 'app-portafolio',
  templateUrl: './portafolio.component.html',

})
export class PortafolioComponent  {

  constructor(public _is:InformacionService) { }


}
