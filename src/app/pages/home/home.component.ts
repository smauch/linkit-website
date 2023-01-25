import { Component, OnInit } from '@angular/core';
import { RandomColorService } from 'src/app/service/random-color.service';
import { TyperService } from 'src/app/service/typer.service';
import { Router, NavigationEnd } from '@angular/router';
import partnerList from '../../../assets/partner_logos/partners.json';
import charlieChaplin from "@streamlinehq/streamlinehq/img/streamline-light/avatars/geometric-men-famous-people/famous-people-man-charlie-chaplin.svg"
import { of } from 'rxjs';
import { Title, Meta } from '@angular/platform-browser';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  siteColor: string;
  partners = partnerList.partner;
  landingHeadline: string;
  membercounter: number = 0;
  headlines = [
    'Die Industrie 4.0 Hochschulgruppe',
    'Die Data Science Hochschulgruppe',
    'Ihr Partner',
    'Dein Team',
  ];

  constructor(
    private randomColorService: RandomColorService,
    private router: Router,
    private textTyper: TyperService,
    private titleService: Title,
    private metaService: Meta
  ) {
  }

  ngOnInit(): void {
    this.metaService.updateTag(
      {name: 'description', content: 'linkit ist eine fachübergreifende, studentische Hochschulgruppe am Karlsruher Institut für Technologie, die sich mit der digitalen Transformation in der Industrie auseinandersetzt.'}
    );
    const currentRoute = this.router.url.split('/').pop();
    this.siteColor =
      'var(--' +
      this.randomColorService.getRandomColor(currentRoute.split('?')[0]) +
      ')';
    this.landingHeadline = this.headlines[0];
  }

}
