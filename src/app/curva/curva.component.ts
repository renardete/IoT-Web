import { Component, OnInit } from '@angular/core';
import {Curvas} from '../mocks/mock-curva';
import { Curva } from './curva';

@Component({
  selector: 'app-curva',
  templateUrl: './curva.component.html',
  styleUrls: ['./curva.component.css']
})
export class CurvaComponent implements OnInit {

  curvas = Curvas;
  selectedCurva: Curva;

  constructor() { }

  ngOnInit() {
  }

  onSelect(curva: Curva): void{
    this.selectedCurva = curva;
  }

}
