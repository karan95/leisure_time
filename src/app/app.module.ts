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
import { ImgSearchPopupComponent } from './user/img-search-popup/img-search-popup.component';
import { SelectModule } from 'ng2-select';
import { UserPostCategoryComponent } from './user/user-post-category/user-post-category.component';
import { RatingComponent } from './app-component/rating/rating.component';
import { UserRatingComponent } from './user/user-rating/user-rating.component';
import { UserPostImageComponent } from './user/user-post-image/user-post-image.component';
import { UserLoginComponent } from './login/user-login/user-login.component';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderNavComponent,
    UserPostFormComponent,
    ImgSearchPopupComponent,
    UserPostCategoryComponent,
    UserLoginComponent,
    HomeComponent
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
    LtFeedsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
