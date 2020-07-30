import { Component,ViewChild, OnInit } from '@angular/core';
import { FormGroup,FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  genders = ['male', 'female'];
 f: FormGroup;
 ngOnInit(){
   this.f = new FormGroup({
     'projectname': new FormControl(null,Validators.required),
     'email': new FormControl(null,[Validators.required,Validators.email]),
     'gender': new FormControl('female')
   });
 }
 onSubmit(){
   console.log(this.f);
 }
}
