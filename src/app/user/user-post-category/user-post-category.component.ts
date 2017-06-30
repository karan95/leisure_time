import { Component, OnInit, forwardRef } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR, FormControl } from '@angular/forms';

import 'rxjs/add/operator/startWith';
import 'rxjs/add/operator/map';

const noop = () => {
};

@Component({
  selector: 'app-user-post-category',
  templateUrl: './user-post-category.component.html',
  styleUrls: ['./user-post-category.component.css'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => UserPostCategoryComponent),
      multi: true
    }
  ]
})
export class UserPostCategoryComponent implements OnInit{
  public items: Array<string> = ['Movie','Song','Music','Novel','Article','Tv Season','Game','Book','Fitness','Place','Other'];
  public selectedValue: any = {};
  private _disabledV: string = '0';
  private disabled: boolean = false;
  
  constructor() {}

  filterStates(val: string) {
    return val ? this.items.filter(s => s.toLowerCase().indexOf(val.toLowerCase()) === 0)
               : this.items;
  }

  private get disabledV(): string {
    return this._disabledV;
  }

  private set disabledV(selectedValue: string) {
    this._disabledV = selectedValue;
    this.disabled = this._disabledV === '1';
  }

  public selected(selectedValue: any): void {
    this.onChangeCallback(this.selectedValue.text);
    // console.log('Selected value is: ', selectedValue);
  }

  public removed(selectedValue: any): void {
    // console.log('Removed value is: ', selectedValue);
  }

  public typed(selectedValue: any): void {
    // console.log('New search input: ', selectedValue);
  }

  public refreshValue(selectedValue: any): void {
    this.selectedValue = selectedValue;
  }

  private onTouchedCallback: () => void = noop;
  private onChangeCallback: (_: any) => void = noop;

  get value(): any {
    return this.selectedValue;
  };

  set value(v: any) {
    if (v !== this.selectedValue) {
       this.selectedValue = v;
        this.onChangeCallback(v);
    }
  }

  onBlur() {
    this.onTouchedCallback();
  }

  writeValue(value: any) {
    if (value !== this.selectedValue) {
       this.selectedValue = value;
    }
  }

  registerOnChange(fn: any) {
    this.onChangeCallback = fn;
  }
  
  registerOnTouched(fn: any) {
    this.onTouchedCallback = fn;
  }
  
  ngOnInit() {
  }
}
