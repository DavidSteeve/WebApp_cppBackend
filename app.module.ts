import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatInputModule} from '@angular/material/input';
import {HeroServiceService} from 'src/app/services/hero-service.service';
import {HttpClient} from '@angular/common/http';
import {HttpClientModule} from '@angular/common/http';
import { ListHerosComponent } from './Heros/list-heros.component';
import {HeroService} from './Heros/hero.service';
import { SearchHerosPipe } from './search-heros.pipe'
import { MatSelectModule, MatButtonModule } from '@angular/material';

@NgModule({
  declarations: [
    AppComponent,
    ListHerosComponent,
    SearchHerosPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatInputModule, 
    HttpClientModule ,
    FormsModule,
    MatSelectModule,
    MatButtonModule
  ],
  providers: [HeroService],
  bootstrap: [AppComponent]
})
export class AppModule { }
