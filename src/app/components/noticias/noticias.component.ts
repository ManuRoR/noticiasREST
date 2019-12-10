import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-noticias',
  templateUrl: './noticias.component.html',
  styleUrls: ['./noticias.component.scss']
})
export class NoticiasComponent implements OnInit {
@Input() id;
@Input() created: string;
@Input() fullText: string;
@Input() imagen: string;

@Output() openTweet: EventEmitter<number> = new EventEmitter<any>();

  constructor() { }

  ngOnInit() {
  }

  touchChild() {
    console.log('Componente hijo: ' + this.id);
    this.openTweet.emit(this.id);
  }

}
