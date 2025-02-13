import { Injectable } from '@angular/core';
import { Song } from '../interfaces/song.interface';
import { v4 as uuid } from 'uuid';

@Injectable({
    providedIn: 'root'
})
export class SongService {
    
    public songs: Song[] = [{
        id: uuid(),
        name: 'Yellow',
        artist: 'Coldplay'
    },{
        id: uuid(),
        name: 'Cinammon',
        artist: 'Lana Del Rey'
    },{
        id: uuid(),
        name: 'Somewhere Only We Know',
        artist: 'Keane'
    },{
        id: uuid(),
        name: 'Forever Young',
        artist: 'Alphaville'
    },{
        id: uuid(),
        name: 'On Melancholy Hill',
        artist: 'Gorillaz'
    }];

    addSong(song: Song): void {
        const newSong: Song = {
            id: uuid(),
            ...song
        };
        this.songs.push(newSong);
    }

    deleteSongById(id: string): void {
        this.songs = this.songs.filter(song => song.id !== id);
    }
    
}