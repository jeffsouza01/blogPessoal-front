import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment.prod';
import { Postagem } from '../model/Postagem';
import { Tema } from '../model/Tema';
import { User } from '../model/User';
import { AlertasService } from '../service/alertas.service';
import { AuthService } from '../service/auth.service';
import { PostagemService } from '../service/postagem.service';
import { TemaService } from '../service/tema.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  postagem: Postagem = new Postagem()
  tema: Tema = new Tema()
  temaList: Tema[]
  postagemList: Postagem[]
  idTema: number

  user: User = new User()
  idUser = environment.id

  constructor(
    private router: Router,
    private postagemService: PostagemService,
    private temaService: TemaService,
    private authService: AuthService,
    private alertas: AlertasService
  ) { }

  ngOnInit() {
    if(environment.token === ' ') {
      alert("Sessão expirada, efetue o login")
      this.router.navigate(['/login'])
    }
    this.getAllTemas()
    this.getAllPostagens()
  }

  getAllTemas() {
    this.temaService.getAllTema().subscribe((resp: Tema[]) => {
      this.temaList = resp
    })
  }


  getAllPostagens() {
    this.postagemService.getAllPostagens().subscribe((resp:Postagem[]) => {
      this.postagemList = resp
    })
  }

  findByIdTema(){
    this.temaService.getByIdTema(this.idTema).subscribe((resp: Tema) => {
      this.tema = resp
    })
  }

  findUserById() {
    this.authService.getByIdUser(this.idUser).subscribe((resp:User) => {
      this.user = resp
    })
  }

  publish() {
    this.tema.id = this.idTema;
    this.postagem.tema = this.tema;

    this.user.id = this.idUser;
    this.postagem.user = this.user;

    this.postagemService.newPostagem(this.postagem).subscribe((resp: Postagem) => {
      this.postagem = resp

      this.alertas.showAlertSuccess("Postagem realizada com sucesso")
      this.postagem = new Postagem()
      this.getAllPostagens()
    })

  }

}
