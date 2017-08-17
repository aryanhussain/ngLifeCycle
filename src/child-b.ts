//our root app component
import {Component, NgModule, ChangeDetectionStrategy, ChangeDetectorRef, Input, VERSION} from '@angular/core'
import {BrowserModule} from '@angular/platform-browser'

@Component({
  selector: 'b-comp',
  template: `<h3 (click)="Bclick('new Value B')">The name is: {{Bdata.name}}</h3>`,
})
export class BComponent {
  @Input() Bdata;
  id;

  constructor(private cd: ChangeDetectorRef) {}

  Bclick(newvale){
    this.Bdata.name = newvale;
  }
   ngOnInit() {
    console.log("ngOnInit-b");
  }
  ngOnChanges() {
    console.log("ngOnChanges-b")
    this.id = this.Bdata.id;
  }

  ngDoCheck() {
    console.log("ngDoCheck-b")
    if (this.id !== this.Bdata.id) {
      this.cd.markForCheck();
    }
  }
  ngAfterContentInit(){
    console.log("ngAfterContentInit-b")
  }
  ngAfterContentChecked(){
    console.log("ngAfterContentChecked-b")
  }
  ngAfterViewInit(){
    console.log("ngAfterViewInit-b")
  }
  ngAfterViewChecked(){
    console.log("ngAfterViewChecked-b")
  }
}
}