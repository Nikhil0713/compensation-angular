import { Component, OnInit } from '@angular/core';
import { AuthService } from '../_services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  form: any = {
      firstname : null,
      lastname: null,
      emailId: null,
      location: null,
      jobtitle: null,
      department: null,
      role: null,
      password: null
  };
  isSuccessful = false;
  isSignUpFailed = false;
  errorMessage = '';


  constructor(private authService: AuthService) { }

  ngOnInit(): void {
  }

  onSubmit(): void {
    console.log("entered inti onsubmit")
    const {firstname,lastname,emailId,location,jobtitle,department,role,password} = this.form;

    this.authService.register(firstname,lastname,emailId,location,jobtitle,department,role,password).subscribe({
     
      next: data => {        
        console.log(data);
        this.isSuccessful = true;
        this.isSignUpFailed = false;
      },
      error: err => {
        this.errorMessage = err.error.message;
        this.isSignUpFailed = true;
      }
    });
  }
}
