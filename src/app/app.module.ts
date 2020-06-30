import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatCardModule } from '@angular/material/card';
import { MatListModule } from '@angular/material/list';
import { LayoutModule } from '@angular/cdk/layout';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { HomeComponent } from './components/home/home.component';
import { ExperienceComponent } from './components/experience/experience.component';
import { SkillsComponent } from './components/skills/skills.component';
import { AchievementsComponent } from './components/achievements/achievements.component';
import { EducationComponent } from './components/education/education.component';

@NgModule({
  imports:      [ BrowserModule, BrowserAnimationsModule, FormsModule, MatToolbarModule, MatIconModule, MatButtonModule, MatTooltipModule, MatCardModule, MatListModule, LayoutModule, AppRoutingModule ],
  declarations: [ AppComponent, HeaderComponent, HomeComponent, ExperienceComponent, SkillsComponent, AchievementsComponent, EducationComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
