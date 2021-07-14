import { Component, OnInit } from '@angular/core';
import { DataService } from '../../service/data.service';

@Component({
  selector: 'app-pokemon-list',
  templateUrl: './pokemon-list.component.html',
  styleUrls: ['./pokemon-list.component.css']
})
export class PokemonListComponent implements OnInit {
  pokemons: any[] = [];
  totalPokemons: any = null;
  pokemonSelecionado: any = null;

  offset: number = 0;
  limit: number = 4;

  constructor(private dataService: DataService ) { }

  ngOnInit(): void {
    this.getPokemons();
  }

  //chamando o servico responsavel por pegar todos os pokemons na API
  getPokemons(){
    this.dataService.getPokemon(this.offset, this.limit).subscribe((resposta: any) =>{
      this.totalPokemons = resposta.count;

      resposta.results.forEach((resultado:any) =>{
        this.dataService.getMoreData(resultado.name).subscribe((unicaResposta: any) =>{
          this.pokemons.push(unicaResposta);
          console.log(this.pokemons);
        });
      });
    });
  }

  proximaPagina(){
    if(this.offset <= 1120){
      this.offset += this.limit;
      console.log(this.offset);

      this.dataService.getPokemon(this.offset, this.limit).subscribe((data: any)=>{
        this.totalPokemons = data;
        console.log(this.totalPokemons);

        data.results.forEach((resultado:any) =>{
          this.dataService.getMoreData(resultado.name).subscribe((unicaResposta: any) =>{
            this.pokemons.push(unicaResposta);
            this.pokemons.shift();
            console.log(this.pokemons);
          });
        });
      });
    }
  }

  PaginaAnterior(){
    if(this.offset >= 1){
      this.offset -= this.limit;
      console.log(this.offset);

      this.dataService.getPokemon(this.offset, this.limit).subscribe((data: any)=>{
        this.totalPokemons = data;
        console.log(this.totalPokemons);

        data.results.forEach((resultado:any) =>{
          this.dataService.getMoreData(resultado.name).subscribe((unicaResposta: any) =>{
            this.pokemons.push(unicaResposta);
            this.pokemons.shift();
            console.log(this.pokemons);
          });
        });
      });
    }
  }

  selecionarPokemon(url: string){
    this.dataService.getMoreData(url).subscribe((x) =>{
      this.pokemonSelecionado = x;
    });
  }
}
