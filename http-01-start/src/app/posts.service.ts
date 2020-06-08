import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Post } from './post.modal';
import { map,catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';

@Injectable({providedIn:'root'})


export class PostService{
    constructor(private http:HttpClient){}

    fetchPosts () {
        
        return this.http.get<{[key:string]:Post}>('https://angular-a35c2.firebaseio.com/posts.json')
        .pipe(map((responseData:{[key:string]:Post}) => {
          const postsArray :Post[] = [];
          for (const key in responseData){
            if(responseData.hasOwnProperty(key)){
              postsArray.push({...responseData[key],id:key})
            }
          }
          return postsArray;
        }),catchError(error=>{
            return throwError(error);
        }));
    }

    fetchHttpCode () {
        return this.http.get('https://angular-a35c2.firebaseio.com/posts.json',
        { observe : 'response',
          headers: new HttpHeaders({'Custom-Header':'hello'}),
          params: new HttpParams().set('print','pretty'),
          responseType:'json'
        }
        );
    }

    createPosts(postData:Post) {
        return  this.http.post<{name : string}>('https://angular-a35c2.firebaseio.com/posts.json', postData);
    }

    deletePosts(){
        return this.http.delete('https://angular-a35c2.firebaseio.com/posts.json')
                
    }

}