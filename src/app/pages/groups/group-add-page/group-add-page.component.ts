import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';
import {ActivatedRoute, Router} from '@angular/router';
import {GroupsService} from '../../../common/services/groups.service';
import {HeaderComponent} from '../../../common/components/header/header.component';

@Component({
  selector: 'app-group-add-page',
  imports: [
    HeaderComponent,
    ReactiveFormsModule
  ],
  templateUrl: './group-add-page.component.html',
  standalone: true,
  styleUrl: './group-add-page.component.scss'
})
export class GroupAddPageComponent implements OnInit {
  groupForm!: FormGroup;
  groupId: number | null = null;

  constructor(
    private fb: FormBuilder,
    private groupsService: GroupsService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.groupForm = this.fb.group({
      name: ['', Validators.required]
    });

    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.groupId = Number(id);
      this.loadGroupData(this.groupId);
    }
  }

  private loadGroupData(id: number) {
    this.groupsService.getGroup(id).subscribe((group) => {
      this.groupForm.patchValue(group);
    })
  }

  onSubmit() {
    if (this.groupForm.invalid) return; // Добавил return, чтобы не выполнять код при недействительной форме

    const groupData = this.groupForm.value;

    if (this.groupId) {
      this.groupsService.updateGroup(this.groupId, groupData).subscribe(() => {
        this.router.navigate(['/groups']);
      });
    } else {
      this.groupsService.createGroup(groupData).subscribe(() => {
        this.router.navigate(['/groups']);
      });
    }
  }
}
