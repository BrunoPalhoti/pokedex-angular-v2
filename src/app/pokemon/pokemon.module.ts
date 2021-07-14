import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PokemonListComponent } from './pokemon-list/pokemon-list.component';
import { PokemonDetalheComponent } from './pokemon-detalhe/pokemon-detalhe.component';



@NgModule({
  declarations: [
    PokemonListComponent,
    PokemonDetalheComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    PokemonListComponent,
    PokemonDetalheComponent
  ]
})
export class PokemonModule { }
