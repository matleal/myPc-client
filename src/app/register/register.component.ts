import { RegisterService } from './register.service';
import { User } from './user.model';
import { Component, OnInit } from '@angular/core';

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

  constructor(private registerService: RegisterService) {}

  ngOnInit(): void {
    console.log(this.user);
  }

  createUser() {
    console.log("Clicou");
    return this.registerService.create(this.user).subscribe(() => {
      console.log("Usuario criado!")
    })
  }
}
