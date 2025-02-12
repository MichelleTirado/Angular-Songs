import { Component } from '@angular/core';
import { Song } from '../interfaces/song.interface';

@Component({
    selector: 'app-dbz-main-page',
    templateUrl: './main-page.component.html'
})

export class MainPageComponent {

    public songs: Song[] = [{
        name: 'Yellow',
        artist: 'Coldplay'
    },{
        name: 'Cinammon',
        artist: 'Lana Del Rey'
    },{
        name: 'Somewhere only we know',
        artist: 'Keane'
    }];
}