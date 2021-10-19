import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-input-search',
  templateUrl: './input-search.component.html',
  styleUrls: ['./input-search.component.scss']
})
export class InputSearchComponent implements OnInit {
  @Output() filterExport: EventEmitter<string> = new EventEmitter<string>()
  filterText: string = ''

  constructor() { }

  ngOnInit(): void {
  }

  filter(){
    this.filterExport.emit(this.filterText)
  }
}
