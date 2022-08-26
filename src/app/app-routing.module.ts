import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ArticlesComponent } from './components/articles/articles.component';
import { CreateArticleComponent } from './components/create-article/create-article.component';
import { OrdersComponent } from './components/orders/orders.component';

const routes: Routes = [
  { path: 'articles', component: ArticlesComponent },
  { path: 'articles/add', component: CreateArticleComponent },
  { path: 'orders', component: OrdersComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
