import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import {
  NgbAlertModule,
  NgbModule,
  NgbPaginationModule,
} from '@ng-bootstrap/ng-bootstrap';
import { NavComponent } from './nav/nav.component';
import { ArticlesComponent } from './components/articles/articles.component';
import { OrdersComponent } from './components/orders/orders.component';
import { CreateArticleComponent } from './components/create-article/create-article.component';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { InputTextModule } from 'primeng/inputtext';
import { CardModule } from 'primeng/card';
import { InputNumberModule } from 'primeng/inputnumber';
import { ButtonModule } from 'primeng/button';
import { FileUploadModule } from 'primeng/fileupload';
import { MessageModule } from 'primeng/message';
import { TabMenuModule } from 'primeng/tabmenu';
import { MessagesModule } from 'primeng/messages';
import { RippleModule } from 'primeng/ripple';
import { ConfirmPopupModule } from 'primeng/confirmpopup';
import { ToastModule } from 'primeng/toast';
import { ConfirmationService, MessageService } from 'primeng/api';
import { TableModule } from 'primeng/table';
import { DialogModule } from 'primeng/dialog';
import { DynamicDialogModule } from 'primeng/dynamicdialog';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    ArticlesComponent,
    OrdersComponent,
    CreateArticleComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    HttpClientModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MessageModule,
    TabMenuModule,
    InputTextModule,
    CardModule,
    InputNumberModule,
    ButtonModule,
    FileUploadModule,
    MessagesModule,
    RippleModule,
    ConfirmPopupModule,
    ToastModule,
    TableModule,
    DialogModule,
    DynamicDialogModule,
  ],
  providers: [ConfirmationService, MessageService],
  bootstrap: [AppComponent],
})
export class AppModule {}
