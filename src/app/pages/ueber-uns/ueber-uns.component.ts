import { Component, OnInit } from '@angular/core';
import { RandomColorService } from 'src/app/service/random-color.service';
import { Router } from '@angular/router';
import { Title, Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-ueber-uns',
  templateUrl: './ueber-uns.component.html',
  styleUrls: ['./ueber-uns.component.scss'],
})
export class UeberUnsComponent implements OnInit {
  siteColor: string;
  constructor(
    private randomColorService: RandomColorService,
    private router: Router,
    private titleService: Title,
    private metaService: Meta
  ) {}

  ngOnInit(): void {
    this.metaService.updateTag(
      {name: 'description', content: 'Hier findest Du Informationen zu unseren aktiven Mitgliedern, unserer Struktur und unseren Themen.'}
    );
    const currentRoute = this.router.url.split('/').pop();
    this.siteColor =
      'var(--' +
      this.randomColorService.getRandomColor(currentRoute.split('?')[0]) +
      ')';
  }
}
