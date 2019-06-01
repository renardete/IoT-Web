import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CurvaComponent } from './curva/curva.component';
import { CurvaDetailComponent } from './curva-detail/curva-detail.component';

import { AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { AngularFirestore } from '@angular/fire/firestore';
import { AngularFireModule } from '@angular/fire';
import { AngularFireStorageModule } from '@angular/fire/storage';
import * as firebase from 'firebase/app';
import { environment } from '../environments/environment';

import { NgxExtendedPdfViewerModule } from 'ngx-extended-pdf-viewer';
import { CurvaFormComponent } from './curva-form/curva-form.component';

import { AuthService } from './services/auth.service';
import { AuthGuardService } from './services/auth-guard.service';
import { LoginComponent } from './login/login.component';
import { CurvaHomeComponent } from './curva-home/curva-home.component';

@NgModule({
  declarations: [
    AppComponent,
    CurvaComponent,
    CurvaDetailComponent,
    CurvaFormComponent,
    LoginComponent,
    CurvaHomeComponent
  ],
  imports: [
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireStorageModule,
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    NgxExtendedPdfViewerModule
  ],
  providers: [AngularFirestore,
    AuthGuardService],
  bootstrap: [AppComponent]
})
export class AppModule { }
