import { Component, OnInit } from '@angular/core';
import { HttpService} from './../../Services/http.Service';
import { watchlist } from 'src/app/model/watchlist';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-show-all',
  templateUrl: './show-all.component.html',
  styleUrls: ['./show-all.component.css']
})
export class ShowAllComponent implements OnInit {
  listOfwatchlist:watchlist [];
  watchlistForm: FormGroup;
  show=false;

  constructor( private httpService:HttpService, private fb: FormBuilder) { }



  ngOnInit(): void {
    this.httpService.fetchAll().subscribe(watchlist =>this.listOfwatchlist=watchlist);
    this.watchlistForm = this.fb.group({
      task: [''],
      date: [''],
      done: [''],
    });
  }

  handelSubmit(){
    this.httpService.addwatchlist(this.watchlistForm.value).subscribe();
    this.ngOnInit();
  }
  showAddwatclist(){
    this.show= !this.show;

  }

  delete(id:number){
   this.httpService.delete(id).subscribe();
   this.ngOnInit();
  }
}
