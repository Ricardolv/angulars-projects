import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { delay, first, tap } from 'rxjs/operators';
import { Course } from '../model/course';

@Injectable({
  providedIn: 'root'
})
export class CourseService {

  private readonly API = 'api/courses';

  constructor(private httpClient: HttpClient) { }

  list() : Course[] {
    return [
      { _id: '1', name: 'Angular', category: 'front-end' }
    ];
  }

  // list() {
  //   return this.httpClient.get<Course[]>(this.API)
  //   .pipe(
  //     first(),
  //     // delay(5000),
  //     tap(courses => console.log(courses))
  //   );
  // }


}
