import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { KnjigaService } from '../service/knjiga.service';

@Component({
  selector: 'app-add-new-knjiga',
  templateUrl: './add-new-knjiga.component.html',
  styleUrls: ['./add-new-knjiga.component.css']
})
export class AddNewKnjigaComponent implements OnInit {

  constructor(private fb: FormBuilder, private router: Router, private ks: KnjigaService) { }

  ngOnInit(): void {
  }

  forma = this.fb.group({
    naslov: [''],
    autor: [''],
    isbn: ['']
  })

  addNew(){
    var formObj = this.forma.getRawValue();
    this.ks.save(formObj).subscribe((response) => console.log(response))
    this.router.navigate(['knjige'])
  }

  

}
