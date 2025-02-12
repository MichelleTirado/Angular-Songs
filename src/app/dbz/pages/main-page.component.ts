import { Component } from '@angular/core';
import { Song } from '../interfaces/song.interface';
import { SongService } from '../services/song.service';

@Component({
    selector: 'app-dbz-main-page',
    templateUrl: './main-page.component.html',
    styleUrl: './main-page.component.css'
})

export class MainPageComponent {
    constructor(
        private songService: SongService
    ) {}

    get songs(): Song[] {
        return [...this.songService.songs];
    }

    onDeleteSong(id: string): void {
        this.songService.deleteSongById(id);
    }

    onNewSong(song: Song): void {
        this.songService.addSong(song);
    }
}