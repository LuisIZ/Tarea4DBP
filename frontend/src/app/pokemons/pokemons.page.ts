import { Component, OnInit } from '@angular/core';
import {range} from 'rxjs';
import {PokemonsService} from '../_services/pokemons.service';

@Component({
  selector: 'app-pokemons',
  templateUrl: './pokemons.page.html',
  styleUrls: ['./pokemons.page.scss'],
})
export class PokemonsPage implements OnInit {

  pokemon:any[];

  constructor(
    private pokemonService: PokemonsService
  ) { }

  ngOnInit() {
  }

  ionViewWillEnter():void{
    this.pokemonService.getPokemons().subscribe(data=>{
      this.pokemon=data;
      console.log(data);
    })
  }
}
