import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppRoutingModule } from './app-routing/app-routing.module'

import { AppComponent } from './app.component';
import { HeaderNavComponent } from './header/header-nav/header-nav.component';
import { LtFeedsComponent } from './feeds/lt-feeds/lt-feeds.component';
import { UserProfileComponent } from './user/user-profile/user-profile.component';
import { UserPostFormComponent } from './user/user-post-form/user-post-form.component';
import { ImageSearchService } from './user/image-search/image-search.service';
import { ImageService } from './user/image-search/image.service';
import { LtFeedsService } from './feeds/lt-feeds/lt-feeds.service';
import { SelectModule } from 'ng2-select';
import { UserPostCategoryComponent } from './user/user-post-category/user-post-category.component';
import { RatingComponent } from './components/rating/rating.component';
import { UserRatingComponent } from './user/user-rating/user-rating.component';
import { UserPostImageComponent } from './user/user-post-image/user-post-image.component';
import { UserLoginComponent } from './login/user-login/user-login.component';
import { LogoutComponent } from './login/logout/logout.component';
import { HomeComponent } from './home/home.component';
import { AlertComponent } from './components/alert/alert.component';
import { AlertService } from'./components/alert/alert.service';
import { AuthenticationService } from './services/user/authentication.service';
import { UserService } from  './services/user/user.service';
import { AppUserService } from  './services/app-user/app-user.service';

@NgModule({
  declarations: [
    AppComponent,
    HeaderNavComponent,
    UserLoginComponent,
    LogoutComponent,
    HomeComponent,
    AlertComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule,
    ReactiveFormsModule,
    SelectModule
  ],
  providers: [
    ImageSearchService,
    ImageService,
    LtFeedsService,
    AuthenticationService,
    UserService,
    AppUserService,
    AlertService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
