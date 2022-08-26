import { EventEmitter, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class OrderService {
  newAricleInOrcderEvent = new EventEmitter<any>();
  newOrder: any[] = [];
  constructor(  ){}
}
