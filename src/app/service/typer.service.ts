import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TyperService {

  currentWord = 0;
  words = [];
  currentPos = 0;
  currentString = "";
  isDeleting = false;

  constructor() { }

  add(words){
    this.words = words;
  }

  write() {
    if (this.currentPos == this.words[this.currentWord].length){
      //Next word
      if(this.currentWord < this.words.length){
        this.currentWord++;
      }
      else{
        this.currentWord = 0;
      }

    }
    else{
    // Check if deleting
    if(this.isDeleting) {
      // Remove char
      this.currentString = this.words[this.currentWord].substring(0, this.currentString.length - 1);
    } else {
      // Add char
      this.currentString = this.words[this.currentWord].substring(0, this.currentString.length + 1);
    }
    }
    setTimeout(this.write, 50);
    return this.currentString;
  }
}
