import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  
 constructor(private http: HttpClient) { }

  // getLocalData(){
  //   return this.http.get("/assets/information.json")
  // }

  getRemoteData(){
    return this.http.get(
      "https://5bcce576cf2e850013874767.mockapi.io/task/categories"
    );
  }
 
}
