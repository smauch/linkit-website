import { Component, OnInit } from '@angular/core';
import { RandomColorService } from 'src/app/service/random-color.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss'],
})
export class BlogComponent implements OnInit {
  siteColor: string;
  constructor(
    private randomColorService: RandomColorService,
    private router: Router
  ) {}

  ngOnInit(): void {
    const currentRoute = this.router.url.split('/').pop();
    this.siteColor =
      'var(--' +
      this.randomColorService.getRandomColor(currentRoute.split('?')[0]) +
      ')';
  }
}
