import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { NavbarComponent } from './componets/layout/navbar/navbar.component';
import { FooterComponent } from './componets/layout/footer/footer.component';
import { HeaderComponent } from './componets/header/header.component';
import { AboutComponent } from './componets/about/about.component';
import { ServicesComponent } from './componets/services/services.component';
import { FeaturesComponent } from './componets/features/features.component';
import { ProcessComponent } from './componets/process/process.component';
import { WorksComponent } from './componets/works/works.component';
import { BlogComponent } from './componets/blog/blog.component';
import { ContactComponent } from './componets/contact/contact.component';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { NgSelectModule } from '@ng-select/ng-select';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './pages/home/home.component';
import { ServiceComponent } from './pages/service/service.component';

export function createTranslateLoader(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}
@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    HeaderComponent,
    AboutComponent,
    ServicesComponent,
    FeaturesComponent,
    ProcessComponent,
    WorksComponent,
    BlogComponent,
    ContactComponent,
    HomeComponent,
    ServiceComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CommonModule,
    NgbModule,
    FontAwesomeModule,
    NgSelectModule,
    FormsModule,
    HttpClientModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: createTranslateLoader,
        deps: [HttpClient],
      },
      defaultLanguage: 'ar',
    }),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
