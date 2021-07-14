import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) {}

  // servico de pegar todos os nomes e url dos pokemons na API
  getPokemon(offset: number, limit: number){//buscar info api (Só é chamada sempre que for requisitada)
    return this.http.get(`https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${limit}`) // requicisao get
    }

  // pegar o pokemon pelo nome
  getMoreData(name: string){
    return this.http.get(`https://pokeapi.co/api/v2/pokemon/${name}`);
  }
}
