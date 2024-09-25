import { Component, OnInit } from '@angular/core';
import { MusicasService, Musica } from '../musicas.service';

@Component({
  selector: 'app-tabela-musicas',
  templateUrl: './tabela-musicas.component.html',
  styleUrls: ['./tabela-musicas.component.css']
})
export class TabelaMusicasComponent implements OnInit {
  musicas: Musica[] = [];

  constructor(private musicasService: MusicasService) { }

  ngOnInit(): void {
    this.loadMusicas();
  }

  loadMusicas(): void {
    this.musicasService.getMusicas().subscribe(data => {
      this.musicas = data;
    });
  }

  removeMusica(id: number): void {
    this.musicasService.deleteMusica(id).subscribe(() => {
      this.musicas = this.musicas.filter(musica => musica.id !== id);
    });
  }
}
