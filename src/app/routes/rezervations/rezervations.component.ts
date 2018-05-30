import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-rezervations',
  templateUrl: './rezervations.component.html',
  styleUrls: ['./rezervations.component.scss']
})
export class RezervationsComponent implements OnInit {

  rezervationTypes = {
    placeholder: 'Rezervasyon Tipi',
    vals: [
      {value: 'all', viewValue: 'Hepsi'},
      {value: 'r0', viewValue: 'İlk Görüşme Randevusu'},
      {value: 'r1', viewValue: 'İlk Görüşme Sonrası'},
      {value: 'r2', viewValue: 'Bireysel Antrenmanlar'},
      {value: 'r3', viewValue: 'Fizyoterapi & Masaj'},
    ]
  };

  constructor() { }

  ngOnInit() {
  }

}
