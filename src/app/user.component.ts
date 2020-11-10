import { Component } from '@angular/core';

@Component({
    selector: 'app-user',
    // template的話直接使用html樣板
    // templateUrl的話則是指定獨立的html檔案樣板
    template: `
    <p>Hello</p>
    <p>I'm the user component</p>
    `
})

export class UserComponent {}
