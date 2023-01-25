import { Component, OnInit } from '@angular/core';
import { RandomColorService } from 'src/app/service/random-color.service';
import { Router } from '@angular/router';
import { Title, Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-dein-einstieg',
  templateUrl: './dein-einstieg.component.html',
  styleUrls: ['./dein-einstieg.component.scss'],
})
export class DeinEinstiegComponent implements OnInit {
  siteColor: string;
  constructor(
    private randomColorService: RandomColorService,
    private router: Router,
    private titleService: Title,
    private metaService: Meta
  ) {}

  ngOnInit(): void {
    this.metaService.updateTag(
      {name: 'description', content: 'Du willst Mitglied bei linkit werden? Dann findest du hier alle Informationen rund um deinen Einstieg.'}
    );
    const currentRoute = this.router.url.split('/').pop();
    this.siteColor =
      'var(--' +
      this.randomColorService.getRandomColor(currentRoute.split('?')[0]) +
      ')';
  }
}
