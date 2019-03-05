import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css']
})
export class CardsComponent implements OnInit {
  cards = [
    [{
      'ty': 'listcard',
      'header': 'Axis Prime Benefits',
      'list': [{
        'label': 'Start off with low opening deposit',
        'linkAction': ''
      },
      {
        'label': 'Get free cheque book and demand draft',
        'linkAction': ''
      },
      {
        'label': 'Bank at your convenience',
        'linkAction': ''
      }
      ],
      'links': {
        'label': 'Know More',
        'linkAction': ''
      },
      'image': {},
      'linkInfo': [],
      'buttonListTile': []
    }],
    [
      {
        'ty': 'imagecard',
        'list': [],
        'image': {
          'imgPath': 'assets/images',
          'imgName': 'hand shake.png'
        },
        'header': 'Reach your relationship Manager',
        'linkInfo': [{
          'linkLabel': 'Set as recurring',
          'linkAction': ''
        }],
        'buttonListTile': [{
          'buttonName': 'KNOW YOUR RM',
          'buttonId': 'Edit',
          'buttonStyle': 'primary',
          'buttonAction': '',
          'buttonType': 'C',
          'buttonActive': ''
        }]
      },
      {
        'ty': 'detailscard',
        'intial': 'true',
        'list': [{
          'text1': 'Name',
          'text2': 'rama'
        },
        {
          'text1': 'Email ID',
          'text2': 'rama@gamil.com'
        },
        {
          'text1': 'Contact No',
          'text2': '999232676'
        }
        ],
        'image': {
          'imgPath': 'assets/images',
          'imgName': 'hand shake.png'
        },
        'header': 'Reach your relationship Manager',
        'linkInfo': [{
          'linkLabel': 'Set as recurring',
          'linkAction': ''
        }],
        'buttonListTile': [{
          'buttonName': 'KNOW YOUR RM',
          'buttonId': 'Edit',
          'buttonStyle': 'primary',
          'buttonAction': '',
          'buttonType': 'C',
          'buttonActive': ''
        }]
      }
    ],
    [
      {
        'ty': 'imagecard',
        'intial': 'true',
        'image': {
          'imgPath': 'assets/images',
          'imgName': 'hand shake.png'
        },
        'header': 'Reach your relationship Manager',
        'linkInfo': [{
          'linkLabel': 'Set as recurring',
          'linkAction': ''
        }],
        'buttonListTile': [{
          'buttonName': 'KNOW YOUR RM',
          'buttonId': 'Edit',
          'buttonStyle': 'primary',
          'buttonAction': '',
          'buttonType': 'C',
          'buttonActive': ''
        }]
      },
      {
        'ty': 'infocard',
        'intial': 'false',
        'image': {
          'imgPath': 'assets/images',
          'imgName': 'hand shake.png'
        },
        'header': 'Reach your relationship Manager',
        'linkInfo': [{
          'linkLabel': 'Set as recurring',
          'linkAction': ''
        }],
        'buttonListTile': [{
          'buttonName': 'KNOW YOUR RM',
          'buttonId': 'Edit',
          'buttonStyle': 'primary',
          'buttonAction': '',
          'buttonType': 'C',
          'buttonActive': ''
        }]
      }
    ]];
  constructor() { }

  ngOnInit() {
  }

}
