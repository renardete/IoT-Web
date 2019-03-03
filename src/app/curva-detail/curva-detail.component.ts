import { Component, OnInit, Input } from '@angular/core';
import { Curva } from '../curva/curva';


@Component({
  selector: 'app-curva-detail',
  templateUrl: './curva-detail.component.html',
  styleUrls: ['./curva-detail.component.css']
})
export class CurvaDetailComponent implements OnInit {

  @Input() curva: Curva;

  constructor() { }

  ngOnInit() {
  }

}
