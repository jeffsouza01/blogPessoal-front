import { environment } from 'src/environments/environment.prod';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  name = environment.name
  photo = environment.photo
  id = environment.id

  constructor(
    private router: Router
  ) { }

  ngOnInit(

  ) {
  }

  exit(){
    this.router.navigate(['/login'])
    environment.token = ' ';
    environment.name =  ' ';
    environment.photo = ' ';
    environment.id = 0;
  }

}
