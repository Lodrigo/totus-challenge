import { Component, OnInit } from '@angular/core';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { IHotelsData } from 'src/app/models/hotels-data-model';
import { CardListData } from 'src/app/shared/card-list/card-list-data-model';
import { HotelsHttpService } from 'src/app/shared/http-services/hotels-http.service';
import { ModalComponent } from 'src/app/shared/modal/modal.component';
import { __values } from 'tslib';

@Component({
  selector: 'app-search-page',
  templateUrl: './search-page.component.html',
  styleUrls: ['./search-page.component.scss']
})
export class SearchPageComponent implements OnInit {
  hotels: any[]
  cardList: CardListData[] = []

  modalRef: BsModalRef

  constructor(private hotelsHttp: HotelsHttpService,
    protected modalService: BsModalService) { }

  ngOnInit(): void {
    this.filterExport('')
  }

  filterExport(valueFilter: string) {
    this.cardList = []
    this.hotels = this.hotelsHttp.filterHotels(valueFilter)

    this.hotels.forEach((h, index) => {
      let card = {
        title: h.title,
        showDetails: false,
        description: h.description,
        showButton: true,
        buttonText: 'VER MAIS'
      }

      this.cardList[index] = card 
    })
  }

  openModal(card: CardListData){
    console.log('Dados Caso fosse abrir modal', card)
    const initialState = {
      modalcard: card
    }

    this.modalRef = this.modalService.show(ModalComponent, { 
      initialState, 
      class: 'modal-md' })
  }
}
