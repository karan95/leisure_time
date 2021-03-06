import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppRoutingModule } from './app-routing/app-routing.module'
import { SelectModule } from 'ng2-select';
import 'hammerjs';

import { AppComponent } from './app.component';
import { HeaderNavComponent } from './header/header-nav/header-nav.component';
import { ImageSearchService } from './user/image-search/image-search.service';
import { ImageService } from './user/image-search/image.service';
import { UserLoginComponent } from './login/user-login/user-login.component';
import { LogoutComponent } from './login/logout/logout.component';
import { HomeComponent } from './home/home.component';
import { AlertService } from'./shared/components/alert/alert.service';
import { AuthenticationService } from './services/user/authentication.service';
import { UserService } from  './services/user/user.service';
import { AppUserService } from  './services/app-user/app-user.service';
import { UserFeedLikeService } from './services/userFeed/user-feed-like.service';
import { NotificationService } from './services/notification/notification.service';
import { RefreshComponentService } from './services/refreshComponent/refresh-component.service';
 
@NgModule({
  declarations: [
    AppComponent,
    HeaderNavComponent,
    UserLoginComponent,
    LogoutComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpModule,
    AppRoutingModule,
    ReactiveFormsModule,
    SelectModule
  ],
  providers: [
    ImageSearchService,
    ImageService,
    AuthenticationService,
    UserService,
    AppUserService,
    AlertService,
    UserFeedLikeService,
    NotificationService,
    RefreshComponentService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
