import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { productstbl } from '../models/manageproduct.model';

@Injectable({
  providedIn: 'root'
})
export class ManageairlineService {
  baseUrl='https://localhost:44346/api/Product';

  constructor(private http:HttpClient) { }
  //get all airlinedata
  showData():Observable<productstbl[]>
  {
    return this.http.get<productstbl[]>(this.baseUrl);
  }
  addAirline(addData:productstbl): Observable<productstbl> 
  {
    return this.http.post<productstbl>(this.baseUrl, addData);
    
  }

}