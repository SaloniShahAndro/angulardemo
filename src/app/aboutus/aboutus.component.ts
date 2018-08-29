import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-aboutus',
  templateUrl: './aboutus.component.html',
  styleUrls: ['./aboutus.component.css']
})
export class AboutusComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  pictures = [
    {
      id: 1,
      title: 'My logo',
      img: 'https://cdn.worldvectorlogo.com/logos/angular-icon.svg'
    },
    {
      id: 2,
      title: 'My logo 2',
      img: 'https://cdn.worldvectorlogo.com/logos/facebook-icon.svg'
    },
    {
      id: 3,
      title: 'My logo3',
      img: 'https://cdn.worldvectorlogo.com/logos/blue-chip-holidays.svg'
    },
    {
      id: 4,
      title: 'My logo 4',
      img: 'https://cdn.worldvectorlogo.com/logos/raduga-tv.svg'
    }
  ];
}
