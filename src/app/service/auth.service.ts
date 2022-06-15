import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.prod';
import { User } from '../model/User';
import { UserLogin } from '../model/UserLogin';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private http: HttpClient
  ) { }

  login(userLogin: UserLogin): Observable<UserLogin> {

    return this.http.post<UserLogin>('http://localhost:8090/users/login', userLogin)
  }

  register(user: User): Observable<User>{

    return this.http.post<User>('http://localhost:8090/users/register', user );
  }

  logged() {
    let ok: boolean = false

    if(environment.token != ''){
      ok=true
    }
  }
}
