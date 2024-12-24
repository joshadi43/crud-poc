import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Employee } from '../../Models/Employee';
import { EmployeeService } from '../../Services/employees.service';

@Component({
  selector: 'app-employees',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.css'],
})
export class EmployeesComponent implements OnInit {
  employeeList: Employee[] = [];
  newEmployee: Employee = {
    firstName: '',
    middleName: '',
    lastName: '',
    maritalStatus: '',
    dob: '',
    mobile: '',
    address: '',
    city: '',
    state: '',
    zip: 0,
    email: '',
    username: '',
    password: '',
  };
  isModalActive: boolean = false;
  isEditMode: boolean = false;  // Flag for Add/Edit Mode

  constructor(private employeeService: EmployeeService) {}

  ngOnInit(): void {
    this.loadEmployees();
  }

  loadEmployees(): void {
    this.employeeService.getAllEmployees().then(
      (data: Employee[]) => {
        this.employeeList = data;
      },
      (error: any) => {
        console.error('Error fetching employee data', error);
      }
    );
  }

  openAddEmployeeModal(): void {
    this.isEditMode = false;
    this.newEmployee = {
      firstName: '',
      middleName: '',
      lastName: '',
      maritalStatus: '',
      dob: '',
      mobile: '',
      address: '',
      city: '',
      state: '',
      zip: 0,
      email: '',
      username: '',
      password: '',
    };
    this.isModalActive = true;
  }

  openEditEmployeeModal(employee: Employee): void {
    this.isEditMode = true;
    this.newEmployee = { ...employee };  // Prefill form with employee data
    this.isModalActive = true;
  }

  closeModal(): void {
    this.isModalActive = false;
  }

  saveEmployee(): void {
    if (this.newEmployee.password !== this.newEmployee.confirmPassword) {
      alert('Passwords do not match!');
      return;
    }

    if (this.isEditMode) {
      // Update existing employee
      this.employeeService.updateEmployee(this.newEmployee).then(
        () => {
          this.loadEmployees();
          this.closeModal();
        },
        (error: any) => {
          console.error('Error updating employee', error);
          alert('An error occurred while updating the employee.');
        }
      );
    } else {
      // Add new employee
      this.employeeService.addEmployee(this.newEmployee).then(
        () => {
          this.loadEmployees();
          this.closeModal();
        },
        (error: any) => {
          console.error('Error adding employee', error);
          alert('An error occurred while adding the employee.');
        }
      );
    }
  }

  deleteEmployee(employeeId: number | undefined): void {
    if (employeeId === undefined || isNaN(employeeId)) {
      console.error('Invalid employee ID');
      return;
    }

    this.employeeService.deleteEmployee(employeeId).then(
      () => {
        this.loadEmployees();
      },
      (error: any) => {
        console.error('Error deleting employee', error);
        alert('An error occurred while deleting the employee.');
      }
    );
  }
}
