import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class GenericService {
  public apiUrl = "https://api.first.org/data/v1/news";
  public sketchApiurl="https://api.openbrewerydb.org/breweries";

  
  constructor(private httpClient: HttpClient) { }
  public getNews() {
    return this.httpClient.get(this.apiUrl);
  }
  public getData(state)
  {
    if(state)
    {
      return this.httpClient.get(this.sketchApiurl+"?by_state="+state);

    }
    else{
      return this.httpClient.get(this.sketchApiurl);

    }

  }
  public getSearch(search) {
    if(search)
    {
      return this.httpClient.get(this.sketchApiurl+"/search?query="+search);
    }
    else{
      return this.httpClient.get(this.sketchApiurl);

    }
  }
}
