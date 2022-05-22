export interface ShowInterface {
  error: boolean;
  data: ShowListResponse;
}

export interface ShowListResponse {
  search: ShowResultsInterface[];
  totalResults: string;
}

export interface ShowResultsInterface {
  poster: string;
  title: string;
  type: string;
  year: string;
  id: string;
  selected: boolean;
  comments?: string;
  addToFavoriteDate?: Date;
}




