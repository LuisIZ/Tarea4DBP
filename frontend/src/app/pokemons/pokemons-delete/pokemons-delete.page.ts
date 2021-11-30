import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router} from '@angular/router';
import { PokemonsService } from 'src/app/_services/pokemons.service';

@Component({
  selector: 'app-pokemons-delete',
  templateUrl: './pokemons-delete.page.html',
  styleUrls: ['./pokemons-delete.page.scss'],
})
export class PokemonsDeletePage implements OnInit {

  pokemon:any;
  pokemonID:any;

  constructor(
    private activatedRoute:ActivatedRoute,
    private pokemonService:PokemonsService,
    private router:Router
  ) { }

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe(
      data=>{
        this.pokemonID=data.get('id');
        this.pokemonService.getPokemonID(this.pokemonID).subscribe(
          response=>{
            console.log(response)
            this.pokemon=response;
          },
          error=>{console.log(error);}
        )
      }
    )
  }
  deletePokemon(pokemonID:any){
    this.pokemonService.deletePokemon(this.pokemonID).subscribe(
      response=>{
        console.log(response);
        this.pokemon=response;
        this.router.navigate(['/pokemons'])
      },
      error=>{console.log(error);}
    )
  }
}
