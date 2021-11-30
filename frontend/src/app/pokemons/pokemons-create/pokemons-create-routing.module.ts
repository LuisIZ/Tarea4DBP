import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PokemonsCreatePage } from './pokemons-create.page';

const routes: Routes = [
  {
    path: '',
    component: PokemonsCreatePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PokemonsCreatePageRoutingModule {}
