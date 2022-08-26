import { Component, OnInit } from '@angular/core';
import { TabMenuModule } from 'primeng/tabmenu';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css'],
})
export class NavComponent implements OnInit {
  active = 1;
  items!: MenuItem[];
  activeItem!: MenuItem;
  constructor() {}

  ngOnInit() {
    this.items = [
      {
        label: 'Articles',
        icon: 'pi pi-fw pi-home',
        routerLink: '/articles',
      },
      {
        label: 'Orders',
        icon: 'pi pi-fw pi-calendar,orders:orders',
        routerLink: '/orders',
      },
      {
        label: 'New article',
        icon: 'pi pi-fw pi-calendar,orders:orders',
        routerLink: '/articles/add',
      },
    ];

    this.activeItem = this.items[0];
  }
}
