import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ClanComponent } from './clan/clan.component';
import { KnjigaComponent } from './knjiga/knjiga.component';
import { IznajmljivanjeComponent } from './iznajmljivanje/iznajmljivanje.component';
import { DetailIznajmljivanjeComponent } from './detail-iznajmljivanje/detail-iznajmljivanje.component';
import { DetailClanComponent } from './detail-clan/detail-clan.component';
import { DetailKnjigaComponent } from './detail-knjiga/detail-knjiga.component';
import { AddNewClanComponent } from './add-new-clan/add-new-clan.component';
import { AddNewKnjigaComponent } from './add-new-knjiga/add-new-knjiga.component';
import { AddNewIznajmljivanjeComponent } from './add-new-iznajmljivanje/add-new-iznajmljivanje.component';
import { IznajmljivanjeService } from './service/iznajmljivanje.service';


const routes: Routes = [
  {path: 'iznajmljivanje', component: IznajmljivanjeComponent},
  {path: 'iznajmljivanje/:id', component: DetailIznajmljivanjeComponent},
  {path: 'novoIznaj', component: AddNewIznajmljivanjeComponent},

  {path: 'clan', component: ClanComponent},
  {path: 'clan/:id', component: DetailClanComponent},
  {path: 'noviClan', component: AddNewClanComponent},

  {path: 'knjiga/:id', component: DetailKnjigaComponent},
  {path: 'knjige', component: KnjigaComponent},
  {path: 'novaKnjiga', component: AddNewKnjigaComponent},

  {path: "*", component:IznajmljivanjeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
