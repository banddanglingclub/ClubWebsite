import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './components/nav/nav.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { 
  MatSidenavModule
} from '@angular/material/sidenav';
import { 
  MatToolbarModule 
} from '@angular/material/toolbar';
import { 
  MatIconModule 
} from '@angular/material/icon';
import { 
  MatListModule 
} from '@angular/material/list';
import { 
  MatButtonModule 
} from '@angular/material/button';

import { MatChipsModule } from '@angular/material/chips';
import { WelcomeComponent } from './components/welcome/welcome.component';
import { NewsComponent } from './components/news/news.component';
import { WatersComponent } from './components/waters/waters.component';
import { MatchesComponent } from './components/matches/matches.component';
import { PhotosComponent } from './components/photos/photos.component';
import { RulesComponent } from './components/rules/rules.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    WelcomeComponent,
    NewsComponent,
    WatersComponent,
    MatchesComponent,
    PhotosComponent,
    RulesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSidenavModule,
    MatToolbarModule,
    MatIconModule,
    MatChipsModule,
    MatListModule,
    MatButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }