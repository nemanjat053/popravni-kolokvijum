import { Component, OnInit } from '@angular/core';
import { IznajmljivanjeService } from '../service/iznajmljivanje.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Route } from '@angular/compiler/src/core';
import { IIznajmljivanje } from '../model/IIznajmljivanje';

@Component({
  selector: 'app-detail-iznajmljivanje',
  templateUrl: './detail-iznajmljivanje.component.html',
  styleUrls: ['./detail-iznajmljivanje.component.css']
})
export class DetailIznajmljivanjeComponent implements OnInit {

  iznaj: IIznajmljivanje = {
    id: null,
    knjigaId: null,
    clanId: null,
    datumVracanja: null,
    datumIznajmljivanja: null
  }

  constructor( private is: IznajmljivanjeService, private ar: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.is.getOne(this.ar.snapshot.params['id']).subscribe((response) => this.iznaj = response);
  }

  submit(){
    this.is.update(this.ar.snapshot.params['id'], this.iznaj).subscribe((response) => this.router.navigate(['/iznajmljivanje']));
  }

}
