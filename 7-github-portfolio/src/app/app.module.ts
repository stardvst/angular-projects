import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { TransferHttpCacheModule } from '@nguniversal/common';

import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { PersonalInfoComponent } from './personal-info/personal-info.component';
import { PanelComponent } from './panel/panel.component';
import { RepositoriesComponent } from './repositories/repositories.component';
import { OrganizationsComponent } from './organizations/organizations.component';
import { PrebootModule } from 'preboot';

@NgModule({
  declarations: [AppComponent, PersonalInfoComponent, PanelComponent, RepositoriesComponent, OrganizationsComponent],
  imports: [
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    HttpClientModule,
    TransferHttpCacheModule,
    PrebootModule.withConfig({ appRoot: 'app-root' }),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
