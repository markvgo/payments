import { Component, OnInit } from '@angular/core';
import { ServiceComponent } from '../service/service.component';

@Component({
  selector: 'spring-boot',
  template: '<img src="/assets/mysql.png">'
})
export class SpringBootComponent {
}

@Component({
  selector: 'app-payments',
  templateUrl: './payments.component.html',
  styleUrls: ['./payments.component.css'],
})
export class PaymentsComponent implements OnInit {
  name: String;
  constructor() { }

  ngOnInit() {
  }

}
export const components =
  [ SpringBootComponent ];
