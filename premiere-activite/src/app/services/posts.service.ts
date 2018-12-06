import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import {Observable} from 'rxjs';
import { Post } from '../models/Post.model';
import * as firebase from 'firebase';
import DataSnapshot = firebase.database.DataSnapshot;
 export class PostsService {
 nbLovelts: number = 0;
 postsSubject = new Subject<Post[]>();
 private posts: Post[] = [];
 afficheLovelts(){
	console.log(this.nbLovelts);
	}
	emitPostsSubject() {
    this.postsSubject.next(this.posts);
  }
	savePost(){
		firebase.database().ref('/posts').set(this.posts);
	}
	getPosts() {
    firebase.database().ref('/posts')
      .on('value', (data: DataSnapshot) => {
          this.posts = data.val() ? data.val() : [];
          this.emitPostsSubject();
        }
      );
  }
  constructor() {
    this.getPosts();
}
addPost(post: Post){
	this.posts.push(post);
	this.savePost();
	this.emitPostsSubject();
}
deletePost(index: number){
	this.posts.splice(index,1);
	this.savePost();
	this.emitPostsSubject();
}
}
