import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  public email: FormControl = new FormControl('', [Validators.required, Validators.email]);
  public password: FormControl = new FormControl('', [Validators.required, Validators.minLength(6)]);

  public hide: boolean = true;

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  public login() {
    if (!this.validatedLogin()) {
      if (this.email.value == 'teste@gmail.com' && this.password.value == '123456')
        this.router.navigate(['show']);
      else
        alert('email ou senha incorretos');
    }
  }

  public validatedLogin(): boolean {
    return this.email.invalid || this.password.invalid;
  }

  public register() {
    alert('vou para cadastre-se');
    this.router.navigate(['register']);
  }


}
