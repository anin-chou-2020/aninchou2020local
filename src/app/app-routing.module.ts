import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './components/home/home.component';
import { ExperienceComponent } from './components/experience/experience.component';
import { SkillsComponent } from './components/skills/skills.component';
import { AchievementsComponent } from './components/achievements/achievements.component';
import { EducationComponent } from './components/education/education.component';



const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo:'/home' },
  { path: 'home', component: HomeComponent },
  { path: 'experience', component: ExperienceComponent },
  { path: 'skills', component: SkillsComponent },
  { path: 'achievements-leadership', component: AchievementsComponent },
  { path: 'education', component: EducationComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
