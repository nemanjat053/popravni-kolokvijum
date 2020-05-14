import { Component, OnInit } from '@angular/core';
import { ClanService } from '../service/clan.service';
import { IClan } from '../model/IClan';

@Component({
  selector: 'app-clan',
  templateUrl: './clan.component.html',
  styleUrls: ['./clan.component.css']
})
export class ClanComponent implements OnInit {
  
  clanovi: IClan[] = [];

  constructor(private cs: ClanService) { }

  ngOnInit(): void {
    this.cs.getAll().subscribe((response) => this.clanovi = response)
  }

  deleteOne(id: number){
    this.cs.deleteOne(id).subscribe((response) => console.log(response))
  }
}
