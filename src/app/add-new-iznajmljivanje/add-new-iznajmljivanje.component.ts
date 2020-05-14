import { Component, OnInit } from '@angular/core';
import { IznajmljivanjeService } from '../service/iznajmljivanje.service';
import { Router } from '@angular/router';
import { FormBuilder } from '@angular/forms';
import { ClanService } from '../service/clan.service';
import { IClan } from '../model/IClan';
import { IKnjiga } from '../model/IKnjiga';
import { KnjigaService } from '../service/knjiga.service';

@Component({
  selector: 'app-add-new-iznajmljivanje',
  templateUrl: './add-new-iznajmljivanje.component.html',
  styleUrls: ['./add-new-iznajmljivanje.component.css']
})
export class AddNewIznajmljivanjeComponent implements OnInit {

  clanovi: IClan[] = [];
  knjige: IKnjiga[] = [];

  constructor(private is: IznajmljivanjeService, private cs: ClanService, private ks: KnjigaService, private router: Router, private fb: FormBuilder) { }

  ngOnInit(): void {
    this.cs.getAll().subscribe((response) => this.clanovi = response);
    this.ks.getAll().subscribe((response) => this.knjige = response)
  }

  forma = this.fb.group({
    knjigaId: null,
    clanId: null,
    datumVracanja: null,
    datumIznajmljivanja: null
  })

  addNew(){
    var formObj = this.forma.getRawValue();
    this.is.save(formObj).subscribe((response) => console.log(response))
    this.router.navigate(['/iznajmljivanje'])
  }
}
