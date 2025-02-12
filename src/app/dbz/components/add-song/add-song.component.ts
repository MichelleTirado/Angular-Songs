import { Component, EventEmitter, Output } from '@angular/core';
import { Song } from '../../interfaces/song.interface';

@Component({
  selector: 'add-song',
  templateUrl: './add-song.component.html',
  styleUrl: './add-song.component.css'
})
export class AddSongComponent {

  @Output()
  public onNewSong: EventEmitter<Song> = new EventEmitter();

  public song: Song = {
    name: '',
    artist: ''
  };

  emitSong(): void {

    if(this.song.name.length === 0) return;

    this.onNewSong.emit(this.song);

    this.song = {
      name: '',
      artist: ''
    };
    
  }
}
