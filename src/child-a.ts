
import {Component, NgModule, ChangeDetectionStrategy, ChangeDetectorRef, Input, VERSION} from '@angular/core'
import {BrowserModule} from '@angular/platform-browser'

@Component({
  selector: 'a-comp',
  template: `<h2 (click)="Aclick('new Value A')">The name is: {{Adata.name}}</h2>
                <b-comp [Bdata]="Adata"></b-comp>`,
  
})
export class AComponent {
  @Input() Adata;
  id;

  constructor(private cd: ChangeDetectorRef) {}
  Aclick(newvale){
    this.Adata.name = newvale;
  }
   ngOnInit() {
    console.log("ngOnInit-a");
  }
  ngOnChanges() {
    console.log("ngOnChanges-a")
    this.id = this.Adata.id;
  }

  ngDoCheck() {
    console.log("ngDoCheck-a")
    if (this.id !== this.Adata.id) {
      this.cd.markForCheck();
    }
  }
  ngAfterContentInit(){
    console.log("ngAfterContentInit-a")
  }
  ngAfterContentChecked(){
    console.log("ngAfterContentChecked-a")
  }
  ngAfterViewInit(){
    console.log("ngAfterViewInit-a")
  }
  ngAfterViewChecked(){
    console.log("ngAfterViewChecked-a")
  }
}
}