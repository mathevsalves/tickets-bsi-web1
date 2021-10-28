import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  public name: FormControl = new FormControl('', [Validators.required, Validators.minLength(3)]);
  public email: FormControl = new FormControl('', [Validators.required, Validators.email]);
  public password: FormControl = new FormControl('', [Validators.required, Validators.minLength(6)]);

  public hide: boolean = true;

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  public register() {
    if (!this.validatedForm()) {
      console.log(
        this.name.value,
        this.email.value,
        this.password.value,
      );
      this.router.navigate(['login']);
    } else
      alert('dados invalidos');
  }

  public validatedForm(): boolean {
    return this.name.invalid || this.email.invalid || this.password.invalid;
  }

  public login() {
    alert('vou para login');
    this.router.navigate(['login']);
  }
}
