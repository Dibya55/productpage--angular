import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private router:Router) { }
  UserName:any;
  Password:any;

  ngOnInit(): void {
  }
  LoginClick(){
    if(this.UserName =="john" && this.Password == "john123"){
      this.router.navigate(['home'])
    }
    else{
      this.router.navigate(['invalid'])
    }
  }
}
