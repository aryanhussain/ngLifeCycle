//our root app component
import { Component, NgModule, ChangeDetectionStrategy, ChangeDetectorRef, Input, VERSION } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { AComponent } from './child-a'
import { BComponent } from './child-b'


@Component({
  selector: 'my-app',
  template: `
    <h1>Hello my name is {{name}}</h1>
    <a-comp [Adata]="o"></a-comp>
  `,
})
export class App {
  name = `Angular! v${VERSION.full}`;
  o = { id: 1, name: 'John' };

  ngOnInit() {

    console.log("ngOnInit-app");
    setTimeout(() => {
      this.name = `Angular4! v${VERSION.full}`;
    }, 2000)
    setTimeout(() => {
      this.o.id = 2;
      this.o.name = 'Jane';
    }, 5000);
  }

  ngOnChanges() {
    console.log("ngOnChange-app")
  }
  ngDoCheck() {
    console.log("ngDoCheck-app")
  }
  ngAfterContentInit() {
    console.log("ngAfterContentInit-app")
  }
  ngAfterContentChecked() {
    console.log("ngAfterContentChecked-app")
  }
  ngAfterViewInit() {
    console.log("ngAfterViewInit-app")
  }
  ngAfterViewChecked() {
    console.log("ngAfterViewChecked-app")
  }
}

@NgModule({
  imports: [BrowserModule],
  declarations: [App, AComponent, BComponent],
  bootstrap: [App]
})
export class AppModule { }