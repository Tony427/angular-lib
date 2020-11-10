import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
// 新增一個user component的位置
import { UserComponent } from './user.component';

@NgModule({
  declarations: [
    AppComponent,
    // module 這裡要load UserComponent，這樣App module才認識這個component
    UserComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
