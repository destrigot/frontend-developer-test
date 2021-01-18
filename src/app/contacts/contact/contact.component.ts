import { Component } from '@angular/core';
import { Contact, ThreeElements } from '../interfaces';
import { ContactService } from './contact.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
  // changeDetection: ChangeDetectionStrategy.OnPush // TODO - Enable this for performance
})
export class ContactComponent {

  /**
   * Feel free to change this if necessary, and update the view accordingly
   */
  public contacts: ThreeElements = [{} as Contact, {} as Contact, {} as Contact];

  constructor(
    private service: ContactService, // TODO - Why "No provider for ContactService" console error?
  ) {
    /**
     * TODO - Currently, the view loads by chunks, when the request is finished...
     *  It would be preferable to deal with only one view-rendering update. For that, we could
     *  zip all three observables using `this.service.getAllRequestsCombinedInOneObservable()`
     *  and directly update the document.
     *
     *  @code - Something like this instead should work.
     *  this.service.getAllRequestsCombinedInOneObservable().subscribe((contacts: ThreeElements) => {
     *    this.contacts = contacts;
     *  });
     */
    this.service.getRandomContact().subscribe((c) => { this.contacts[0] = c});
    this.service.getRandomContact().subscribe((c) => { this.contacts[1] = c});
    this.service.getRandomContact().subscribe((c) => { this.contacts[2] = c});

    // TODO - Instead of using an `*ngIf` in the view, could we move all this in the constructor to a RESOLVER?
  }


}
