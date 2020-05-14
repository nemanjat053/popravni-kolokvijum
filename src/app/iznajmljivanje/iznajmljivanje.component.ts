import { Component, OnInit } from '@angular/core';
import { IznajmljivanjeService } from '../service/iznajmljivanje.service';
import { IIznajmljivanje } from '../model/IIznajmljivanje';

@Component({
  selector: 'app-iznajmljivanje',
  templateUrl: './iznajmljivanje.component.html',
  styleUrls: ['./iznajmljivanje.component.css']
})
export class IznajmljivanjeComponent implements OnInit {

  iznajmljivanjeList: IIznajmljivanje[] = [];

  constructor(private is: IznajmljivanjeService) { }

  ngOnInit(): void {
    this.is.getAll().subscribe((response) => this.iznajmljivanjeList = response);
  }

  deleteOne(id: number){
    this.is.deleteOne(id).subscribe((response) => console.log(response))
  }

}
