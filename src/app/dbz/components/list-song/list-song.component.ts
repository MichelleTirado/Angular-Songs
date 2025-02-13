import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { Song } from '../../interfaces/song.interface';
import { jsPDF } from "jspdf";
import autoTable from 'jspdf-autotable';

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

  exportToPDF(){
    const doc = new jsPDF();
    doc.text("Songify - Playlist", 14, 10);

    const data = this.songList.map((song, index) => [
      index + 1,
      song.name,
      song.artist
    ]);

    autoTable(doc, {
      head: [['#', 'Song', 'Artist']],
      body: data
    });

    doc.save("Playlist.pdf");
  }

  exportToCSV(){
    let csvContent = "data:text/csv;charset=utf-8,";
    csvContent = csvContent + "Song,Artist\n";

    this.songList.forEach(song => {
      const row = `${song.name},${song.artist}\n`;
      csvContent = csvContent + row;
    });

    const encodeUri = encodeURI(csvContent);
    const link = document.createElement("a");
    link.setAttribute("href", encodeUri);
    link.setAttribute("download", "playlist.csv");
    document.body.appendChild(link);
    link.click();
  }
 }
