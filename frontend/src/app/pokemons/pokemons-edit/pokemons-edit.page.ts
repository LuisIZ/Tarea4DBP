import { Component, OnInit } from '@angular/core';
import {FormBuilder,FormGroup} from '@angular/forms';
import {ActivatedRoute,Router} from '@angular/router';
import { PokemonsService } from 'src/app/_services/pokemons.service';


@Component({
  selector: 'app-pokemons-edit',
  templateUrl: './pokemons-edit.page.html',
  styleUrls: ['./pokemons-edit.page.scss'],
})
export class PokemonsEditPage implements OnInit {

  pokemon:any;
  pokemonID:any;
  pokemonForm:any;

  constructor(
    private pokemonService: PokemonsService,
    private activatedRoute: ActivatedRoute,
    private formBuilder: FormBuilder,
    private router:Router,
  ) { 
    this.pokemonForm=this.formBuilder.group({
      id:[''],
      nombre:[''],
      altura:[''],
      categoria:[''],
      peso:[''],
      habilidad:[''],
      tipo:[''],
      url:[''],
    })
  }

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe(
      data=>{
        this.pokemonID=data.get('id');
        this.pokemonService.getPokemonID(this.pokemonID).subscribe(
          response=>{
              console.log(response)
              this.pokemon=response;
              this.pokemonForm.patchValue(response);
          },
          error=>{console.log(error);}
        )
      }
    );
  }

  updatePokemon(val:any){
    this.pokemonService.updatePokemon(this.pokemonID,val).subscribe(
      response=>{
        console.log(response);
        this.router.navigate(['/pokemons']);
      },
      error=>{
        console.log(error);
      }
    )
  }
}
