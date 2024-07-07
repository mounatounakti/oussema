import { Component, OnInit } from '@angular/core';
import { ForumService } from '../../../../core/services/forum.service';

@Component({
  selector: 'app-stats',
  templateUrl: './stats.component.html',
  styleUrls: ['./stats.component.sass']
})
export class StatsComponent implements OnInit {
  stats: any = {};

  constructor(private forumService : ForumService) {}

  ngOnInit(): void {
    this.forumService.getStats().subscribe((data: any) => {
      this.stats = data;
    });
  }

}
