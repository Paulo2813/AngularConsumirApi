import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  API_URL: string = 'http://127.0.0.1:8000/api/endpoint/productos';

  constructor(private htppClient: HttpClient) { }

  getProducts(): Observable<any> {
    return this.htppClient.get(this.API_URL).pipe(res=> res);

  }

  
}