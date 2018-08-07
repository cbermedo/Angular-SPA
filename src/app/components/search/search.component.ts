import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HeroesService, Heroe } from '../../services/heroes.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html'
})
export class SearchComponent implements OnInit {
  heroesSearch: Heroe[] = [];
  termino: string;
  constructor( private _heroesService: HeroesService,
               private _activatedRoute: ActivatedRoute,
               private _router: Router
  ) { }

  ngOnInit() {
    // hecho con funcion de flecha ya que lo hace en una sola linea.
    this._activatedRoute.params.subscribe( parm => this.termino =  parm['term']);
    this._activatedRoute.params.subscribe( parametro => this.heroesSearch = this._heroesService.searchHero( parametro['term'] ) );
  }

  getHeroebyId (idx: number) {
    this._router.navigate( ['/heroe', idx] );
  }

}
