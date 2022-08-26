import { Component, OnInit } from '@angular/core';
import { Message } from 'primeng/api';
import { HttpService } from 'src/app/services/http.service';

@Component({
  selector: 'app-articles',
  templateUrl: './articles.component.html',
  styleUrls: ['./articles.component.css'],
})
export class ArticlesComponent implements OnInit {
  articles: any;
  articlesOfOrder: any[] = [];
  msgs: Message[] = [];

  constructor(private http: HttpService) {}

  ngOnInit(): void {
    this.http.getAricles().subscribe((data) => {
      this.articles = data;
    });
  }
}
