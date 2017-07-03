import { Component, OnInit, forwardRef, EventEmitter, Output } from '@angular/core';
import { ImageSearchService } from '../image-search/image-search.service';
import { ImageService } from '../image-search/image.service';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

const noop = () => {
};

@Component({
  selector: 'app-user-post-image',
  templateUrl: './user-post-image.component.html',
  styleUrls: ['./user-post-image.component.css'],
   providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => UserPostImageComponent),
      multi: true
    }
  ]
})
export class UserPostImageComponent implements OnInit {
  searchedImages: Array<any>;
  selectedImage: Array<string>;
  imageSelected: boolean;
  imageSearchBox: any;
  public visible = false;
  constructor(private imageService: ImageService, private _imageSearchService: ImageSearchService) { }
  ngOnInit() {
    this.imageSearchBox = (<HTMLInputElement>document.getElementById("searchText"));
    this.selectedImage = [];
  }

  public show(): void {
    if (this.visible == false) {
      this.visible = true;
    } else {
      this.visible = false;
      this.imageSearchBox.value = '';
      this.searchedImages = [];
    }
  }
  public searchByEnter(event) {
    if(event.keyCode == 13) {
      this.searchImage();
    }
  }

  public searchImage(): void {
    let searchString:string = this.imageSearchBox.value.trim();
    if(searchString != "") {
      this._imageSearchService.getImages(searchString).subscribe(
        (images) => {
          this.imageService.setImages(images);
          this.searchedImages = this.imageService.getAllImages();
        }
      );
    }
  }

  public selectImage(selectedImage:string) {
    this.selectedImage.push(selectedImage);
    this.imageSelected = true;
    this.onChangeCallback(this.selectedImage);
    // document.getElementById("searchImageData").className="selectedImage";
  }

  public uploadImage() {
    if(this.selectedImage.length > 0) {
      this.visible = false;
      this.imageSearchBox.value = '';
      this.searchedImages = [];
      this.imageService.removeAllImages();
    }
  }


  // Placeholders for the callbacks which are later providesd
  // by the Control Value Accessor
  private onTouchedCallback: () => void = noop;
  private onChangeCallback: (_: any) => void = noop;

  get value(): any {
    return this.selectedImage;
  };

  set value(v: any) {
    for (let i = 0; i < this.selectedImage.length; i++) {
      if (v !== this.selectedImage[i]) {
        this.selectedImage[i] = v;
        this.onChangeCallback(v);
      }
    }
  }

  onBlur() {
    this.onTouchedCallback();
  }

  writeValue(value: any) {
    if (value == null) {
      this.selectedImage.length = 0;
      return;
    }
    for (let i = 0; i < this.selectedImage.length; i++) {
      if (value !== this.selectedImage[i]) {
        this.selectedImage[i] = value;
      }
    }
  }

  registerOnChange(fn: any) {
    this.onChangeCallback = fn;
  }
  
  registerOnTouched(fn: any) {
    this.onTouchedCallback = fn;
  }

}
