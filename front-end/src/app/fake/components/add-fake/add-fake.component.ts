import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-fake',
  templateUrl: './add-fake.component.html',
  styleUrls: ['./add-fake.component.scss']
})
export class AddFakeComponent implements OnInit {

  file: File = null;

  constructor() { }

  ngOnInit(): void {
  }

  onImageSelected(file: File) {
    this.file = file;
  }

}
