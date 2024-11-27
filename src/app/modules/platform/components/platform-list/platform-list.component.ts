import { Component } from '@angular/core';

import { PlatformModel } from '../../../../core/models/platform/platform.model';

@Component({
  selector: 'app-platform-list',
  templateUrl: './platform-list.component.html',
  styleUrl: './platform-list.component.scss'
})
export class PlatformListComponent {
  platforms: PlatformModel[] = [
    { id: '1', type: 'PC' },
    { id: '2', type: 'PlayStation 5' },
    { id: '3', type: 'PlayStation 4' },
    { id: '4', type: 'Xbox Series X|S' },
    { id: '5', type: 'Xbox One' },
    { id: '6', type: 'Nintendo Switch' },
    { id: '7', type: 'Mobile (iOS)' },
    { id: '8', type: 'Mobile (Android)' },
    { id: '9', type: 'Mac' },
    { id: '10', type: 'Linux' },
    { id: '11', type: 'VR (Oculus)' },
    { id: '12', type: 'VR (HTC Vive)' },
    { id: '13', type: 'Web Browser' },
  ];
}
