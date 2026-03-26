import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { CharacterResponse } from '../../features/characters/models/character-response.interface';

@Injectable({
  providedIn: 'root',
})
export class RickmortyService {
  private http = inject(HttpClient);
  private apiUrl = 'https://rickandmortyapi.com/api/character';

  getCharacters(): Observable<CharacterResponse> {
    return this.http.get<CharacterResponse>(this.apiUrl);
  }
}
