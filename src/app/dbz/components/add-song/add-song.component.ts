import { Component } from '@angular/core';
import { Song } from '../../interfaces/song.interface';

@Component({
  selector: 'add-song',
  templateUrl: './add-song.component.html',
  styleUrl: './add-song.component.css'
})
export class AddSongComponent {

  public song: Song = {
    name: '',
    artist: ''
  };

  emitSong(): void {
    console.log(this.song);
  }
}
