import { Component, OnInit, OnChanges, OnDestroy } from '@angular/core';

import { Observable } from 'rxjs';
import { AngularFireStorage, AngularFireStorageReference, AngularFireUploadTask } from '@angular/fire/storage';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';


@Component({
  selector: 'app-curva-form',
  templateUrl: './curva-form.component.html',
  styleUrls: ['./curva-form.component.css']
})
export class CurvaFormComponent implements OnInit, OnChanges, OnDestroy {

  ref: AngularFireStorageReference;
  task: AngularFireUploadTask;
  uploadProgress: Observable<number>;

  name : string;
  farm : string;
  file = null;
  constructor(private afStorage: AngularFireStorage, private afs: AngularFirestore) { }

  ngOnInit() {
  }

  onSubmit() {
    console.log(this.name)
    console.log(this.farm)
    console.log(this.file)

    this.uploadFile();
    this.updateFilesList();
   }

   ngOnChanges(){
     console.log("entra")
   }

   updateFilesList(){
    const curva = {
      name: this.name,
      farm: this.farm,
      doc: this.file.name
    }

    const curvaCollection = this.afs.collection('files');
    curvaCollection.add(curva);
   }

   uploadFile(){
    this.ref = this.afStorage.ref(this.file.name);
    this.task = this.ref.put(this.file);
    this.uploadProgress = this.task.percentageChanges();
   }

   upload(event) {
     this.file = event.target.files[0]
    //console.log(event.target.files[0]);
  }

  ngOnDestroy(){
    console.log('se destruyo')
  }
}
