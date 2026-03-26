import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RickmortyService } from '../../../../core/services/rickmorty.service';
import { Character } from '../../models/character.interface';

@Component({
  selector: 'app-characters-page',
  imports: [CommonModule],
  templateUrl: './characters-page.html',
  styleUrl: './characters-page.css',
})
export class CharactersPage implements OnInit {
  private rickmortyService = inject(RickmortyService);

  characters: Character[] = [];

  ngOnInit(): void {
    this.loadCharacters();
  }

  loadCharacters(): void {
    this.rickmortyService.getCharacters().subscribe({
      next: (response) => {
        this.characters = response.results;
      },
      error: (error) => {
        console.error('Error al obtener personajes:', error);
      },
    });
  }
}
