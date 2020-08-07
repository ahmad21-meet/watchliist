import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import { watchlist} from '../model/watchlist';

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  url: string = 'http://localhost:8080/watchlist/'

  constructor( private http:HttpClient) { }


  public fetchAll(): Observable<watchlist []>{

    return this.http.get<watchlist []>(this.url+'findall');

  }
  public addwatchlist(watchlist: watchlist){
    return this.http.post<watchlist>(this.url + 'add' ,watchlist)
  }


  public delete(id: number){
    return this.http.delete<watchlist>(this.url+'delete/'+id);
  }

  public findById(id:number){
    return this.http.get<watchlist>(this.url+'findById/'+id);
  }

  public update( id:number, watchlist: watchlist){
    return this.http.put<watchlist>(this.url+ 'update/'+id,watchlist);
  }
  

}
