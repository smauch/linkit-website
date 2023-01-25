import { Component, OnInit } from '@angular/core';
import { RandomColorService } from 'src/app/service/random-color.service';
import { Router } from '@angular/router';
import { Title, Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-kontakt',
  templateUrl: './kontakt.component.html',
  styleUrls: ['./kontakt.component.scss'],
})
export class KontaktComponent implements OnInit {
  siteColor: string;
  constructor(
    private randomColorService: RandomColorService,
    private router: Router,
    private titleService: Title,
    private metaService: Meta
  ) {}

  ngOnInit(): void {
    this.metaService.updateTag(
      {name: 'description', content: 'So kontaktieren Sie uns.'}
    );
    const currentRoute = this.router.url.split('/').pop();
    this.siteColor =
      'var(--' +
      this.randomColorService.getRandomColor(currentRoute.split('?')[0]) +
      ')';
  }
}
