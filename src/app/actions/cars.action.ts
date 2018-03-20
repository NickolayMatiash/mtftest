import { Action } from '@ngrx/store';
import { Car } from '../entity/car.model';

export namespace CAR_ACTION {
  export const ADD_CAR = 'ADD_CAR';
  export const DELETE_CAR = 'DELETE_CAR';
  export const LOAD_CARS = 'LOAD_CARS';
}

export class AddCar implements Action {

  readonly type = CAR_ACTION.ADD_CAR;

  constructor( public payload: Car ) {
  }

}

export class DeleteCar implements Action {
  readonly type = CAR_ACTION.DELETE_CAR;

  constructor( public payload: Car ) {
  }
}

export class LoadCars implements Action {
  readonly type = CAR_ACTION.LOAD_CARS;

  constructor( public payload: Car[] ) {
  }
}

export type CarsAction
  = AddCar
  | LoadCars
  | DeleteCar
  | any;
