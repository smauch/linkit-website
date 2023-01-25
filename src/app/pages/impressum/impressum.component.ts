import { Component, OnInit } from '@angular/core';
import { RandomColorService } from 'src/app/service/random-color.service';
import { Router } from '@angular/router';
import { Title, Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-impressum',
  templateUrl: './impressum.component.html',
  styleUrls: ['./impressum.component.scss'],
})
export class ImpressumComponent implements OnInit {
  siteColor: string;
  constructor(
    private randomColorService: RandomColorService,
    private router: Router,
    private titleService: Title,
    private metaService: Meta
  ) {}

  ngOnInit(): void {
    this.titleService.setTitle("Impressum");
    this.metaService.updateTag(
      {name: 'description', content: 'Unser Impressum'}
    );
    const currentRoute = this.router.url.split('/').pop();
    this.siteColor =
      'var(--' +
      this.randomColorService.getRandomColor(currentRoute.split('?')[0]) +
      ')';
  }
}
