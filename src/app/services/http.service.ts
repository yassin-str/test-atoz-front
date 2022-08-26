import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class HttpService {
  private url = ' http://localhost:8080/api/';

  constructor(private http: HttpClient) {}

  getAricles() {
    return this.http.get<any>(this.url + 'articles');
  }

  addArticle(formData: FormData) {
    return this.http.post<any>(this.url + 'articles', formData);
  }

  addOrder(order: any) {
    return this.http.post<any>(this.url + 'orders', order);
  }

  getOrders() {
    return this.http.get<any>(this.url + 'orders');
  }
}
