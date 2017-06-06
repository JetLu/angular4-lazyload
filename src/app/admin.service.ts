import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';

import { User } from './model/user'

@Injectable()
export class AdminService {
  private strUrl = 'api/memoryContextService';
  constructor(private http: Http) { }

  getUsers(): Promise<User[]> {
    return this.http.get(this.strUrl)
      .toPromise()
      .then(response => response.json().data as User[])
      .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    console.log('An error occurred', error);
    return Promise.reject(error.message || error);
  }

}
