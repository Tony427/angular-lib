import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
// 新增一個user component的位置
import { UserComponent } from './user.component';
import { FormsModule } from '@angular/forms';
import { DashboardComponent } from './dashboard/dashboard.component';

@NgModule({
  // 這個app module底下用了哪些Component
  declarations: [
    AppComponent,
    // module 這裡要load UserComponent，這樣App module才認識這個component
    UserComponent,
    DashboardComponent
  ],
  // 使用了其他功能 (想像成C#的using)
  imports: [
    BrowserModule,
    FormsModule
  ],
  // 注入那些Service ? (想像成StartUp裡的AddService?)
  providers: [],
  // RootModule專屬
  bootstrap: [AppComponent]
})
export class AppModule { }
