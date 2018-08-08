import { Component, OnInit, Input } from '@angular/core';
import { Heroe } from '../../services/heroes.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styles: []
})
export class CardComponent implements OnInit {
  @Input() heroe: Heroe;

  constructor(private router: Router) { }

  ngOnInit() {
  }

  getHeroe() {
    console.log(this.heroe);

    this.router.navigate( ['/heroe', this.heroe.id] );
  }


}
