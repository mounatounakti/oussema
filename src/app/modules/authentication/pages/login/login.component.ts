import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {Router} from "@angular/router";
import {NgToastService} from "ng-angular-popup";
import {AuthService} from "../../../../core/services/auth.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.sass']
})
export class LoginComponent implements OnInit{
  wrongData: boolean = true
  passwordShown: boolean = false
  passwordType: string = 'password';
  loginForm = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required])
  })

  constructor(private auth: AuthService, private router: Router,
              private toast: NgToastService,
  ) { }

  ngOnInit(): void {
  }

  get email(){
    return this.loginForm.get('email')?.value;
  }
  get password(){
    return this.loginForm.get('password')?.value;
  }
  loginUser() {
    let user: {email: any, password: any} = {
      email: this.email,
      password: this.password
    };
    this.auth.login(user)
      .subscribe(
        (res) => {
          if(res){
            this.toast.success({detail: "Success", summary: "LoggedIn Successfully", duration: 5000})
            this.router.navigate(['/user-dashboard']);
          }
        },
        (error: Error)=> {
          this.toast.error({detail: "Error Message", summary: "Login failed, Try again later!", duration: 5000})
          this.wrongData = true;
          console.log(error);
        }
      )
  }

  togglePassword(){
    if(this.passwordShown){
      this.passwordShown = false;
      this.passwordType = 'password';
    }else{
      this.passwordShown = true;
      this.passwordType = 'password';
    }
  }
}
