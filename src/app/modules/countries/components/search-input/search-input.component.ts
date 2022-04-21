import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {FormControl} from "@angular/forms";
import {debounceTime} from "rxjs";

@Component({
  selector: 'app-search-input',
  templateUrl: './search-input.component.html',
  styleUrls: ['./search-input.component.scss']
})
export class SearchInputComponent implements OnInit {

  @Input()
  debounceTime: number = 200;
  @Output()
  filterChange: EventEmitter<string> = new EventEmitter<string>();

  control: FormControl = new FormControl('');

  constructor() { }

  ngOnInit(): void {
    this.control.valueChanges.pipe(
      debounceTime(this.debounceTime)
    ).subscribe(v => {
      this.filterChange.emit(v);
    })
  }

}
