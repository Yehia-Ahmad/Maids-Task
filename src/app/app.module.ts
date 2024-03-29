import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { HomeComponent } from './components/home/home.component';
import { UserDetailsComponent } from './components/user-details/user-details.component';
import { NavComponent } from './components/nav/nav.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { LoadingInterceptor } from './interceptors/loading.interceptor';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { LoadingComponent } from './components/loading/loading.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    UserDetailsComponent,
    NotFoundComponent,
    NavComponent,
    LoadingComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    MatProgressSpinnerModule,
    MatCardModule,
    MatInputModule,
    MatIconModule
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: LoadingInterceptor, multi: true },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
