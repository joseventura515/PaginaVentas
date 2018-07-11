import { Component, OnInit } from '@angular/core';
import {InformacionService} from "../../services/informacion.service";



@Component({
  selector: 'app-producto',
  templateUrl: './producto.component.html',
  styles: []
})
export class ProductoComponent  {

  constructor(public _is:InformacionService) { }

}
