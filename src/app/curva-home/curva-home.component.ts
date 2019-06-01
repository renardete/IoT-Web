import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';


@Component({
  selector: 'app-curva-home',
  templateUrl: './curva-home.component.html',
  styleUrls: ['./curva-home.component.css']
})
export class CurvaHomeComponent implements OnInit {

  constructor(public authService: AuthService) { }

  ngOnInit() {
  }

}
