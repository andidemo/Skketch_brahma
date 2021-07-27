import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BadabroComponent } from './component/badabro/badabro.component';
import { HomeComponent } from './component/home/home.component';
import { NewsComponent } from './component/news/news.component';
import { SketchBrahmaComponent } from './component/sketch-brahma/sketch-brahma.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'task', component: BadabroComponent },
  { path: 'news', component: NewsComponent },
  { path: 'sketch_brahma', component: SketchBrahmaComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' }, // redirect to `first-component`
  { path: '**', component: HomeComponent },  // Wildcard route for a 404 page
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
