import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { NxWelcomeComponent } from './nx-welcome.component';
import { ShellComponent } from './shared/shell/shell.component';
import { SidebarComponent } from './shared/sidebar/sidebar.component';
import { DashboradComponent } from './pages/dashborad/dashborad.component';

// Module Angular Material
import { MaterialModule } from './material/material.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CalendarComponent } from './calendar/calendar/calendar.component';
import { InfoComponent } from './calendar/info/info.component';

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
// import { ScoringComponent } from './scoring/scoring.component';

// Spinner
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
// Import library module
import { NgxSpinnerModule } from 'ngx-spinner';
import { DetailProfilComponent } from './profil/detail-profil/detail-profil.component';
import { EditProfilComponent } from './profil/edit-profil/edit-profil.component';
import { AddScoreComponent } from './add-score/add-score.component';
import { HomeRoomPanelComponent } from './home-room-panel/home-room-panel.component';
// import { LoginComponent } from './login/login.component';
///
const routes: Routes = [
  {
    path: '',
    component: ShellComponent,
    children: [
      {
        path: 'dashboard',
        component: DashboradComponent,
      },
      {
        path: 'detail-profil',
        component: DetailProfilComponent,
      },
      {
        path: 'edit-profil',
        component: EditProfilComponent,
      },
      {
        path: 'add-score/:subjectID',
        component: AddScoreComponent,
      },
      {
        path: 'home-room-panel',
        component: HomeRoomPanelComponent,
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
    DashboradComponent,
    CalendarComponent,
    InfoComponent,
    DetailProfilComponent,
    EditProfilComponent,
    AddScoreComponent,
    HomeRoomPanelComponent,
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
    NgxSpinnerModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AppModule {}
