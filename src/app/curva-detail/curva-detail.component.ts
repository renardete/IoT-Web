import { Component, OnInit, Input } from '@angular/core';
import { Curva } from '../curva/curva';
import { Observable, concat } from 'rxjs';
import { AngularFireStorage } from '@angular/fire/storage';


@Component({
  selector: 'app-curva-detail',
  templateUrl: './curva-detail.component.html',
  styleUrls: ['./curva-detail.component.css']
})
export class CurvaDetailComponent implements OnInit {

  @Input() curva: Curva;

  profileUrl: Observable<string | null>;
  constructor(private storage: AngularFireStorage) {

  }

  ngOnInit() {
    
  }

  ngOnChanges(){
    console.log(this.curva)
    if (this.curva) {
      const ref = this.storage.ref(this.curva.doc);
      this.profileUrl = ref.getDownloadURL();
      console.log(this.profileUrl)
    }
  }

}
