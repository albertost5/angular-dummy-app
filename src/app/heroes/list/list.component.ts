import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {
  public heroNames: string[] = ['Hulk', 'Spiderman', 'Thor', 'Wolverine'];
  public heroDeleted?: string;
  deleteLastHero(){
    this.heroDeleted = this.heroNames.pop();
    console.log('heroDeleted => ', this.heroDeleted);
  }
}
