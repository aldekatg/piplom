import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatCardModule} from '@angular/material/card';
import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {RouterModule} from '@angular/router';
import {routes} from './app-routing.module';
import {HttpClientModule} from '@angular/common/http';
import {HomePageComponent} from './home-page/home-page.component';
import {CdkTreeModule} from '@angular/cdk/tree';
import {AuthModule} from './auth/auth.module';
import {CotlCalcComponent} from './cotl-calc/cotl-calc.component';
import {CommonModule} from '@angular/common';
import {ReactiveFormsModule, FormsModule, FormGroup, ControlContainer} from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatRadioModule} from '@angular/material/radio';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import {MatStepperModule} from '@angular/material/stepper';
import {MatDividerModule} from '@angular/material/divider';
import {MatListModule} from '@angular/material/list';
import {MatMenuModule} from '@angular/material/menu';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatSelectModule} from '@angular/material/select';
import {MatRippleModule, MatNativeDateModule} from '@angular/material/core';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import {MatTableModule} from '@angular/material/table';
import {MatTooltipModule} from '@angular/material/tooltip';
import {MatTreeModule} from '@angular/material/tree';
import {PortalModule} from '@angular/cdk/portal';
import {ScrollingModule} from '@angular/cdk/scrolling';
import {MatTabsModule} from '@angular/material/tabs';

@NgModule({
  declarations: [AppComponent, HomePageComponent, CotlCalcComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatAutocompleteModule,
    HttpClientModule,

    MatToolbarModule,
    MatSelectModule,
    MatRippleModule,
    MatCheckboxModule,
    MatNativeDateModule,
    MatTooltipModule,
    MatButtonModule,
    CommonModule,
    ScrollingModule,
    MatInputModule,
    MatButtonToggleModule,
    PortalModule,
    MatTabsModule,

    MatStepperModule,
    ScrollingModule,
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
    ReactiveFormsModule,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {
}
