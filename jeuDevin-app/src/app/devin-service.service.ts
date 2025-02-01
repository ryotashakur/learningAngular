import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, map } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DevinServiceService {
  private myApiUrl =
    'https://www.random.org/integers/?num=1&min=1&max=101&col=1&base=10&format=plain&rnd=new';

  constructor(private http: HttpClient) {}

  getNombreMystere(): Observable<number> {
    return this.http
      .get(this.myApiUrl, { responseType: 'text' })
      .pipe(map((response) => parseInt(response.trim(), 10)));
  }
}
