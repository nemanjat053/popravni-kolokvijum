import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ClanService } from '../service/clan.service';
import { IClan } from '../model/IClan';

@Component({
  selector: 'app-detail-clan',
  templateUrl: './detail-clan.component.html',
  styleUrls: ['./detail-clan.component.css']
})
export class DetailClanComponent implements OnInit {

  clan: IClan = { 
    id: null,
    ime: null,
    prezime: null
  }

  constructor(private cs: ClanService, private ar: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.cs.getOne(this.ar.snapshot.params['id']).subscribe((response) => this.clan = response);
  }

  submit(){
    this.cs.update(this.ar.snapshot.params['id'], this.clan).subscribe((response) => this.router.navigate(['/clan']));
  }

}
