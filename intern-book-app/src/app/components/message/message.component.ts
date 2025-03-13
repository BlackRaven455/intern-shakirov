import {Component} from '@angular/core';
import {MessageService} from '../../services/message.service';
import {NgForOf, NgIf} from '@angular/common';
import {MatButton} from '@angular/material/button';
import {MatSlideToggle} from "@angular/material/slide-toggle";

@Component({
    selector: 'app-message',
    imports: [
        NgForOf,
        MatButton,
        NgIf,
        MatSlideToggle
    ],
    templateUrl: './message.component.html',
    styleUrl: './message.component.css'
})
export class MessageComponent {
    isVisible = false;

    constructor(protected messageService: MessageService) {
    }

    showContent() {
        this.isVisible = !this.isVisible;
    }

    clear() {
        this.messageService.clear();
    }
}
