import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import {environment} from "@environments/environment";
import {HttpClient} from "@angular/common/http";
import { ShowListResponse } from "@app-models/show.model"
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ShowsService {

  constructor(private http: HttpClient) { }

  public getShowList(query: string[]): Observable<ShowListResponse> {
    const url = `${environment.URL}/?s=${query[1]}&y=${query[2]}&type=${query[0]}&apikey=${environment.OMDB_APIKEY}`;
    return this.http.get<any>(url).pipe(map(apiResult => {
      apiResult.error = !apiResult['Response'];
      apiResult.data = {};
      apiResult.data.results = apiResult['Search'];;
      apiResult.data.totalResults = apiResult['totalResults'];
      delete apiResult['Response'];
      delete apiResult['Search'];
      delete apiResult['totalResults']
      apiResult.data.results?.map((element : any) => {
        element.title = element.Title;
        delete element.Title;
        element.poster = element.Poster;
        delete element.Poster;
        element.type = element.Type;
        delete element.Type;
        element.year = element.Year;
        delete element.Year;
        element.id = element.imdbID;
        delete element.imdbID;
        return Object.assign(element, {selected : false}, {comments : ''})
      })
      console.log('apiResult', apiResult)
      return apiResult;
    }));
  }
}
