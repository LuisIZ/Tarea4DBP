import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PokemonsEditPageRoutingModule } from './pokemons-edit-routing.module';

import { PokemonsEditPage } from './pokemons-edit.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PokemonsEditPageRoutingModule
  ],
  declarations: [PokemonsEditPage]
})
export class PokemonsEditPageModule {}
