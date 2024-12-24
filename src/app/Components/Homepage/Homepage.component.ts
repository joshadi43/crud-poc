import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { EmployeesComponent } from '../employees/employees.component';
import { BodyComponent } from '../../body/body.component';

@Component({
  selector: 'app-homepage',
  standalone: true,
  imports:[RouterLink, EmployeesComponent, BodyComponent],
  templateUrl: './homepage.component.html',
  styleUrls: ['./Homepage.component.css'],
})
export class HomepageComponent {
  constructor() {}
}
