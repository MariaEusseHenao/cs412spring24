import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {NumbersObservableComponent} from "./numbers/numbers-observable.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NumbersObservableComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'observables2';
}
