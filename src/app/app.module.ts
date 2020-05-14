import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { KnjigaComponent } from './knjiga/knjiga.component';
import { IznajmljivanjeComponent } from './iznajmljivanje/iznajmljivanje.component';
import { ClanComponent } from './clan/clan.component';
import { DetailClanComponent } from './detail-clan/detail-clan.component';
import { DetailIznajmljivanjeComponent } from './detail-iznajmljivanje/detail-iznajmljivanje.component';
import { DetailKnjigaComponent } from './detail-knjiga/detail-knjiga.component';
import { AddNewClanComponent } from './add-new-clan/add-new-clan.component';
import { AddNewKnjigaComponent } from './add-new-knjiga/add-new-knjiga.component';
import { AddNewIznajmljivanjeComponent } from './add-new-iznajmljivanje/add-new-iznajmljivanje.component';

@NgModule({
  declarations: [
    AppComponent,
    KnjigaComponent,
    IznajmljivanjeComponent,
    ClanComponent,
    DetailClanComponent,
    DetailIznajmljivanjeComponent,
    DetailKnjigaComponent,
    AddNewClanComponent,
    AddNewKnjigaComponent,
    AddNewIznajmljivanjeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
