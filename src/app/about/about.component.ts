import { Component, OnInit } from '@angular/core';
import {HttpdataService} from '../httpdata.service';
@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  constructor(public httpserv : HttpdataService) { }
  public userdata;
  ngOnInit() {
    console.log(this.httpserv.httpfunction().subscribe(
      (res)=>{
       
        this.userdata = res;
        console.log(this.userdata);
      },
      (err)=>{console.log(err)}
    ));
    
  }

}
