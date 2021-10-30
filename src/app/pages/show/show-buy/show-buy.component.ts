import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Show } from 'src/app/interfaces/show';
import { TicketsService } from 'src/app/services/tickets.service';
import { ShowBuy } from './../../../interfaces/show-buy';

@Component({
  selector: 'app-show-buy',
  templateUrl: './show-buy.component.html',
  styleUrls: ['./show-buy.component.scss']
})
export class ShowBuyComponent implements OnInit {

  private id: number = 0;
  public show!: Show;

  public nameFormControl: FormControl = new FormControl('', [Validators.required, Validators.minLength(3)]);
  public numberFormControl: FormControl = new FormControl('', [Validators.required, Validators.minLength(16), Validators.maxLength(16)]);
  public validatedFormControl: FormControl = new FormControl('', [Validators.required, Validators.minLength(4), Validators.maxLength(4)]);
  public cvvFormControl: FormControl = new FormControl('', [Validators.required, Validators.minLength(3), Validators.maxLength(3)]);
  public cpfFormControl: FormControl = new FormControl('', [Validators.required, Validators.minLength(11), Validators.maxLength(11)]);
  public emailFormControl: FormControl = new FormControl('', [Validators.required, Validators.email]);

  constructor(
    private ticketsService: TicketsService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.route.params.subscribe(data => {
      this.id = parseInt(data.id, 10);
      this.findByIdShow(this.id);
    })
    const test = this.test();
    this.nameFormControl.setValue(test.name);
    this.numberFormControl.setValue(test.number);
    this.validatedFormControl.setValue(test.validated);
    this.cvvFormControl.setValue(test.cvv);
    this.cpfFormControl.setValue(test.cpf);
    this.emailFormControl.setValue(test.email);
  }

  private test() {
    const showBuy: ShowBuy = {
      idShow: this.id,
      name: 'Daniel',
      number: '1234567890123456',
      validated: '1029',
      cvv: '123',
      cpf: '98765432109',
      email: 'd@d.com'
    }
    return showBuy;
  }

  private findByIdShow(id: number) {
    this.ticketsService
      .findByIdShow(id)
      .subscribe(data => {
        this.show = data;
      },
        (error) => {
          console.log(error);
        })
  }

  public buyShow() {
    if (!this.validatedForm()) {
      console.log(this.valueForm());
    }
  }

  public validatedForm(): boolean {
    return this.nameFormControl.invalid ||
      this.numberFormControl.invalid ||
      this.validatedFormControl.invalid ||
      this.cvvFormControl.invalid ||
      this.cpfFormControl.invalid ||
      this.emailFormControl.invalid;
  }

  private valueForm() {
    const showBuy: ShowBuy = {
      idShow: this.id,
      name: this.nameFormControl.value,
      number: this.numberFormControl.value,
      validated: this.validatedFormControl.value,
      cvv: this.cvvFormControl.value,
      cpf: this.cpfFormControl.value,
      email: this.emailFormControl.value
    }
    return showBuy;
  }

}
