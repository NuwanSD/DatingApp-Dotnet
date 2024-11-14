import { Component, OnInit, inject } from '@angular/core';
import { MembersService } from '../../_services/members.service';
import { Member } from '../../_models/member';
import { MemberCardComponent } from '../member-card/member-card.component';

@Component({
  selector: 'app-member-lists',
  standalone: true,
  imports: [MemberCardComponent],
  templateUrl: './member-lists.component.html',
  styleUrl: './member-lists.component.css',
})
export class MemberListsComponent implements OnInit {
  private memberService = inject(MembersService);
  members: Member[] = [];

  ngOnInit(): void {
    this.loadMembers();
  }

  loadMembers() {
    this.memberService.getMembers().subscribe({
      next: (members) => (this.members = members),
    });
  }
}
