import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NxWelcomeComponent } from './nx-welcome.component';
import { RouterModule } from '@angular/router';

// Module Angular Material
import { MaterialModule } from './material/material.module';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { ScoreComponent } from './pages/info/score/score.component';
import { KelasComponent } from './pages/info/kelas/kelas.component';
import { EditProfileComponent } from './pages/profile/edit-profile/edit-profile.component';
import { DetailProfileComponent } from './pages/profile/detail-profile/detail-profile.component';
import { CalendarComponent } from './component/calendar/calendar.component';
import { InfoComponent } from './component/info/info.component';

//////////////////////////////////////////////////////////////
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

// Route
import { Routes } from '@angular/router';
import { ShellComponent } from './shared/shell/shell.component';
import { SidebarComponent } from './shared/sidebar/sidebar.component';

const routes: Routes = [
  {
    path: '',
    component: ShellComponent,
    children: [
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
        path: 'class-info',
        component: KelasComponent,
      },
      {
        path: 'grade-info',
        component: ScoreComponent,
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
    DashboardComponent,
    ScoreComponent,
    KelasComponent,
    EditProfileComponent,
    DetailProfileComponent,
    CalendarComponent,
    InfoComponent,
    ShellComponent,
    SidebarComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    MaterialModule,
    BrowserAnimationsModule,
    FullCalendarModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
