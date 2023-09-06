import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TabsService {

  constructor() { }

  getData() {
    return [
      {
        header: 'Header I',
        content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud',
        disabled: false,
        icon: 'pi pi-check',
        posIcon: 'left',
        closable: false
      },
      {
        header: 'Header II',
        content: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi',
        disabled: false,
        icon: 'pi pi-times',
        posIcon: 'right',
        closable: false
      },
      {
        header: 'Header III',
        content: 'At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi si',
        disabled: false,
        icon: 'pi pi-search',
        posIcon: 'right',
        closable: false
      },
      {
        header: 'Header IV',
        content: '',
        disabled: true,
        icon: 'pi pi-user',
        posIcon: 'left',
        closable: false
      }
    ]
  }

  getDataClosable() {
    return [
      {
        header: 'Header I',
        content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud',
        disabled: false,
        icon: '',
        posIcon: 'left',
        closable: false
      },
      {
        header: 'Header II',
        content: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi',
        disabled: false,
        icon: '',
        posIcon: 'right',
        closable: true
      },
      {
        header: 'Header III',
        content: 'At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi si',
        disabled: false,
        icon: '',
        posIcon: 'right',
        closable: true
      },
      {
        header: 'Header IV',
        content: '',
        disabled: true,
        icon: '',
        posIcon: 'left',
        closable: true
      }
    ]
  }

}
