import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { 
  MatFormFieldModule, 
  MatSelectModule,
  MatInputModule, 
  MatTabsModule, 
  MatIconModule, 
  MatCardModule,
  MatButtonModule,
  MatToolbarModule,
  MatSidenavModule,
  MatSnackBarModule,
  MatSnackBar} from '@angular/material';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { AngularFireModule } from 'angularfire2';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainComponent } from './main/main.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { environment } from 'src/environments/environment';
import { FooterComponent } from './footer/footer.component';
import { FeedComponent } from './content/feed/feed.component';
import { ContentComponent } from './content/content.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { UserComponent } from './user/user.component';
import { HammertimeDirective } from './hammertime.directive';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    FooterComponent,
    FeedComponent,
    ContentComponent,
    WelcomeComponent,
    UserComponent,
    HammertimeDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatSelectModule,
    MatInputModule,
    MatTabsModule,
    MatIconModule,
    MatToolbarModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFirestoreModule,
    MatCardModule,
    MatButtonModule,
    FlexLayoutModule,
    MatSidenavModule,
    MatSnackBarModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
