import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import {DataService} from "../../service/Data.service";

/*
  Generated class for the ShoppingBag page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-shopping-bag',
  templateUrl: 'shopping-bag.html'
})
export class ShoppingBagPage {

  constructor(public navCtrl: NavController, public navParams: NavParams , private ds:DataService) {}

  bag:any[]=[];
  total:number = 0;
  ionViewDidEnter()
  {

    this.bag = this.ds.getShopingBag();
    this.total = this.bag.reduce((p,v)=>p+=v.price,0);

  }

}
