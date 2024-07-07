import { Component } from '@angular/core';
import { ForumService } from '../../../../core/services/forum.service';
import { OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';


interface Post {
  title: string;
  time: string;
  author: string;
  tags: string[];
  numComments: number;
  likes: number;
  comments: { commentText: string }[];
}


@Component({
  selector: 'app-list-post',
  templateUrl: './list-post.component.html',
  styleUrls: ['./list-post.component.sass']
})
export class ListPostComponent implements OnInit {
  posts: Post[] = [];
  comments= [{ commentText: ''}]

  constructor() {}

  ngOnInit(): void {
    this.posts = [
      {
        title: 'Angular 101',
        time: '2 hours',
        author: 'John Doe',
        tags: ['Angular', 'Beginner'],
        numComments: 0,
        likes: 0,
        comments: [],
      },
      {
        title: 'Understanding RxJS',
        time: '5 hours',
        author: 'Jane Smith',
        tags: ['RxJS', 'Reactive Programming'],
        numComments: 0,
        likes: 0,
        comments: [],
      },
      {
        title: 'TypeScript Basics',
        time: '1 day',
        author: 'Bob Johnson',
        tags: ['TypeScript', 'JavaScript'],
        numComments: 0,
        likes: 0,
        comments: [],
      },
      {
        title: 'Advanced Angular Routing',
        time: '3 days',
        author: 'Alice Brown',
        tags: ['Angular', 'Routing'],
        numComments: 0,
        likes: 0,
        comments: [],
      }
    ];
    console.log("------------->", this.posts);
  }

  onSubmit(form: NgForm, index: number) {
    this.posts[index].comments.push({
      commentText: form.controls['comment'].value
    });
    this.posts[index].numComments = this.posts[index].comments.length;}

  onDelete(postIndex: number, commentIndex: number) {
    this.posts[postIndex].comments.splice(commentIndex, 1);
    this.posts[postIndex].numComments = this.posts[postIndex].comments.length;
  }

  onLike(postIndex: number) {
    this.posts[postIndex].likes++;
  }

}

