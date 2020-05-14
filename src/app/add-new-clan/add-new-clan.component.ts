import { Component, OnInit } from '@angular/core';
import { ClanService } from '../service/clan.service';
import { IClan } from '../model/IClan';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-new-clan',
  templateUrl: './add-new-clan.component.html',
  styleUrls: ['./add-new-clan.component.css']
})
export class AddNewClanComponent implements OnInit {



  constructor(private cs: ClanService, private router: Router, private fb: FormBuilder) { }

  ngOnInit(): void {

  }

  forma = this.fb.group({
    ime: [''],
    prezime: ['']
  })

  addNew() {
    var formObj = this.forma.getRawValue();
    this.cs.save(formObj).subscribe((response) => console.log(response));
    this.router.navigate(['clan']);
  }

}
