import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import { Post } from './entity/post.model';
import * as PostActions from './actions/post.actions';
import { Car, Cars } from './entity/car.model';
import { AppState } from './app.state';
import { CAR_ACTION, DeleteCar, LoadCars } from './actions/cars.action';
import { CarsService } from './services/cars.service';


@Component( {
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.sass' ]
} )
export class AppComponent implements OnInit {

  message$: Observable<string>;
  post$: Observable<Post>;

  text: string;

  public carState$: Observable<Cars>;

  constructor( private _store: Store<AppState>, private _carService: CarsService ) {
    this.message$ = this._store.select( 'message' );
    this.post$ = this._store.select( 'post' );
  }

  ngOnInit() {
    this.carState$ = this._store.select( 'cars' );
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


  deleteCar( car: Car ) {
    this._carService.deleteCar( car );
  }

  loadCars() {
    this._carService.loadCars();
  }

}


//   ........
//
// case CAR_ACTION.UPDATE_CAR:
//   const idx = state.cars.findIndex(c => c.id === action.payload.id);
//   state.cars[idx].isSold = true;
//   return {
//     ...state,
//     cars: [...state.cars]
//   };
//
//
//   .....
//
// state.cars.map(c => { if(c.id === id) { return {...c, isSold: true} } return {...c};  });
