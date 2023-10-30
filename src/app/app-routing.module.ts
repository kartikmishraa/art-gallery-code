import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ExploreComponent } from './pages/explore/explore.component';
import { ArtworkComponent } from './pages/artwork/artwork.component';

const routes: Routes = [
  { path: '', title: 'Home', component: HomeComponent },
  { path: 'explore', title: 'Artworks', component: ExploreComponent },
  { path: 'artwork/:id', title: 'Artwork', component: ArtworkComponent },
  { path: '**', redirectTo: '' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
