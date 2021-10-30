import { Show } from 'src/app/interfaces/show';
import { Component, Input, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { TicketsService } from 'src/app/services/tickets.service';

@Component({
  selector: 'app-show-buy',
  templateUrl: './show-buy.component.html',
  styleUrls: ['./show-buy.component.scss']
})
export class ShowBuyComponent implements OnInit {

  private id: number = 0;
  public show!: Show;

  constructor(
    private ticketsService: TicketsService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.route.params.subscribe(data => {
      this.id = data.id;
      this.findByIdShow(this.id);
    })
  }

  private findByIdShow(id: number) {
    this.ticketsService
      .findByIdShow(id)
      .subscribe(data => {
        this.show = data;
        console.log(this.show);

      },
        (error) => {
          console.log(error);
        })
  }

}
