import { Component, OnInit } from '@angular/core';
import { HttpService } from 'src/app/services/http.service';
import { OrderService } from 'src/app/services/order.service';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css'],
})
export class OrdersComponent implements OnInit {
  constructor(private http: HttpService, private orderService: OrderService) {}
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
}
