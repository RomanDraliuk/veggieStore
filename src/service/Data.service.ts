import {Injectable} from "@angular/core";
@Injectable()

export class DataService
{

 private shoppingBag:any[]=[];

  addVegToshoppingBag(veg){
    this.shoppingBag.push(veg)
  }

  getShopingBag(){
    return this.shoppingBag;
  }


  getVeggies(){
    return [
      {
        name:'Cucumber',
        price:4.36,
        color:'green',
        imgUrl:'1.jpg'
      },
      {
        name:'Tomato',
        price:4.36,
        color:'red',
        imgUrl:'2.jpg'
      },
      {
        name:'Eggplant',
        price:9.3,
        color:'purple',
        imgUrl:'3.jpg'
      }

    ]
  }
}
