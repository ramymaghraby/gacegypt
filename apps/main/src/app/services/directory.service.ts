import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class DirectoryService {
  constructor(private http: HttpClient) {}

  getContactData(code: number) {
      return this.http.get(
          environment.directoryAPI + 'Contacts/GetContactData?Code=' + code
      );
  }
}
