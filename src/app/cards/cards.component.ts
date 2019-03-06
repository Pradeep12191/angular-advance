import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css']
})
export class CardsComponent implements OnInit {
  cards = [
    {
      'front_face_card': {
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
      'back_face_card': {
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
        'header': 'Know your RM',
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
    },
    {
      'front_face_card': {
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
      'back_face_card': {
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
    }
  ];
  constructor() { }

  ngOnInit() {
  }

}
