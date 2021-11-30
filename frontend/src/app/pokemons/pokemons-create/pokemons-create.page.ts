import { Component, OnInit } from '@angular/core';
import {FormBuilder,FormGroup} from '@angular/forms';
import {Router} from '@angular/router';
import { PokemonsService } from 'src/app/_services/pokemons.service';


@Component({
  selector: 'app-pokemons-create',
  templateUrl: './pokemons-create.page.html',
  styleUrls: ['./pokemons-create.page.scss'],
})
export class PokemonsCreatePage implements OnInit {

  FormPoke: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private pokemonService: PokemonsService,
    private router:Router
  ) { 
    this.FormPoke=this.formBuilder.group({
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
  }
  
  addPokemon(val:any){
    this.pokemonService.insertPokemon(val).subscribe(
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
