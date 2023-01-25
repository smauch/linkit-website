import { Component, OnInit } from '@angular/core';
import { RandomColorService } from 'src/app/service/random-color.service';
import { Router } from '@angular/router';
import { Title, Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-unternehmen',
  templateUrl: './unternehmen.component.html',
  styleUrls: ['./unternehmen.component.scss'],
})
export class UnternehmenComponent implements OnInit {
  siteColor: string;
  constructor(
    private randomColorService: RandomColorService,
    private router: Router,
    private titleService: Title,
    private metaService: Meta
  ) {}

  ngOnInit(): void {
    this.metaService.updateTag(
      {name: 'description', content: 'Erfahren Sie mehr darüber, wie linkit sich bei Ihnen gewinnbringend einsetzen kann.'}
    );
    const currentRoute = this.router.url.split('/').pop();
    this.siteColor =
      'var(--' +
      this.randomColorService.getRandomColor(currentRoute.split('?')[0]) +
      ')';
  }
}
