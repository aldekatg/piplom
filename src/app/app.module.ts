import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { routes } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatTreeModule } from '@angular/material/tree';
import { HomePageComponent } from './home-page/home-page.component';
import { MatTableModule } from '@angular/material/table';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatMenuModule } from '@angular/material/menu';
import { MatDividerModule } from '@angular/material/divider';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatListModule } from '@angular/material/list';
import { CdkTreeModule } from '@angular/cdk/tree';
import { AuthModule } from './auth/auth.module';
import { MatRadioModule } from '@angular/material/radio';
@NgModule({
  declarations: [AppComponent, HomePageComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,

    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatMenuModule,
    MatRadioModule,
    MatListModule,
    MatDividerModule,
    CdkTreeModule,
    MatProgressBarModule,
    MatCardModule,
    MatFormFieldModule,
    MatTableModule,
    MatTreeModule,
    MatSidenavModule,
    AuthModule,

    RouterModule.forRoot(routes),
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
