import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FormsModule  }   from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CurvaComponent } from './curva/curva.component';
import { CurvaDetailComponent } from './curva-detail/curva-detail.component';

import { AngularFirestore } from '@angular/fire/firestore';
import { AngularFireModule } from '@angular/fire';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { environment } from '../environments/environment';

import { NgxExtendedPdfViewerModule } from 'ngx-extended-pdf-viewer';
import { CurvaFormComponent } from './curva-form/curva-form.component';


@NgModule({
  declarations: [
    AppComponent,
    CurvaComponent,
    CurvaDetailComponent,
    CurvaFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireStorageModule,
    FormsModule,
    NgxExtendedPdfViewerModule
  ],
  providers: [AngularFirestore],
  bootstrap: [AppComponent]
})
export class AppModule { }
