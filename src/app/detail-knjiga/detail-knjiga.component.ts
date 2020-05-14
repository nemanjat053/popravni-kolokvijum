import { Component, OnInit } from '@angular/core';
import { KnjigaService } from '../service/knjiga.service';
import { ActivatedRoute, Router } from '@angular/router';
import { IKnjiga } from '../model/IKnjiga';

@Component({
  selector: 'app-detail-knjiga',
  templateUrl: './detail-knjiga.component.html',
  styleUrls: ['./detail-knjiga.component.css']
})
export class DetailKnjigaComponent implements OnInit {

  knjiga: IKnjiga = {
    id: null,
    naslov: null,
    autor: null,
    isbn: null
  }

  constructor(private ks: KnjigaService, private ar: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.ks.getOne(this.ar.snapshot.params['id']).subscribe((response) => this.knjiga = response);
  }

  submit(){
    this.ks.update(this.ar.snapshot.params['id'], this.knjiga).subscribe((response) => this.router.navigate(['/knjige']));
  }

}
