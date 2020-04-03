import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-image-input',
  templateUrl: './image-input.component.html',
  styleUrls: ['./image-input.component.scss']
})
export class ImageInputComponent implements OnInit {
  
  file: File = null;
  imageUrl: string = "";

  @Output() 
  imageSelected: EventEmitter<File> = new EventEmitter<File>();

  constructor() {}

  ngOnInit(): void {}

  uploadFile(event) {
    this.file = event[0];

    var reader = new FileReader();
    reader.readAsDataURL(this.file); 
    reader.onload = (_event) => { 
      this.imageUrl = reader.result as string; 
      this.imageSelected.emit(this.file);
    }

  }

  deleteAttachment(index) {
    this.file = null;
  }
}
