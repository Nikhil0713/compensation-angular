
import { Component, OnInit } from '@angular/core';
import { UserService } from '../_services/user.service';

@Component({
  selector: 'app-createplan',
  templateUrl: './board-moderator.component.html',
  styleUrls: ['./board-moderator.component.css']
})
export class BoardModeratorComponent implements OnInit {
 

  content?: string;
form: any ={ 
 partnerName: null,
compensationPlan: null,
incomeType: null,
min: 0,
max: 0,
percentagecompensation:0, 
 validFrom: null,
validTo: null
};

 isCreatedIn = false;
 isCreatedFailed = false;
 errorMessage ='';
 

        
  constructor(private userService: UserService) { }

  ngOnInit(): void {
  }
  onSubmit(): void  {
    const { partnerName,compensationPlan,incomeType,min,max,percentagecompensation,validFrom,validTo } = this.form;
    this.userService.create(this.form).subscribe({
      next: data  => {
        console.log(data);

          this.isCreatedIn = true;
          this.isCreatedFailed = false;
          
          
      //  }
      },
      error: err => {
        // this.errorMessage = err.error.message;
        this.errorMessage = JSON.parse(err.error).message;
        console.log(JSON.parse(err.error).message);
              //  this.errorMessage      = "Error:Min,Max and Percentage input values can't be same "
        this.isCreatedFailed = true;

      }
  });

}
reloadPage(): void {
  window.location.reload();
}
}
