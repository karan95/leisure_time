import { Injectable } from '@angular/core';

@Injectable()
export class ImageService {
  private images: Array<any> = [];
  constructor() { }

  setImages(images: any) {
    this.images.push(images.value);
  }

  getAllImages() {
    return this.images;
  }

  removeAllImages() {
    this.images = [];
  }
}
