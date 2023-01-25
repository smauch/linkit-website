import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class RandomColorService {
  private randomColor = new BehaviorSubject<Map<string,string>>(new Map<string,string>());



  constructor() {}

  updateSetRandomColor(colorMapping: Map<string,string>) {
    this.randomColor.next(colorMapping);
  }

  getRandomColor(route: string) {
    let color = this.randomColor.value.get(route);
    if (color == undefined){
      color = 'linkit-schwarz';
    }
    return color
  }
}
