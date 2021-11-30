import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PokemonsViewPage } from './pokemons-view.page';

const routes: Routes = [
  {
    path: '',
    component: PokemonsViewPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PokemonsViewPageRoutingModule {}
