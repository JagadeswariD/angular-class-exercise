import { Component } from '@angular/core';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
})
export class ArticleComponent {
  title: string = 'Angular Basics';
  content: string =
    'Lorem ipsum dolor sit amet consectetur adipisicing elit. At vitae sint maiores? Amet magni illum alias optio sit minima vel, facilis maiores accusamus ex atque ea nihil a nam qui.';
  isTechRelated: boolean = true;

  getColor() {
    return this.isTechRelated ? 'blue' : 'yellow';
  }
}
