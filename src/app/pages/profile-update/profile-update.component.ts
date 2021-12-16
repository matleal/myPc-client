import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ToastService } from '../../services/toast.service';
import { UserService } from '@app/services/user.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { User } from '@app/@shared/models/user.model';

@Component({
  selector: 'app-profile-update',
  templateUrl: './profile-update.component.html',
  styleUrls: ['./profile-update.component.scss'],
})
export class ProfileUpdateComponent implements OnInit {
  userForm!: FormGroup;
  user!: User;
  userId: any;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private toastService: ToastService,
    private fb: FormBuilder,
    private userService: UserService
  ) {}

  loadForms() {
    this.userForm = this.fb.group({
      id: [''],
      role: [''],
      createdAt: [''],
      email: ['', Validators.email],
      name: ['', Validators.required],
    });
  }

  populateForms(user: User) {
    this.userForm.patchValue(user);
  }

  ngOnInit(): void {
    this.loadForms();

    this.userService.getUser().subscribe((user) => {
      this.user = user;
      this.userId = user.id;
      this.populateForms(user);
    });
  }

  updateUser() {
    console.log(this.userForm.value);
    this.userService.updateUser(this.userForm.value, this.userId).subscribe((user) => {
      this.toastService.showMessage('Informações atualizadas com sucesso!');
      this.router.navigate(['/feed']);
    });
  }
}
