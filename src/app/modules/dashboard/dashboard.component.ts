import { Component } from "@angular/core";
import { ShowsService } from "@app-services/shows.service";
import { ShowResultsInterface } from "@app-models/show.model";
import Swal from "sweetalert2";

@Component({
  selector: "app-dashboard",
  templateUrl: "./dashboard.component.html",
  styleUrls: ["./dashboard.component.scss"],
})
export class DashboardComponent {

  showResultsList: ShowResultsInterface[];
  showsListFavorites: ShowResultsInterface[];

  constructor(private showService: ShowsService) {
    this.showResultsList = [];
    this.showsListFavorites = [];
  }


  searchShow(showInfo: string[]) {
    console.log('showInfo', showInfo)
    this.showService.getShowList(showInfo).subscribe((result: any) => {
      console.log('estes es el resultado', result)
      this.showResultsList = result.data.results
      console.log('estes es el resultado', this.showResultsList)
      return result;
    })
  }

  addFavorites(fav: ShowResultsInterface) {
    const alreadyAdded = this.showsListFavorites.findIndex(
      (element) => element.id === fav.id
    );
    if (alreadyAdded === -1) {
      fav.addToFavoriteDate = new Date();
      this.showsListFavorites.push(fav);
      Swal.fire('Completed', '', 'success');
    }
  }

  deleteFavorite(index: number) {
    this.showsListFavorites.splice(index, 1);
  }

}
