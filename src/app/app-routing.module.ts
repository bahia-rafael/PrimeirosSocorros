import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', loadChildren: './home/home.module#HomePageModule' },  { path: 'search', loadChildren: './search/search.module#SearchPageModule' },
  { path: 'blank', loadChildren: './blank/blank.module#BlankPageModule' },
  { path: 'exit', loadChildren: './exit/exit.module#ExitPageModule' },
  { path: 'complementares', loadChildren: './complementares/complementares.module#ComplementaresPageModule' },

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
