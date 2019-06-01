import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-products',
  templateUrl: './products.page.html',
  styleUrls: ['./products.page.scss'],
})
export class ProductsPage implements OnInit {

  products= JSON.parse(localStorage.getItem('Posts'));

  constructor(private router: Router) { }

  ngOnInit() {
    console.log(this.products);
    
  }


  addProductDetails(item){
    localStorage.setItem('ProductDetails',JSON.stringify(item));
   
    this.router.navigate(['/menu/product-details'])

  }



}
