import { Component, OnInit } from '@angular/core';
import { IonAccordion, IonAccordionGroup, IonItem, IonLabel } from '@ionic/angular/standalone';

@Component({
  selector: 'app-accordion',
  templateUrl: './accordion.component.html',
  styleUrls: ['./accordion.component.scss'],
  imports:[IonAccordion, IonAccordionGroup, IonItem, IonLabel],
})
export class AccordionComponent  implements OnInit {

  constructor() { }

  ngOnInit() {}

}
