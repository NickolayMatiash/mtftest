import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';
import { simpleReducer } from './reducer/simple.reducer';
import { FormsModule } from '@angular/forms';
import { postReducer } from './reducer/post.reducer';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { carsReducer } from './reducer/cars.reducer';
import { CarFormComponent } from './components/car-form/car-form.component';
import { CarsService } from './services/cars.service';
import { HttpClientModule } from '@angular/common/http';


@NgModule( {
  declarations: [
    AppComponent,
    CarFormComponent
  ],
  imports: [
    BrowserModule,
    StoreModule.forRoot( {
      message: simpleReducer,
      post: postReducer,
      cars: carsReducer,
    } ),
    FormsModule,
    HttpClientModule,
    StoreDevtoolsModule.instrument( {
      maxAge: 10
    } )
  ],
  providers: [
    CarsService
  ],
  bootstrap: [ AppComponent ]
} )
export class AppModule {
}
