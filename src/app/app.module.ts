import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { HttpClientModule } from '@angular/common/http';
import { AngularSvgIconModule } from 'angular-svg-icon';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { UeberUnsComponent } from './pages/ueber-uns/ueber-uns.component';
import { DeinEinstiegComponent } from './pages/dein-einstieg/dein-einstieg.component';
import { UnternehmenComponent } from './pages/unternehmen/unternehmen.component';
import { ReferenzenComponent } from './pages/referenzen/referenzen.component';
import { BlogComponent } from './pages/blog/blog.component';
import { KontaktComponent } from './pages/kontakt/kontakt.component';
import { ImpressumComponent } from './pages/impressum/impressum.component';
import { DatenschutzComponent } from './pages/datenschutz/datenschutz.component';
import { AlumniComponent } from './pages/alumni/alumni.component';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';
import { NgxJsonLdModule } from '@ngx-lite/json-ld';
import { CountDownComponent } from './pages/count-down/count-down.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    UeberUnsComponent,
    DeinEinstiegComponent,
    UnternehmenComponent,
    ReferenzenComponent,
    BlogComponent,
    KontaktComponent,
    ImpressumComponent,
    DatenschutzComponent,
    AlumniComponent,
    PageNotFoundComponent,
    CountDownComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgxJsonLdModule,
    AngularSvgIconModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
