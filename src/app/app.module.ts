import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppRoutingModule } from './app-routing/app-routing.module'
import { LtComponentsModule } from './lt-components/lt-components.module';
import { SelectModule } from 'ng2-select';

import { AppComponent } from './app.component';
import { HeaderNavComponent } from './header/header-nav/header-nav.component';
import { ImageSearchService } from './user/image-search/image-search.service';
import { ImageService } from './user/image-search/image.service';
import { UserLoginComponent } from './login/user-login/user-login.component';
import { LogoutComponent } from './login/logout/logout.component';
import { HomeComponent } from './home/home.component';
import { AlertService } from'./lt-components/alert/alert.service';
import { AuthenticationService } from './services/user/authentication.service';
import { UserService } from  './services/user/user.service';
import { AppUserService } from  './services/app-user/app-user.service';
import { UserFeedLikeService } from './services/userFeed/user-feed-like.service';
import { UserFeedRecommendService } from './services/userFeed/user-feed-recommend.service';
import { UserProfilePhotosComponent } from './user/user-profile/user-profile-photos/user-profile-photos.component';
 
@NgModule({
  declarations: [
    AppComponent,
    HeaderNavComponent,
    UserLoginComponent,
    LogoutComponent,
    HomeComponent,
    UserProfilePhotosComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpModule,
    AppRoutingModule,
    ReactiveFormsModule,
    SelectModule,
    LtComponentsModule
  ],
  providers: [
    ImageSearchService,
    ImageService,
    AuthenticationService,
    UserService,
    AppUserService,
    AlertService,
    UserFeedLikeService,
    UserFeedRecommendService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
