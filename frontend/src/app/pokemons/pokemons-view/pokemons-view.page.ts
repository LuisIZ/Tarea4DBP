import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import { PokemonsService } from 'src/app/_services/pokemons.service';

@Component({
  selector: 'app-pokemons-view',
  templateUrl: './pokemons-view.page.html',
  styleUrls: ['./pokemons-view.page.scss'],
})
export class PokemonsViewPage implements OnInit {
  pokemon:any;
  constructor(
    private activatedRoute: ActivatedRoute,
    private pokemonsService: PokemonsService
  ) { }

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe(
      data=>{
        const id=data.get('id');
        this.pokemonsService.getPokemonID(id).subscribe(
          response=>{
            console.log(response);
            this.pokemon=response;
          },
          error=>{
            console.log(error);
          }
        )
      }
    )
  }

}
