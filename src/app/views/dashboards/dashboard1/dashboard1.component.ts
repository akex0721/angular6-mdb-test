import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard1',
  templateUrl: './dashboard1.component.html',
  styleUrls: ['./dashboard1.component.scss']
})
export class Dashboard1Component implements OnInit {

  public map: any = { lat: 51.678418, lng: 7.809007 };
  public chart1Type:string = 'bar';
  public chart2Type:string = 'pie';
  public chart3Type:string = 'line';
  public chart4Type:string = 'radar';
  public chart5Type:string = 'doughnut';


  public chartType = 'line';

  public chartDatasets: Array<any> = [
    {data: [50, 40, 60, 51, 56, 55, 40], label: '#1'},
    {data: [28, 80, 40, 69, 36, 37, 110], label: '#2'},
    {data: [38, 58, 30, 90, 45, 65, 30], label: '#3'}
  ];

  public chartLabels: Array<any> = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'];

  public chartColors:Array<any> = [

  ];

  public dateOptionsSelect: any[];
  public bulkOptionsSelect: any[];
  public showOnlyOptionsSelect: any[];
  public filterOptionsSelect: any[];

  public chartOptions: any = {
    responsive: true,
    legend: {
      labels: {
        fontColor: '#5b5f62',
      }
    },
    scales: {
      yAxes: [{
        ticks: {
          fontColor: '#5b5f62',
        }
      }],
      xAxes: [{
        ticks: {
          fontColor: '#5b5f62',
        }
      }]
    }
  };

  public jobs: Array<any> = [
    {
      name: 'Lorem ipsum dolor 1',
      jobScore: 100,
      provider: 'ABC Advertising GmbH',
      providerScore: 60,
      staff: [
        {
          name: 'Jhon',
          avatar: 'https://mdbootstrap.com/img/Photos/Avatars/avatar-3.jpg'
        },
        {
          name: 'Jane',
          avatar: 'https://mdbootstrap.com/img/Photos/Avatars/avatar-7.jpg'
        }
      ],
      lastModified: Date.now(),
      tags: [
        'Complete'
      ]
    },
    {
      name: 'Lorem ipsum dolor 2',
      jobScore: 80,
      providerScore: 100,
      provider: 'ABC Advertising GmbH',
      staff: [
        {
          name: 'Jhon',
          avatar: 'https://mdbootstrap.com/img/Photos/Avatars/avatar-1.jpg'
        },
        {
          name: 'Jane',
          avatar: 'https://mdbootstrap.com/img/Photos/Avatars/avatar-2.jpg'
        }
      ],
      lastModified: Date.now(),
      tags: [
        'Review', 'Forward'
      ]
    },
    {
      name: 'Lorem ipsum dolor 3',
      jobScore: 60,
      providerScore: 10,
      provider: 'ABC Advertising GmbH',
      staff: [
        {
          name: 'Jhon',
          avatar: 'https://mdbootstrap.com/img/Photos/Avatars/avatar-3.jpg'
        },
        {
          name: 'Jane',
          avatar: 'https://mdbootstrap.com/img/Photos/Avatars/avatar-4.jpg'
        }
      ],
      lastModified: Date.now(),
      tags: [
        'Launch RHx', 'Forward'
      ]
    },
    {
      name: 'Lorem ipsum dolor 4',
      jobScore: 90,
      providerScore: 40,
      provider: 'ABC Advertising GmbH',
      staff: [
        {
          name: 'Jhon',
          avatar: 'https://mdbootstrap.com/img/Photos/Avatars/avatar-5.jpg'
        },
        {
          name: 'Jane',
          avatar: 'https://mdbootstrap.com/img/Photos/Avatars/avatar-6.jpg'
        },
        {
          name: 'Jhon',
          avatar: 'https://mdbootstrap.com/img/Photos/Avatars/avatar-7.jpg'
        },
        {
          name: 'Jane',
          avatar: 'https://mdbootstrap.com/img/Photos/Avatars/avatar-8.jpg'
        },
        {
          name: 'Jhon',
          avatar: 'https://mdbootstrap.com/img/Photos/Avatars/avatar-9.jpg'
        }
      ],
      lastModified: Date.now(),
      tags: [
        'Setprovider', 'Forward'
      ]
    },
    {
      name: 'Lorem ipsum dolor 5',
      jobScore: 27,
      providerScore: 72,
      provider: 'ABC Advertising GmbH',
      staff: [
        {
          name: 'Jhon',
          avatar: 'https://mdbootstrap.com/img/Photos/Avatars/avatar-11.jpg'
        },
        {
          name: 'Jane',
          avatar: 'https://mdbootstrap.com/img/Photos/Avatars/avatar-12.jpg'
        }
      ],
      lastModified: Date.now(),
      tags: [
        'Evaluate'
      ]
    }
  ]

  public objDate = Date.now();

  constructor() {

  }

  ngOnInit() {
  }

  /**
   * getColor
   */
  public getColor(percent) {
    if (percent > 70 && percent <= 100) return 'green';
    else if (percent > 50 && percent <= 70) return 'yellow';
    else if (percent >= 1 && percent <= 50) return 'red';
    else return 'grey'
  }
}
