import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  @Output() headernav = new EventEmitter<{ pageLink: string }>();
  constructor() { }

  ngOnInit() {
  }

  OnSelect(tag: string) {
    console.log('tag ' + tag);
    this.headernav.emit({pageLink: tag});
  }
}

