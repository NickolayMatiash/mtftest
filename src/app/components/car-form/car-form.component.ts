import { Component, OnInit } from '@angular/core';
import { Car } from '../../entity/car.model';
import { CarsService } from '../../services/cars.service';

@Component( {
  selector: 'app-car-form',
  templateUrl: './car-form.component.html',
  styleUrls: [ './car-form.component.sass' ]
} )
export class CarFormComponent implements OnInit {

  public carName: string;
  public carModel: string;

  constructor( private _carsService: CarsService ) {
  }

  ngOnInit() {
  }

  addCar() {
    if ( !this.carModel || !this.carName ) {
      return;
    }

    const newCar = new Car( this.carName, new Date().toISOString(), this.carModel );

    this._carsService.addCar( newCar );

    this.carModel = null;
    this.carName = null;

  }

}
