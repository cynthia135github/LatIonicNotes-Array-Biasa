import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { GlobalvarService } from '../globalvar.service';

@Component({
  selector: 'app-favorite',
  templateUrl: './favorite.page.html',
  styleUrls: ['./favorite.page.scss'],
})
export class FavoritePage implements OnInit {

  arrFavNotes = [];
  constructor(private router: Router, public globalvar: GlobalvarService) {
    this.refreshData();
   }

  ngOnInit() {
    this.refreshData();
  }

  refreshData() {
    this.arrFavNotes = [];
    for (var i = 0; i < this.globalvar.arrNotes.length; i++) {
      if (this.globalvar.arrNotes[i][3] == 1) {
        this.arrFavNotes.push(this.globalvar.arrNotes[i]);
      }
    }
  }

  fav(id: number) {
    this.globalvar.arrNotes[id][3] = 0;
    //this.refreshData();
  }


  GoToAdd(){
    this.router.navigate(["home"]);
  }

  GoToDetail(){
    this.router.navigate(["detailnote"]);
  }

}
