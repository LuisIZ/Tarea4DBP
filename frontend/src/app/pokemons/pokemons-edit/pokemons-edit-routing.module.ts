import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PokemonsEditPage } from './pokemons-edit.page';

const routes: Routes = [
  {
    path: '',
    component: PokemonsEditPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PokemonsEditPageRoutingModule {}
