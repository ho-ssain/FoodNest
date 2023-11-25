import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, tap } from 'rxjs';

import { HttpClient } from '@angular/common/http';

import { ToastrService } from 'ngx-toastr';
import { IUserLogin } from '../interfaces/IUserLogin';
import { USER_LOGIN_URL, USER_REGISTER_URL } from '../constants/api_urls';
import { IUserRegister } from '../interfaces/IUserRegister';

const USER_KEY = 'User';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private userSubject = new BehaviorSubject<any>(
    this.getUserFromLocalStorage()
  );
  public userObservable: Observable<any>;

  constructor(private http: HttpClient, private toastrService: ToastrService) {
    this.userObservable = this.userSubject.asObservable();
  }

  public get currentUser(): any {
    return this.userSubject.value;
  }

  login(userLogin: IUserLogin): Observable<any> {
    return this.http.post<any>(USER_LOGIN_URL, userLogin).pipe(
      tap({
        next: (user) => {
          this.setUserToLocalStorage(user);
          this.userSubject.next(user);
          this.toastrService.success(
            `Welcome to BurgerNest ${user.name}!`,
            'Sign-in Successfull!'
          );
        },
        error: (errorRes) => {
          this.toastrService.error(errorRes.error, 'Sign-in failed!');
        },
      })
    );
  }

  register(userRegister: IUserRegister): Observable<any> {
    return this.http.post<any>(USER_REGISTER_URL, userRegister).pipe(
      tap({
        next: (user) => {
          this.setUserToLocalStorage(user);
          this.userSubject.next(user);
          this.toastrService.success(
            `Welcome to the Foodmine ${user.data.userName}`,
            'Register Successful'
          );
        },
        error: (errorResponse) => {
          this.toastrService.error(errorResponse.error, 'Register Failed');
        },
      })
    );
  }

  logout() {
    // this.userSubject.next();
    localStorage.removeItem(USER_KEY);
    window.location.reload();
  }

  private setUserToLocalStorage(user: any) {
    localStorage.setItem(USER_KEY, JSON.stringify(user));
  }

  private getUserFromLocalStorage(): any {
    const userJson = localStorage.getItem(USER_KEY);
    if (userJson) return JSON.parse(userJson);
    // return new User();
  }
}
