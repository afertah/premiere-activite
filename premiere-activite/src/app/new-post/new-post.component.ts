import { Component, OnInit } from '@angular/core';
import { FormGroup,FormBuilder,Validators } from '@angular/forms';
import { PostsService } from '../services/posts.service'
import { Post } from '../models/Post.model';
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';
@Component({
  selector: 'app-new-post',
  templateUrl: './new-post.component.html',
  styleUrls: ['./new-post.component.css']
})
export class NewPostComponent implements OnInit {

  newPostForm : FormGroup;
  constructor(private postsService: PostsService, private formBuilder : FormBuilder, private router : Router) { }
  ngOnInit() {
	this.initForm();
  }
  initForm(){
	this.newPostForm = this.formBuilder.group({
	title:['',Validators.required],
	create:'',
	contenu:['',Validators.required]})
  }
	onSubmit(){
	const formValue = this.newPostForm.value;
	const newPost = new Post(formValue['title'],new Date(),formValue['contenu']);
	this.postsService.addPost(newPost);
	this.postsService.emitPostsSubject();
	this.router.navigate(['/posts']);
	}
}
