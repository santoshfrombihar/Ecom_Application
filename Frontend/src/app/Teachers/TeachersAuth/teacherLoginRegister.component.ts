import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-seller',
  templateUrl: './teacherLoginRegister.component.html',
  styleUrls: ['./teacherLoginRegister.component.css']
})
export class TeacherLoginRegisterComponent implements OnInit {

  accountTypeText: string  = "New Account?";
  isFirstTimeUser: boolean = true;


  constructor() { }

  ngOnInit(): void {
  }

  submitSellerdata(data:any){
    console.log(data);
  }

  newAccount(accountType : string){
    if(accountType == "New Account?"){
      this.isFirstTimeUser = false;
      this.accountTypeText = "Already have An Account?";
    }
    else{
      this.isFirstTimeUser = true;
      this.accountTypeText = "New Account?";
    }
  }
}
