import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { watchlist } from 'src/app/model/watchlist';
import { HttpService } from 'src/app/Services/http.Service';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit {

  watchlistToBeUpdated: watchlist;

  updatedForm: FormGroup;

  show: boolean = false;

  constructor(private httpService: HttpService, private fb: FormBuilder, private rout: ActivatedRoute) { }

  ngOnInit(): void {
    const id = this.rout.snapshot.paramMap.get('id');
    this.httpService.findById(+id).subscribe(watchlist => this.watchlistToBeUpdated = watchlist);


    this.updatedForm = this.fb.group({
      task: [''],
      date: [''],
      done: [''],
    });
  }



  handelSubmitUpdate() {
    this.httpService.update(this.watchlistToBeUpdated.id, this.updatedForm.value).subscribe();
  }



  update() {
    this.updatedForm.setValue({
      task: this.watchlistToBeUpdated.task,
      date: this.watchlistToBeUpdated.date,
      done: this.watchlistToBeUpdated.done,
    });

    this.show = !this.show;

  }




  }
