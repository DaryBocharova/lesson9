import { Component, OnInit } from '@angular/core';
import { SearchService } from './search.service';
import { ModalComponent } from './modal.component';
import { MatDialog } from '@angular/material/dialog';

export interface User {
  'id': number;
  'name': string;
  'username': string;
  'email': string;
  'address': {
    'street': string,
    'suite': string,
    'city': string,
    'zipcode': string,
    'geo': {
      'lat': string,
      'lng': string
    }
  };
}
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent implements OnInit {
  fullUserList: User[];
  searchFields = {
    name: '',
    email: '',
    address: ''
  };

  constructor(public searchService: SearchService, public dialog: MatDialog) {}

  ngOnInit() {
    this.searchService.getData().subscribe((data) => {
      this.fullUserList = data;
    });
  }

  get userList(): User[] {
    let userlist = this.fullUserList;
    if (this.searchFields.name) {
      const searchString = this.searchFields.name;
      userlist = userlist.filter((item) =>
        item.name.includes(searchString) ||
        item.username.includes(searchString));
    }
    if (this.searchFields.email) {
      userlist = userlist.filter((item) => item.email.includes(this.searchFields.email));
    }
    if (this.searchFields.address) {
      const searchString = this.searchFields.address;
      userlist = userlist.filter((item) =>
        item.address.zipcode.includes(searchString) ||
        item.address.city.includes(searchString) ||
        item.address.suite.includes(searchString) ||
        item.address.street.includes(searchString)
      );
    }
    return userlist;
  }

  onShow(geo: { lat: string; lng: string }): void {
    this.dialog.open(ModalComponent, {
      height: '300px',
      width: '300px',
      data: {
        lat: Number(geo.lat),
        lon: Number(geo.lng),
      },
    });
  }
}
