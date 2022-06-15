import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../model/User';
import { UserLogin } from '../model/UserLogin';
import { AuthService } from '../service/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  user: User = new User;
  userLogin: UserLogin = new UserLogin;
  confirmPassword: string;
  userType: string

  constructor(
    private authService: AuthService,
    private router: Router
  ) { }

  ngOnInit() {

    window.scroll(0,0)
  }

  passwordConfirm(event:any) {
    this.passwordConfirm = event.target.value;

  }

  typeUser(event:any) {
    this.userType = event.target.value;
  }

  register() {
    this.user.type = this.userType

    if(this.user.password != this.confirmPassword) {
      alert("As Senhas estão incorretas")

    } else {
        this.authService.register(this.user).subscribe((resp: User) => {
          this.user = resp
          alert("Usuário Cadastrado com sucesso!")
          this.router.navigate((['/login']))
        })
    }

  }
}
