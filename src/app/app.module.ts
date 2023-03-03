import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { Content1Component } from './content1/content1.component';
import { NavbarComponent } from './navbar/navbar.component';
import { Content2CardComponent } from './content2-card/content2-card.component';
import { Content3Component } from './content3/content3.component';
import { Content5CardComponent } from './content5-card/content5-card.component';
import { Content6GalleryComponent } from './content6-gallery/content6-gallery.component';
import { Content7Component } from './content7/content7.component';
import { Content8TeamComponent } from './content8-team/content8-team.component';
import { Content9ContactComponent } from './content9-contact/content9-contact.component';
import { Content10FooterComponent } from './content10-footer/content10-footer.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    Content1Component,
    NavbarComponent,
    Content2CardComponent,
    Content3Component,
    Content5CardComponent,
    Content6GalleryComponent,
    Content7Component,
    Content8TeamComponent,
    Content9ContactComponent,
    Content10FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
