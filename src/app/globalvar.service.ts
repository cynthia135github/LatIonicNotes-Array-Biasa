import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GlobalvarService {

  public arrNotes = [];

  constructor() { }

  public addNew(tjudul: String, tisi: String, ttgl: String) {
    var notebaru = [];
    notebaru[0] = tjudul;
    notebaru[1] = tisi;
    notebaru[2] = ttgl;
    notebaru[3] = 0;

    this.arrNotes.push(notebaru);
  }
}
