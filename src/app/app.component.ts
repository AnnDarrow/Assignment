import { Component, OnInit } from '@angular/core';
import {MatDialog, MatDialogRef} from '@angular/material/dialog';
import {FormsModule} from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

  val={index:"",num:"Enter index to see the value!"};
  model: number[]=[2,3,10,15,26,35,50,63];
  title = 'Assignment';

  constructor(){}

  ngOnInit(){
    console.log(this.model);
  }

    onSubmit(){
      this.val.num=this.model[this.val.index];
    }
    

}

