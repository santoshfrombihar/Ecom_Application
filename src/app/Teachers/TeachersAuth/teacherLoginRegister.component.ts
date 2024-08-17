import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-seller',
  templateUrl: './teacherLoginRegister.component.html',
  styleUrls: ['./teacherLoginRegister.component.css']
})
export class TeacherLoginRegisterComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  submitSellerdata(data:any){
    console.log(data);
  }
}
