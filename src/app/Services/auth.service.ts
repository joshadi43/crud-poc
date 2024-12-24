import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { firstValueFrom, Observable } from 'rxjs';  
import { Register } from '../Models/register';
import { LoginRequest, LoginResponse } from '../Models/Login';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiUrl : string = 'http://localhost:5119/api/'; 

  constructor(private http: HttpClient) { }

login(credentials: LoginRequest): Promise<LoginResponse> {
    return firstValueFrom(
      this.http.post<LoginResponse>(`${this.apiUrl}Login`, credentials)  
    );
  } 

  createEmployee(data: any) {
    
    console.log('Sending data to backend:', data);
    return new Promise((resolve, reject) => {
      
        this.http.post(`${this.apiUrl}Registration`, data).subscribe({
            next: (response) => resolve(response),
            error: (error) => reject(error),
        });
    });
  
    return firstValueFrom(
      this.http.post<any>(this.apiUrl + 'Registration', data)
    ).then((res) => res);
  }

  getAllEmployees():Observable<Register> {
    return this.http.get<Register>(this.apiUrl + 'Registration')
  }
}

