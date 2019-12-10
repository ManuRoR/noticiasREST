import { Component, OnInit } from '@angular/core';

import { element } from 'protractor';
import { NoticiasTweets } from '../models/noticia.model';
import { NoticiaService } from '../services/noticia.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  noticiasTweets: NoticiasTweets;

  // tslint:disable-next-line:variable-name
  constructor(public _noticiaService: NoticiaService) {
    this.noticiasTweets = null;
  }
  ngOnInit(): void {
   this._noticiaService.getTweetsNotarios().subscribe((res) => {
    console.log(res);
    this.noticiasTweets = res;
    /*this.noticiasTweets.tweets.forEach(element) =>{

    }*/
   });
  }
  touchParent(id) {
    console.log('Componente Padre: ' + id);
    console.log('Tweet id: ' + id);
  }

}
