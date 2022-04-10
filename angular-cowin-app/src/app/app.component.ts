import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import {freeApiService} from './services/freeapi.service';
import {NgbDateStruct} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  model!: NgbDateStruct;
  title = 'cowin-app';
  states: any;
  date:string="";
  state_name: string="";
  state_id:string="";
  district:any;
  district_id:string="";
  district_name:string="";
  todayDate:string="";
  txnI:any;
  disObject:any;
  sessions:any;
  postData={
    "mobile": "7389844349"
  }
   url= "https://cdn-api.co-vin.in/api/v2/auth/public/generateOTP";
   urlGetDistrict = "https://cdn-api.co-vin.in/api/v2/admin/location/districts/";
   urlState= "https://cdn-api.co-vin.in/api/v2/admin/location/states";
   urlDistrict = "https://cdn-api.co-vin.in/api/v2/appointment/sessions/public/findByDistrict?district_id=";
   constructor(private freeApi: freeApiService, private http:HttpClient){

   }
  ngOnInit(): void {
     /*  this.http.post(this.url, this.postData).toPromise().then((data:any)=>{
        console.log(data);
        this.jsone = data.txnId;
        
        console.log(this.jsone);
      }) */

      //this.txnI = this.jsone.txnId;
      // console.log()
      this.http.get(this.urlState).toPromise().then((data:any)=>{
       
        this.states = data.states;
      })
    
  }
   
  getCity(){
      
      console.log(this.district_name);//district name
      
       this.todayDate = this.model?.day.toString()+"-"+this.model?.month.toString()+"-"+this.model?.year;
       console.log(this.todayDate);  //district date
    
       for (let i = 0; i < this.district.length; i++) {
        if(this.district[i].district_name == this.district_name){
          this.district_id = this.district[i].district_id;
          break;
        }
      }

       
       this.http.get(this.urlDistrict+this.district_id+"&date="+this.todayDate).toPromise().then((data:any)=>{
        console.log(data);
        this.sessions = data.sessions;
      })
      console.log(this.sessions);
  }

  printData(){
    
    for (let i = 0; i < 36; i++) {
      if(this.states[i].state_name == this.state_name){
        this.state_id = this.states[i].state_id;
        break;
      }
    }

    this.http.get(this.urlGetDistrict+this.state_id).toPromise().then((data:any)=>{
      this.district = data.districts;
      console.log(this.district.length);
    })
  }


}
