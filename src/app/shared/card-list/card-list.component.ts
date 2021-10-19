import { Component, EventEmitter, Input, OnInit, Output, SimpleChanges } from '@angular/core';
import { CardListData } from './card-list-data-model';

@Component({
  selector: 'app-card-list',
  templateUrl: './card-list.component.html',
  styleUrls: ['./card-list.component.scss']
})
export class CardListComponent implements OnInit {

  @Input() cardList: CardListData[] = []
  @Output() sendFather: EventEmitter<CardListData> = new EventEmitter<CardListData>()

  constructor() { }

  ngOnInit(): void {
  }

  showHidden(card: CardListData){
    card.showDetails = !card.showDetails
  }

  sendToFather(card: CardListData) {
    this.sendFather.emit(card)
  }
}
