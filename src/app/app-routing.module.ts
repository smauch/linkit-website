import { NgModule } from '@angular/core';
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
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'ueber-uns',
    component: UeberUnsComponent,
  },
  {
    path: 'dein-einstieg',
    component: DeinEinstiegComponent,
  },
  {
    path: 'unternehmen',
    component: UnternehmenComponent,
  },
  {
    path: 'referenzen',
    component: ReferenzenComponent,
  },
  {
    path: 'blog',
    component: BlogComponent,
  },
  {
    path: 'kontakt',
    component: KontaktComponent,
  },
  {
    path: 'impressum',
    component: ImpressumComponent,
  },
  {
    path: 'datenschutz',
    component: DatenschutzComponent,
  },
  {
    path: 'alumni',
    component: AlumniComponent,
  },
  {
    path: '**',
    component: PageNotFoundComponent,
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
    scrollPositionRestoration: 'enabled',
    relativeLinkResolution: 'legacy'
}),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
