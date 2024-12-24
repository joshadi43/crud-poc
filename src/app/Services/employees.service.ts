import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { firstValueFrom } from 'rxjs';
import { Employee } from '../Models/Employee';

@Injectable({
  providedIn: 'root',
})
export class EmployeeService {
  private apiUrl: string = 'http://localhost:5119/api/Registration';  // Ensure this is the correct API endpoint

  constructor(private http: HttpClient) {}

  // Get all employees
  getAllEmployees(): Promise<Employee[]> {
    return firstValueFrom(this.http.get<Employee[]>(this.apiUrl)).catch((error) => {
      console.error('Error fetching employees:', error);
      throw error;  // Rethrow or handle the error as appropriate
    });
  }

  // Add a new employee
  addEmployee(employee: Employee): Promise<void> {
    return firstValueFrom(this.http.post<void>(this.apiUrl, employee)).catch((error) => {
      console.error('Error adding employee:', error);
      throw error;
    });
  }

  // Update an existing employee
  updateEmployee(employee: Employee): Promise<void> {
    return firstValueFrom(this.http.put<void>(`${this.apiUrl}/${employee.id}`, employee)).catch((error) => {
      console.error('Error updating employee:', error);
      throw error;
    });
  }

  // Delete an employee
  deleteEmployee(id: number): Promise<void> {
    return firstValueFrom(this.http.delete<void>(`${this.apiUrl}/${id}`)).catch((error) => {
      console.error('Error deleting employee:', error);
      throw error;
    });
  }
}
