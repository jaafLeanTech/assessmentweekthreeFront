import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { DashboardComponent } from "./dashboard.component";
import { DashboardRoutingModule } from "../dashboard/dashboard-routing.module";
import { ShowFavoritesComponent } from './components/show-favorites/show-favorites.component';
import { ShowResultsComponent } from './components/show-results/show-results.component';
import { InfoSearchComponent } from './components/info-search/info-search.component';
import { AngularMaterialModule } from '../../shared/angular-material/angular-material.module'
import { ReactiveFormsModule } from "@angular/forms";
import { FormsModule } from "@angular/forms";
import { PipesModule } from "@shared/pipes/pipes.module";
import { DirectivesModule } from "@shared/directives/directives.module"

@NgModule({
  declarations: [DashboardComponent, ShowFavoritesComponent, ShowResultsComponent, InfoSearchComponent],
  imports: [CommonModule, DashboardRoutingModule, AngularMaterialModule, ReactiveFormsModule, FormsModule, PipesModule, DirectivesModule]
})

export class DashboardModule {}
