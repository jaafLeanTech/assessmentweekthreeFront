import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-info-search',
  templateUrl: './info-search.component.html',
  styleUrls: ['./info-search.component.scss']
})
export class InfoSearchComponent implements OnInit {

  selectType = [{ value: 'movie', viewValue: 'movie'},
                {value: 'series', viewValue: 'series'},
                {value: 'episode', viewValue: 'episode'}];

  searchForm : FormGroup;

  @Output() searchShowEmitter = new EventEmitter<string[]>()

  constructor(private fb: FormBuilder) {
    this.searchForm = this.fb.group({
      showType : ['', Validators.required],
      showName : ['', Validators.required],
      showYear : [{value: '', disabled: true}, Validators.required]

  })

   }

  ngOnInit(): void {
    return;
  }

  get getShowType() {
    return this.searchForm.get('showType')
  }

  get getShowName() {
    return this.searchForm.get('showName')
  }

  get getShowYear() {
    return this.searchForm.get('showYear')
  }

  enableDisable() {
    console.log('enableDisable', this.getShowType?.value)
    if(this.getShowType?.value == 'series')
      this.searchForm.controls['showYear'].enable();
    else
      this.searchForm.controls['showYear'].disable();
      this.getShowYear?.setValue('');
  }

  searchShow() {
    this.searchShowEmitter.emit([this.getShowType?.value, this.getShowName?.value, this.getShowYear?.value])
  }


}
