import { Component, OnInit } from '@angular/core';
//import { Curvas } from '../mocks/mock-curva';
//import { Curva } from './curva';

import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

export interface Curva{
  id: number;
  name: string;
  doc: string;
  farm: string;
}


@Component({
  selector: 'app-curva',
  templateUrl: './curva.component.html',
  styleUrls: ['./curva.component.css']
})

export class CurvaComponent implements OnInit {

  curvas : Observable<Curva[]>;
  selectedCurva: Curva;  
  private curvasCollection: AngularFirestoreCollection<Curva>;
  constructor(private afs: AngularFirestore) {
    this.curvasCollection = afs.collection('files');
    this.curvas = this.curvasCollection.valueChanges();
  }


  ngOnInit() {
    
  }
  

  onSelect(curva: Curva): void {
    this.selectedCurva = curva;
  }

}
