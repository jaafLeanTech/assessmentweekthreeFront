import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { ShowResultsInterface } from '@app-models/show.model';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-show-favorites',
  templateUrl: './show-favorites.component.html',
  styleUrls: ['./show-favorites.component.scss']
})
export class ShowFavoritesComponent implements OnInit {

  @Input() showsListFavorites: ShowResultsInterface[];
  @Output() deleteFavoriteEmitter = new EventEmitter<number>();

  constructor() {
    this.showsListFavorites = [];
   }

  ngOnInit(): void {
    return;
  }

  deleteFavorites(index: number)  {Swal.fire({
    title: 'Do you want to remove this item?',
    showDenyButton: true,
    confirmButtonText: 'Remove',
    denyButtonText: 'Cancel',
    }).then((result) => {
      if (result.isConfirmed)
        this.deleteFavoriteEmitter.emit(index);
    });

  }
}
