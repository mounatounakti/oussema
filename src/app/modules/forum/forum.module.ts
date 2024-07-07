import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ForumComponent } from './components/forum/forum.component';
import { ListPostComponent } from './components/list-post/list-post.component';
import { ActiveTopicsComponent } from './components/active-topics/active-topics.component';
import { StatsComponent } from './components/stats/stats.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    ForumComponent,
    ListPostComponent,
    ActiveTopicsComponent,
    StatsComponent,
    NavBarComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
    ForumComponent
  ]
})
export class ForumModule { }
