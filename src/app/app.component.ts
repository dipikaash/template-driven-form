import { Component,ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  @ViewChild('f') f: NgForm;
  title = 'form-first';
  genders =['male','female','others'];
  submitted = false;
   user = {
    username :'',
    email: '',
    secretquestion: '',
    gender: '',
     };
  suggestUserName() {
    const suggestedName = 'Superuser';
  }
  onSubmit(){
    console.log(this.f);
    this.submitted =true;
    this.user.username = this.f.value.username;
    this.user.email = this.f.value.email;
    this.user.secretquestion = this.f.value.secret;
    this.user.gender = this.f.value.gender;
  }
}
