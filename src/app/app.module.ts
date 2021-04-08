import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './components/nav/nav.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { FormsModule, ReactiveFormsModule} from '@angular/forms';

import { MatSidenavModule} from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatChipsModule } from '@angular/material/chips';
import { MatTableModule } from '@angular/material/table';
import { MatDialogModule } from '@angular/material/dialog';
import { MatTabsModule } from '@angular/material/tabs';
import { MatCardModule } from '@angular/material/card';

import { AgmCoreModule } from '@agm/core';

import {  } from 'reflect-metadata';

import { WelcomeComponent } from './components/welcome/welcome.component';
import { NewsComponent } from './components/news/news.component';
import { WatersComponent } from './components/waters/waters.component';
import { MatchesComponent } from './components/matches/matches.component';
import { PhotosComponent } from './components/photos/photos.component';
import { RulesComponent } from './components/rules/rules.component';
import { PreviewComponent } from './components/preview/preview.component';
import { MatchInfoComponent } from './dialogs/match-info/match-info.component';
import { DiaryComponent } from './components/diary/diary.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    WelcomeComponent,
    NewsComponent,
    WatersComponent,
    MatchesComponent,
    PhotosComponent,
    RulesComponent,
    PreviewComponent,
    MatchInfoComponent,
    DiaryComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,

    FormsModule, 
    ReactiveFormsModule,

    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyDHevRsT--n12LBiAdO034OFHV7WCJVWck'
    }),

    MatSidenavModule,
    MatToolbarModule,
    MatIconModule,
    MatChipsModule,
    MatListModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatTableModule,
    MatDialogModule,
    MatTabsModule,
    MatCardModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
