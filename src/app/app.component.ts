import { Component, OnInit } from '@angular/core';
import { SearchService } from './search.service';
import { ModalComponent, ModalData } from './modal.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent implements OnInit {
  user: any;
  searchName = '';
  searchEmail = '';
  searchAddress = '';

  constructor(public searchService: SearchService, public dialog: MatDialog) {
    this.searchService.getData().subscribe((data) => {
      this.user = data;
      console.log( this.user);
    });
  }

  ngOnInit() {
  }

  onShow(user: any) {
    var data: ModalData = new ModalData();
    this.dialog.open(ModalComponent, {
      data: { data },
    });
  }
}
