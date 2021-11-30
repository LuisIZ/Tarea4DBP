import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PokemonsCreatePageRoutingModule } from './pokemons-create-routing.module';

import { PokemonsCreatePage } from './pokemons-create.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PokemonsCreatePageRoutingModule
  ],
  declarations: [PokemonsCreatePage]
})
export class PokemonsCreatePageModule {}
