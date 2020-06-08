import { Component, OnInit } from '@angular/core';
import { Post } from './post.modal'
import { PostService } from './posts.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  loadedPosts = [];
  isFetching : boolean = true;
  error = { status : false , message:''};

  constructor(private postService: PostService) {}

  ngOnInit() {
    this.fetchPosts();
  }

  onCreatePost(postData: Post) {
    console.log(postData);
    //Send Http request
    this.postService.createPosts(postData)
      .subscribe(responseData => {
        console.log(responseData);
      });
  }

  onFetchPosts() {
    this.fetchPosts();
    this.fetchHttpCode();
  }

  onClearPosts() {
    // Send Http request
    this.postService.deletePosts()
    .subscribe(data=>{this.loadedPosts = [];});;
  }

  private fetchHttpCode() {
    this.postService.fetchHttpCode()
    .subscribe(response => {
      console.log(response);
    });
  }

  private fetchPosts () {
    this.isFetching = true;
    this.postService.fetchPosts()
    .subscribe(posts =>{
      this.isFetching = false;
      console.log(posts);
      this.loadedPosts = posts;
    },error =>{
      this.isFetching = false;
      this.error.message = error.error.error;
      this.error.status = true;
    });
  }
}
