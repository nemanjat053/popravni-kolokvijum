import { Component, OnInit } from '@angular/core';
import { IKnjiga } from '../model/IKnjiga';
import { KnjigaService } from '../service/knjiga.service';

@Component({
  selector: 'app-knjiga',
  templateUrl: './knjiga.component.html',
  styleUrls: ['./knjiga.component.css']
})
export class KnjigaComponent implements OnInit {

  knjige: IKnjiga[] = [];

  constructor(private ks: KnjigaService) { }

  ngOnInit(): void {
    this.ks.getAll().subscribe((response) => this.knjige = response)
  }

  deleteOne(id: number){
    this.ks.deleteOne(id).subscribe((response) => console.log(response))
  }

}
