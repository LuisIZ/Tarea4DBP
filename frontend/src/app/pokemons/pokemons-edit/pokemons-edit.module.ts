import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PokemonsEditPageRoutingModule } from './pokemons-edit-routing.module';

import { PokemonsEditPage } from './pokemons-edit.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PokemonsEditPageRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [PokemonsEditPage]
})
export class PokemonsEditPageModule {}
