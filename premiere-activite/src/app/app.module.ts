import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { PostListComponentComponent } from './post-list-component/post-list-component.component';
import { ListItemComponent } from './post-list-component/list-item/list-item.component';

@NgModule({
  declarations: [
    AppComponent,
    PostListComponentComponent,
    ListItemComponent
  ],
  imports: [
    BrowserModule,
	FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
