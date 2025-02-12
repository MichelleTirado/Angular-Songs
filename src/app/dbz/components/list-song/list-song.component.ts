import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { Song } from '../../interfaces/song.interface';

@Component({
  selector: 'song-list',
  templateUrl: './list-song.component.html',
  styleUrl: './list-song.component.css',
})
export class ListSongComponent {

  @Input()
  public songList: Song[] = [{
    name: 'Imagine',
    artist: 'Jhon Lenon'
  }];

 }
