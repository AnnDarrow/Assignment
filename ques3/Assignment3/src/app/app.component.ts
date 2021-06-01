import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  data={phno1:""};
  title = 'Assignment3';

  constructor(){}

  ngOnInit(){

  }

  onSubmit(){
    console.log("phoneNumber1:" + this.data.phno1);
  }
}
