import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PokemonsViewPageRoutingModule } from './pokemons-view-routing.module';

import { PokemonsViewPage } from './pokemons-view.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PokemonsViewPageRoutingModule
  ],
  declarations: [PokemonsViewPage]
})
export class PokemonsViewPageModule {}
