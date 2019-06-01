import { CartService } from './../cart.service';
import { Component } from '@angular/core';
import {Http, Headers} from '@angular/http'
import { Observable, Subject } from 'rxjs';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { Router } from '@angular/router';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  
 

 public items:any;

  

  ImageArray: any =[];
  products: any;

  constructor(public http: Http,public cartService: CartService,private router: Router) {

    this.ImageArray = [
      {'image':'assets/img/7.jpg'},
      {'image':'assets/img/vegetables.jpg'},
      {'image':'assets/img/5.jpg'},
      {'image':'assets/img/2.jpg'},
      {'image':'assets/img/1.jpg'},
      {'image':'assets/img/3.jpg'}
    ]


    

    this.products= JSON.parse(localStorage.getItem('Posts'));
      
  }



ngOnInit(){

  this.cartService.getRemoteData().subscribe(data=>{
    console.log("Remote Data:");
    console.log(data);
    this.items=data;
    
    
  });
}

addItem(products){
  // console.log(products);
  localStorage.setItem('Posts',JSON.stringify(products));
   
  this.router.navigate(['/menu/products'])

}


}


