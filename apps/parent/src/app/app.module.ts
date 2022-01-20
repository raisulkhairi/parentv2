import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NxWelcomeComponent } from './nx-welcome.component';
import { RouterModule, Routes } from '@angular/router';
// Module Angular Material
import { MaterialModule } from './material/material.module';
import { ShellComponent } from './shared/shell/shell.component';
import { SidebarComponent } from './shared/sidebar/sidebar.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { LoginComponent } from './pages/login/login.component';
////

import { CommonModule } from '@angular/common';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// Form
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

// Http Client Module
import { HttpClientModule } from '@angular/common/http';

// Fullcalendar.io
import { FullCalendarModule } from '@fullcalendar/angular';
import dayGridPlugin from '@fullcalendar/daygrid';
import interactionPlugin from '@fullcalendar/interaction';
import timeGridPlugin from '@fullcalendar/timegrid';
import listPlugin from '@fullcalendar/list';

// Spinner
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
// Import library module
import { NgxSpinnerModule } from 'ngx-spinner';
import { DetailProfileComponent } from './pages/profile/detail-profile/detail-profile.component';
import { EditProfileComponent } from './pages/profile/edit-profile/edit-profile.component';
import { CalendarComponent } from './component/calendar/calendar.component';
import { InfoComponent } from './component/info/info.component';
import { ScoreInfoComponent } from './pages/score-info/score-info.component';
import { SidenavComponent } from './component/sidenav/sidenav.component';
import { DetailStudentComponent } from './pages/detail-student/detail-student.component';

const routes: Routes = [
  {
    path: '',
    component: ShellComponent,
    children: [
      {
        path:'',
        pathMatch:'full',
        redirectTo:'dashboard'
      },
      {
        path: 'dashboard',
        component: DashboardComponent,
      },
      {
        path: 'detail-profile',
        component: DetailProfileComponent,
      },
      {
        path: 'edit-profile',
        component: EditProfileComponent,
      },
      {
        path: 'score-info/:idStudent',
        component: ScoreInfoComponent,
      },
      {
        path: 'detail-student/:idStudent',
        component: DetailStudentComponent,
      },
    ],
  },
];

FullCalendarModule.registerPlugins([
  dayGridPlugin,
  timeGridPlugin,
  listPlugin,
  interactionPlugin,
]);

@NgModule({
  declarations: [
    AppComponent,
    NxWelcomeComponent,
    ShellComponent,
    SidebarComponent,
    DashboardComponent,
    LoginComponent,
    DetailProfileComponent,
    EditProfileComponent,
    CalendarComponent,
    InfoComponent,
    ScoreInfoComponent,
    SidenavComponent,
    DetailStudentComponent,
  ],
  imports: [
    CommonModule,
    BrowserModule,
    RouterModule.forRoot(routes),
    MaterialModule,
    BrowserAnimationsModule,
    FullCalendarModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    NgxSpinnerModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AppModule {}
