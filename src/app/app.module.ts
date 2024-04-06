import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TastyPastriesComponent } from './tasty-pastries/tasty-pastries.component';
import { HowWeWorkComponent } from './how-we-work/how-we-work.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { RecipesComponent } from './recipes/recipes.component';
import { TestymonialsComponent } from './testymonials/testymonials.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { FooterComponent } from './footer/footer.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    TastyPastriesComponent,
    HowWeWorkComponent,
    AboutUsComponent,
    RecipesComponent,
    TestymonialsComponent,
    ContactUsComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
