import { ToastService } from '@app/services/toast.service';
import { RegisterService } from './register.service';
import { User } from '../@shared/models/user.model';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent implements OnInit {
  user!: User;
  userForm!: FormGroup;

  constructor(
    private registerService: RegisterService,
    private toastService: ToastService,
    private router: Router,
    private fb: FormBuilder
  ) {}

  loadForms() {
    this.userForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      name: ['', Validators.required],
      password: ['', [Validators.required, Validators.minLength(6)]],
    });
  }

  ngOnInit(): void {
    this.loadForms();
  }

  createUser() {
    this.user = this.userForm.value;
    console.log(this.user);

    return this.registerService.create(this.user).subscribe(() => {
      this.toastService.showMessage('Usuario criado com sucesso!');
      this.router.navigate(['login'], { replaceUrl: true });
    });
  }
}
