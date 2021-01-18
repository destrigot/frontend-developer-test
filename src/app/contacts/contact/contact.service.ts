import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, zip } from 'rxjs';
import { Contact, ThreeElements } from '../interfaces';
import { debounceTime, delay, map } from 'rxjs/operators';

/**
 * NOTHING TO CHANGE IN THIS FILE
 */
@Injectable()
export class ContactService {

  constructor (
    private http: HttpClient
  ) {
  }

  /**
   * DO NOT CHANGE THIS FUNCTION!!!
   */
  public getAllRequestsCombinedInOneObservable (): Observable<ThreeElements> {
    const numberOfParallelRequests = 3;
    const simulatingManyParallelRequests: Observable<Contact>[] = [];

    for (let i = 0; i < numberOfParallelRequests; ++i) {
      simulatingManyParallelRequests.push(this.getRandomContact());
    }
    return zip(...simulatingManyParallelRequests) as Observable<ThreeElements>;
  }

  /**
   * DO NOT CHANGE THIS FUNCTION!!!
   */
  public getRandomContact(): Observable<Contact> {
    return this
      .http
      // DO NOT CHANGE THIS
      .get<{ results: [Contact] }>('https://cors-anywhere.herokuapp.com/https://randomuser.me/api/?results=1')
      .pipe(
        delay(2000),
        map((result: { results: [any] }) => {
          const _c = result.results[0];
          return {
            firstName: _c.name.first,
            lastName: _c.name.last,
            gender: _c.gender,
            email: _c.email,
            number: _c.cell,
            picture: _c.picture.large,
            id: _c.id.value,
            born: 1980 + _c.registered.age
          } as Contact;
        }),
      );
  }
}
