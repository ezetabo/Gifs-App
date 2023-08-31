import { Gif } from './../interfaces/gifs.interface';
import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { SearchResponse } from '../interfaces/gifs.interface';


@Injectable({ providedIn: 'root' })
export class GifsService {

  public gifList: Gif[] = [];

  private _tagsHistory: string[] = [];
  private apiKey: string = 'J6o6c0NaPNJC77DFOvvlCPI4VscnUf8b';
  private serviceUrl: string = 'https://api.giphy.com/v1/gifs';

  constructor(private http: HttpClient) {
    this.loadLocalStorage();
  }

  get tagsHistory(): string[] {
    return [...this._tagsHistory];
  }

  private organizeHistory(tag: string): void {
    tag = tag.toLocaleLowerCase();
    if (this._tagsHistory.includes(tag)) {
      this._tagsHistory = this._tagsHistory.filter((oldTag) => oldTag !== tag);
    }
    this._tagsHistory.unshift(tag);
    this._tagsHistory = this._tagsHistory.splice(0, 10);
    this.saveLocalStorage();
  }


  private saveLocalStorage(): void {
    localStorage.setItem('history', JSON.stringify(this._tagsHistory));
  }

  private loadLocalStorage(): void {
    const data = localStorage.getItem('history');
    if (data) {
      this._tagsHistory = JSON.parse(data!);
      this.searchTag(this._tagsHistory[0]);
    }
  }


  searchTag(tag: string): void {
    if (tag !== null && tag.trim() !== "") {
      this.organizeHistory(tag);

      const params = new HttpParams()
        .set('api_key', this.apiKey)
        .set('limit', '10')
        .set('q', tag);


      this.http.get<SearchResponse>(`${this.serviceUrl}/search?`, { params })
        .subscribe((resp) => {
          this.gifList = resp.data;
          console.log({ gifs: this.gifList });
        });



      // fetch('https://api.giphy.com/v1/gifs/search?api_key=J6o6c0NaPNJC77DFOvvlCPI4VscnUf8b&q=valorant&limit=5')
      //   .then(resp => resp.json())
      //   .then(data =>console.log(data));

    }

  }

}
