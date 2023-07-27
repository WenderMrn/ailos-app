import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatStepperModule } from '@angular/material/stepper';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatBadgeModule } from '@angular/material/badge';
import { NgxMaskModule, IConfig } from 'ngx-mask';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HomeComponent } from './pages/home/home.component';
import { PageContainerComponent } from './components/page-container/page-container.component';
import { ProgressStepperComponent } from './progress-stepper/progress-stepper.component';
import { CpfCnpjPipe } from './pipes/cpf-cnpj/cpf-cnpj.pipe';

const maskConfig: Partial<IConfig> = {
  validation: false,
};
const MATERIAL_MODULES = [
  MatIconModule,
  MatButtonModule,
  MatStepperModule,
  MatFormFieldModule,
  MatStepperModule,
  MatCardModule,
  MatInputModule,
  MatBadgeModule,
];

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    PageContainerComponent,
    ProgressStepperComponent,
    CpfCnpjPipe,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    NgxMaskModule.forRoot(maskConfig),
    ...MATERIAL_MODULES,
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [],
})
export class AppModule {}
