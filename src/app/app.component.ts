import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import { Post } from './entity/post.model';
import * as PostActions from './actions/post.actions';

interface AppState {
  message: string;
  post: Post;
}

@Component( {
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.sass' ]
} )
export class AppComponent {
  title = 'app';

  message$: Observable<string>;
  post$: Observable<Post>;

  text: string;

  constructor( private _store: Store<AppState> ) {
    this.message$ = this._store.select( 'message' );
    this.post$ = this._store.select( 'post' );
  }

  spanishMessage() {
    this._store.dispatch( { type: 'SPANISH' } );
  }

  frenchMessage() {
    this._store.dispatch( { type: 'FRENCH' } );
  }

  editText() {
    this._store.dispatch( new PostActions.EditText( this.text ) );
  }

  resetPost() {
    this._store.dispatch( new PostActions.Reset() );
  }

  upvote() {
    this._store.dispatch( new PostActions.Upvote() );
  }

  downvote() {
    this._store.dispatch( new PostActions.Downvote() );
  }
}
