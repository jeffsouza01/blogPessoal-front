import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from 'src/app/model/User';
import { AuthService } from 'src/app/service/auth.service';
import { environment } from 'src/environments/environment.prod';

@Component({
  selector: 'app-user-edit',
  templateUrl: './user-edit.component.html',
  styleUrls: ['./user-edit.component.css']
})
export class UserEditComponent implements OnInit {

  user: User = new User()
  idUser: number
  passwordConfirmed: string
  typeInUser: string

  constructor(
    private authService: AuthService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    window.scroll(0,0)
    if (environment.token == '') {
      this.router.navigate(['/login'])
    }

    this.idUser = this.route.snapshot.params['id']

    this.findByIdUser(this.idUser)
  }

  passwordConfirm(event: any) {
    this.passwordConfirmed = event.target.value;
  }


  typeUser(event: any) {
    this.typeInUser = event.target.value;
  }

  update() {
    this.user.type = this.typeInUser

    if(this.user.password != this.passwordConfirmed)
    {
      alert('As senhas estão incorretas')
    }
    else{

      this.authService.register(this.user).subscribe((resp: User)=>{
        this.user = resp
        this.router.navigate(['/entrar'])
        alert('Usuário Atualizado com sucesso!!!')

        environment.token = ''
        environment.name = ''
        environment.id = 0
        environment.photo = ''

        this.router.navigate(['/login'])
      })
    }
  }

  findByIdUser(id: number) {
    this.authService.getByIdUser(id).subscribe((resp: User) => {
      this.user = resp
    })
  }

}
