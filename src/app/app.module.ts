import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ParallaxComponent } from './parallax/parallax.component';
import { ContentAreaComponent } from './content-area/content-area.component';
import { PortfolioCardComponent } from './content-area/portfolio-card/portfolio-card.component';
import { BioComponent } from './content-area/bio/bio.component';
import { FooterComponent } from './footer/footer.component';
import { NavbarComponent } from './navbar/navbar.component';
import { MetricComponent } from './content-area/portfolio-card/metric/metric.component';
import { MatchHeightDirective } from './match-height.directive';
@NgModule({
  declarations: [
    AppComponent,
    ParallaxComponent,
    ContentAreaComponent,
    PortfolioCardComponent,
    BioComponent,
    FooterComponent,
    NavbarComponent,
    MetricComponent,
    MatchHeightDirective
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
