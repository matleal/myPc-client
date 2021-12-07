import { ToastService } from '@app/services/toast.service';
import { RegisterService } from './register.service';
import { User } from '../@shared/models/user.model';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent implements OnInit {
  user: User = {
    email: '',
    name: '',
    password: '',
  };

  constructor(private registerService: RegisterService, private toastService: ToastService, private router: Router) {}

  ngOnInit(): void {
    console.log(this.user);
  }

  createUser() {
    console.log('Clicou');
    return this.registerService.create(this.user).subscribe(() => {
      this.toastService.showMessage('Usuario criado com sucesso!');
      this.router.navigate(['login'], { replaceUrl: true });
    });
  }
}
