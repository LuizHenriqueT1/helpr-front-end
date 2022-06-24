import { API_CONFIG } from './../../../config/api.config';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Cliente } from '../../models/pessoa';

@Injectable({
  providedIn: 'root'
})
export class ClientesService {
  clientesUrl = `${API_CONFIG.baseUrl.prod}/service/clientes`
  constructor(private http: HttpClient) { }

  findAll(): Observable<Cliente[]> {
    return this.http.get<Cliente[]>(this.clientesUrl);
  }

  findById(id: number): Observable<Cliente> {
    return this.http.get<Cliente>(`${this.clientesUrl}/${id}`);
  }

  create(cliente: Cliente){
    return this.http.post(this.clientesUrl, cliente)
  }

  update(cliente: Cliente) {
    return this.http.put(`${this.clientesUrl}/${cliente.id}`, cliente);
  }

  delete(id: number) {
    return this.http.delete(`${this.clientesUrl}/${id}`);
  }
}
