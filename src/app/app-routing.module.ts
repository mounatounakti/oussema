import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ForumComponent } from './modules/forum/components/forum/forum.component';

const routes: Routes = [
  { path: 'forum', component: ForumComponent } // Route for ForumComponent
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
