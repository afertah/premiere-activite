import { Component, OnInit,Input, OnDestroy} from '@angular/core';
import { PostsService } from '../services/posts.service';
import {Subscription} from 'rxjs';
import { Observable } from 'rxjs';
import { Post } from '../models/Post.model';
@Component({
  selector: 'app-post-list-component',
  templateUrl: './post-list-component.component.html',
  styleUrls: ['./post-list-component.component.css']
})
export class PostListComponentComponent implements OnInit, OnDestroy {
	posts:Post[];
	postsSubscription: Subscription;
  constructor(private postsService: PostsService) { }
  ngOnInit() {
    this.postsSubscription = this.postsService.postsSubject.subscribe(
      (posts: Post[]) => {
        this.posts = posts;
      }
    );
    this.postsService.emitPostsSubject();
  }
	ngOnDestroy() {
		this.postsSubscription.unsubscribe();
	}
 }
