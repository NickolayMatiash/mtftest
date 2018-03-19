import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';
import { simpleReducer } from './reducer/simple.reducer';
import { FormsModule } from '@angular/forms';
import { postReducer } from './reducer/post.reducer';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';


@NgModule( {
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    StoreModule.forRoot( {
      message: simpleReducer,
      post: postReducer,
    } ),
    FormsModule,
    StoreDevtoolsModule.instrument({
      maxAge: 10
    })
  ],
  providers: [],
  bootstrap: [ AppComponent ]
} )
export class AppModule {
}
