import { Component, OnInit, ViewChildren, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-third-section',
  templateUrl: './third-section.component.html',
  styleUrls: ['./third-section.component.css']
})
export class ThirdSectionComponent implements OnInit {
  isMonthly:boolean=true;
  isAnnually:boolean=false;
  lollipopAnnualPrice=0.5;
  icecandyAnnualPrice=1;
  lollipopMonthlyPrice=1;
  IcecandyMonthlyPrice=2;
  twentyFiveClicked:boolean;
  fiftyClicked:boolean;
  hundredClicked:boolean;
  twoHundredClicked:boolean;
  servingCount:number=25;
  totalLollipop:number=100;
  totalIcecandy:number=100;
  lollipopMinusIcecandy:number;
  perMonthOrYearStr="per month";
  constructor() { 
    this.onTwentyfiveClicked();
  }
      
  ngOnInit() {
  }
  isChecked(e){
    if(e.target.checked){
      this.perMonthOrYearStr="per month";
      this.isAnnually=false;
      this.isMonthly=true;
      this.calculator();
      console.log(`Monthly is toggled`);
      
    }
    else if(!e.target.checked){
      this.isAnnually=true;
      this.isMonthly=false;
      this.perMonthOrYearStr="per annum";
      this.calculator();
      console.log(this.perMonthOrYearStr);
    }
  }
  onTwentyfiveClicked(){
    this.servingCount=25;
    this.fiftyClicked=false;
    this.hundredClicked=false;
    this.twoHundredClicked=false;
    this.twentyFiveClicked=true;
    this.calculator();
  }
  onFiftyClicked(){
    this.servingCount=50;
    this.twentyFiveClicked=false;
    this.hundredClicked=false;
    this.twoHundredClicked=false;
    this.fiftyClicked=true;
    this.calculator();

  }
  onHundredClicked(){
    this.servingCount=100;
    this.twentyFiveClicked=false;
    this.fiftyClicked=false;
    this.twoHundredClicked=false;
    this.hundredClicked=true;
    this.calculator();
  }
  onTwoHundredClicked(){
    this.servingCount=200;
    this.twentyFiveClicked=false;
    this.fiftyClicked=false;
    this.hundredClicked=false;
    this.twoHundredClicked=true;
    this.calculator();
  }
  calculator(){
    if(this.isMonthly){
      this.totalLollipop=this.lollipopMonthlyPrice * this.servingCount;
      this.totalIcecandy=this.IcecandyMonthlyPrice * this.servingCount;
    }else if(this.isAnnually){
      this.totalLollipop=this.lollipopAnnualPrice * this.servingCount * 12;
      this.totalIcecandy=this.icecandyAnnualPrice * this.servingCount * 12;
    }
    this.lollipopMinusIcecandy=this.totalIcecandy - this.totalLollipop;
  }
  
}

