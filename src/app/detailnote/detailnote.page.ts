import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { GlobalvarService } from '../globalvar.service';

@Component({
  selector: 'app-detailnote',
  templateUrl: './detailnote.page.html',
  styleUrls: ['./detailnote.page.scss'],
})
export class DetailnotePage implements OnInit {

  arrNote = [];

  constructor(private router: Router, public globalvar: GlobalvarService) {
    this.arrNote = this.globalvar.arrNotes;
   }

  ngOnInit() {
  }

  fav(id: number) {
    if (this.globalvar.arrNotes[id][3] == 0) {
      this.globalvar.arrNotes[id][3] = 1;
    } else if (this.globalvar.arrNotes[id][3] == 1) {
      this.globalvar.arrNotes[id][3] = 0;
    }
  }

  GoToFav() {
    this.router.navigate(["favorite"]);
  }

  GoToAdd(){
    this.router.navigate(["home"]);
  }
}
