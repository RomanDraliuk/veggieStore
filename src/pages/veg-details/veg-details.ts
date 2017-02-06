import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

/*
  Generated class for the VegDetails page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-veg-details',
  templateUrl: 'veg-details.html'
})
export class VegDetailsPage {

  veg:{name:string,price:number,imgUrl:string,color,string}[]=[];
  constructor(public navCtrl: NavController, public navParams: NavParams) {}

  ionViewDidLoad() {
    this.veg = this.navParams.data;
  }

}
