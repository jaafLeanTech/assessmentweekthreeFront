import { Component, OnChanges, Input, SimpleChanges, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormBuilder, FormArray } from '@angular/forms';
import { ShowResultsInterface } from '@app-models/show.model'

@Component({
  selector: 'app-show-results',
  templateUrl: './show-results.component.html',
  styleUrls: ['./show-results.component.scss']
})
export class ShowResultsComponent implements OnChanges {

  showResults: FormGroup;
  showToFavorite: ShowResultsInterface;

  @Input() showResultsList: ShowResultsInterface[];
  @Output() addFavoritesEmitter = new EventEmitter<ShowResultsInterface>();

  constructor(private fb: FormBuilder) {
    this.showResults = this.fb.group({
      viewArray: this.fb.array([])
    })

    this.showResultsList = [];

    this.showToFavorite = {} as ShowResultsInterface;
   }

  get getShowResults() : FormArray {
    return this.showResults.get('viewArray') as FormArray;
  }



  addFavorites(index: number) {
    this.showToFavorite = {
      poster: this.getShowResults.at(index).value.poster,
      title: this.getShowResults.at(index).value.title,
      type: this.getShowResults.at(index).value.type,
      year: this.getShowResults.at(index).value.year,
      id: this.getShowResults.at(index).value.id,
      comments: this.getShowResults.at(index).value.comments,
      addToFavoriteDate: new Date(),
      selected: true
    }
    this.addFavoritesEmitter.emit(this.showToFavorite);

  }

  findShowToTable (data: ShowResultsInterface){
    return this.fb.group({
      poster: [data.poster],
      showTitle: [data.title],
      showType: [data.type],
      showYear: [data.year],
      comments: [data.comments],
      id: [data.id],
      selected: [data.selected],
    })
  }

  ngOnChanges(change: SimpleChanges): void {
    console.log('escuchando', this.showResultsList)
    if(change.showResultsList.currentValue){
      this.showResultsList = change.showResultsList.currentValue;
      this.getShowResults.clear();
      this.showResultsList.forEach((element) => {
        this.getShowResults.push(this.findShowToTable(element))
      })
    }
  }

}
