import { Component, OnInit } from '@angular/core';
import { RandomColorService } from './service/random-color.service';
import { Router, Route, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'linkit';
  siteColor: string;
  logoPath: string;
  iconPathFacebook: string;
  iconPathInstagram: string;
  iconPathLinkedin: string;

  private linkitColors: string[] = [
    'linkit-gruen',
    'linkit-dunkelblau',
    'linkit-hellblau',
    'linkit-orange',
    'linkit-pink',
    'linkit-tuerkis',
  ];

  schema = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    'name': 'linkit e.V.',
    'alternateName': 'linkit_karlsruhe',
    'url': 'https://www.linkit.tech/',
    'logo': 'https://linkit.tech/assets/pics/logos/linkit-schwarz.svg',
    'sameAs': [
      'https://www.instagram.com/linkit_karlsruhe/',
      'https://www.youtube.com/channel/UCCZ4YhtLadnbIqxmvuBu0sA',
      'https://www.linkedin.com/company/linkit-karlsruhe'
    ]
  };

  constructor(
    private randomColorService: RandomColorService,
    private router: Router
  ) {
    router.events
      .pipe(filter((val) => val instanceof NavigationEnd))
      .subscribe(() => {
        let currentRoute = this.router.url.split('/').pop();
        let linkitColor = this.randomColorService.getRandomColor(currentRoute);

        this.logoPath = './assets/pics/logos/' + linkitColor + '.svg';
        this.iconPathFacebook = './assets/icons/facebook_' + linkitColor + '.svg';
        this.iconPathLinkedin = './assets/icons/linkedin_' + linkitColor + '.svg';
        this.iconPathInstagram = './assets/icons/instagram_' + linkitColor + '.svg';
        this.siteColor = 'var(--' + linkitColor + ')';

      });
  }

  ngOnInit() {
    this.createRandomColorSample(this.router.config);
  }

  private createRandomColorSample(config: Route[]) {
    let colorMapping = new Map();
    for (let routeObj of config) {
      const color = this.linkitColors[
        Math.floor(Math.random() * this.linkitColors.length)
      ];
      colorMapping.set(routeObj.path, color);
    }
    this.randomColorService.updateSetRandomColor(colorMapping);
  }
}
