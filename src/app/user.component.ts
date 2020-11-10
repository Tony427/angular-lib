import { Component } from '@angular/core';

@Component({
    selector: 'app-user',
    // template的話直接使用html樣板
    // templateUrl的話則是指定獨立的html檔案樣板
    template: `
    <input type="text" [(ngModel)]="name">
    <p>Hello {{ name }} !</p>
    <p>I'm the user component</p>
    `
})

export class UserComponent {
    name = 'Tony';

    onUserInput(event) {
        this.name = event.target.value;
    }
}
