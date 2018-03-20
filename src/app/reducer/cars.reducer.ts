import { CAR_ACTION, CarsAction } from '../actions/cars.action';

const initialState = {
  cars: []
};

export function carsReducer( state = initialState, action: CarsAction ) {
  switch ( action.type ) {
    case CAR_ACTION.ADD_CAR:
      const cars = {
        ...state,
        cars: [ ...state.cars, action.payload ]
      };
      return cars;

    case CAR_ACTION.DELETE_CAR:
      return {
        ...state,
        cars: [ ...state.cars.filter( c => c.id !== action.payload.id ) ]
      };

    case CAR_ACTION.LOAD_CARS:
      return {
        ...state,
        cars: [...action.payload]
      };

    default:
      return state;
  }
}
