import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PokemonsDeletePage } from './pokemons-delete.page';

const routes: Routes = [
  {
    path: '',
    component: PokemonsDeletePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PokemonsDeletePageRoutingModule {}
