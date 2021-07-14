import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-pokemon-detalhe',
  templateUrl: './pokemon-detalhe.component.html',
  styleUrls: ['./pokemon-detalhe.component.css']
})
export class PokemonDetalheComponent implements OnInit {

  @Input() pokemonFilho: any;

  constructor() { }

  ngOnInit() {
  }
}
