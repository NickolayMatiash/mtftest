import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Store } from '@ngrx/store';
import { AppState } from '../app.state';
import { Car } from '../entity/car.model';
import { AddCar, DeleteCar, LoadCars } from '../actions/cars.action';

@Injectable()
export class CarsService {

  static BASE_URL = 'http://localhost:3000/';

  constructor( private _http: HttpClient, private _store: Store<AppState> ) {
  }

  loadCars(): void {
    this._http.get<Car[]>( `${CarsService.BASE_URL}cars` )
      .toPromise()
      .then( ( cars: Car[] ) => {
        this._store.dispatch( new LoadCars( cars ) );
      } );
  }

  addCar( car: Car ): void {
    this._http.post<Car>( `${CarsService.BASE_URL}cars`, car )
      .toPromise()
      .then( ( _car: Car ) => {
        this._store.dispatch( new AddCar( _car ) );
      } );
  }

  deleteCar( car: Car ): void {
    this._http.delete( `${CarsService.BASE_URL}cars/${car.id}` )
      .toPromise()
      .then( _ => {
        this._store.dispatch( new DeleteCar( car ) );
      } );
  }


}
