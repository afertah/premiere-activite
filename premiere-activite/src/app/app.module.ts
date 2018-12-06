import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router'
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { PostListComponentComponent } from './post-list-component/post-list-component.component';
import { ListItemComponent } from './post-list-component/list-item/list-item.component';
import { PostsService } from './services/posts.service';
import { NewPostComponent } from './new-post/new-post.component';
import { Routes} from '@angular/router';
import { HeaderComponent } from './header/header.component'
const appRoutes : Routes = [
{ path : 'posts' , component: PostListComponentComponent },
{ path : 'newPost', component : NewPostComponent},
{ path : '', component : PostListComponentComponent},
{ path : '**', redirectTo: 'not-found'}
];
@NgModule({
  declarations: [
    AppComponent,
    PostListComponentComponent,
    ListItemComponent,
    NewPostComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
	FormsModule,
	ReactiveFormsModule,
	HttpClientModule,
	RouterModule.forRoot(appRoutes)
  ],
  providers: [
  PostsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
