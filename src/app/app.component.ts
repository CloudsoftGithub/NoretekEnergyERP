import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MaterialModule } from './material/material.module';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { AboutComponent } from './components/about/about.component';
import { HomeComponent } from './components/home/home.component';
import { ServicesComponent } from './components/services/services.component';
import { CarouselComponent } from "./components/carousel/carousel.component";
@Component({
  selector: 'app-root',
  imports: [RouterOutlet, MaterialModule,
    HeaderComponent, FooterComponent,
    AboutComponent, HomeComponent, ServicesComponent, CarouselComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'noretek_mini_erp';
}
