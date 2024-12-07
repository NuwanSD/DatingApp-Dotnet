import {
  AfterViewChecked,
  Component,
  ViewChild,
  inject,
  input,
  viewChild,
} from '@angular/core';
import { MessagesService } from '../../_services/messages.service';
import { TimeagoModule } from 'ngx-timeago';
import { FormsModule, NgForm } from '@angular/forms';

@Component({
  selector: 'app-member-messages',
  standalone: true,
  imports: [TimeagoModule, FormsModule],
  templateUrl: './member-messages.component.html',
  styleUrl: './member-messages.component.css',
})
export class MemberMessagesComponent implements AfterViewChecked {
  @ViewChild('messageForm') messageForm?: NgForm;
  @ViewChild('scrollMe') scrollContainer?: any;
  messageService = inject(MessagesService);
  username = input.required<string>();
  messageContent = '';
  loading = false;

  sendMessage() {
    this.loading = true;
    this.messageService
      .sendMessage(this.username(), this.messageContent)
      .then(() => {
        this.messageForm?.reset();
        this.scrollToBottom();
      })
      .finally(() => (this.loading = false));
  }

  ngAfterViewChecked(): void {
    this.scrollToBottom();
  }

  private scrollToBottom() {
    if (this.scrollContainer) {
      this.scrollContainer.nativeElement.scrollTop =
        this.scrollContainer.nativeElement.scrollHeight;
    }
  }
}
