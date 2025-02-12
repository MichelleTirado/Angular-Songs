import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
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

  @Output()
  public onDelete: EventEmitter<string> = new EventEmitter();

  onDeleteSong(id?: string): void {
    console.log('On delete song - list song', id);

    if(!id) return;
    this.onDelete.emit(id);
  }
 }
