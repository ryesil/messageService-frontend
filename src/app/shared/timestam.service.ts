import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TimestamService {

  get timetamp():Date {
    return new Date();
  }
}
