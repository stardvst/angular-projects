import { NgModule, Injector, ApplicationRef } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CopyButtonComponent, UiControlsModule } from 'ui-controls';

import { AppComponent } from './app.component';
import { createCustomElement } from '@angular/elements';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, UiControlsModule],
  providers: [],
  entryComponents: [AppComponent],
})
export class AppModule {
  constructor(private injector: Injector) {}

  ngDoBootstrap(appRef: ApplicationRef) {
    if (document.querySelector('app-root')) {
      appRef.bootstrap(AppComponent);
    }

    const el = createCustomElement(CopyButtonComponent, { injector: this.injector });
    customElements.define('copy-button', el);
  }
}
