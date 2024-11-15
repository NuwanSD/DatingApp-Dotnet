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
  memberService = inject(MembersService);

  ngOnInit(): void {
    if (this.memberService.members().length === 0) this.loadMembers();
  }

  loadMembers() {
    this.memberService.getMembers();
  }
}
