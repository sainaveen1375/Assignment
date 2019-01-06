import { Component } from '@angular/core';

const data = {
  "chart": {
    "caption": "Share Rates",
    "yaxisname": "",
    "subcaption": "[Jul-Dec]",
    "setadaptiveymin": "2",
    "numberprefix": "$",
    "showvalues": "0",
    "numvisibleplot": "12",
    "plottooltext": "<b>$dataValue</b> people died because of mosquito bites in $label",
    "theme": "fusion"
  },
  "categories": [
    {
      "category": [
        {
          "label": "16 Jul",
        },
        {
          "label": "1 Aug",
        },
        {
          "label": "23 Aug",
        },
        {
          "label": "10 Sep",
        },
        {
          "label": "8 Oct",
        },
        {
          "label": "28 Oct",
        },
        {
          "label": "5 Nov",
        },
        {
          "label": "3 Dec",
        },
        {
          "label": "31 Dec"
        }
      ]
    }],
    "dataset": [
    {
      "data": [
        {
          "value": "640"
        },
        {
          "value": "670"
        },
        {
          "value": "620"
        },
        {
          "value": "680"
        },
        {
          "value": "630"
        },
        {
          "value": "550"
        },
        {
          
          "value": "695"
        },
        {
          "value": "710"
        },
        {
          
          "value": "740"
        }
        
      ]
    }
  ]
};

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  width = 600;
  height = 400;
  type = 'msspline';
  dataFormat = 'json';
  dataSource=data   ;
  isSharesChatEnable: boolean = false;
  constructor() {

  }


  fileRead(event:any): void {
    console.log(event.target.files[0]);
    this.dataSource = data ;
  }
  graph() {
    console.log(this.dataSource);
    this.isSharesChatEnable = true;
  }
}
