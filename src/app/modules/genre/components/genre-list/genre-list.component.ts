import { Component } from '@angular/core';

import { GenreModel } from '../../../../core/models/genre/genre.model';

@Component({
  selector: 'app-genre-list',
  templateUrl: './genre-list.component.html',
  styleUrl: './genre-list.component.scss'
})
export class GenreListComponent {
  genres: GenreModel[] = [
    { id: '1', name: 'Action' },
    { id: '2', name: 'Adventure' },
    { id: '3', name: 'Role-Playing', parentGenreId: '2' }, // Subgenre of Adventure
    { id: '4', name: 'Shooter', parentGenreId: '1' }, // Subgenre of Action
    { id: '5', name: 'Platformer', parentGenreId: '1' }, // Subgenre of Action
    { id: '6', name: 'Puzzle' },
    { id: '7', name: 'Sports' },
    { id: '8', name: 'Racing', parentGenreId: '7' }, // Subgenre of Sports
    { id: '9', name: 'Fighting', parentGenreId: '1' }, // Subgenre of Action
    { id: '10', name: 'Simulation' },
    { id: '11', name: 'Strategy' },
    { id: '12', name: 'Real-Time Strategy', parentGenreId: '11' }, // Subgenre of Strategy
    { id: '13', name: 'Turn-Based Strategy', parentGenreId: '11' }, // Subgenre of Strategy
    { id: '14', name: 'Casual' },
    { id: '15', name: 'MMORPG', parentGenreId: '3' }, // Subgenre of Role-Playing
    { id: '16', name: 'Horror', parentGenreId: '2' }, // Subgenre of Adventure
    { id: '17', name: 'Open World', parentGenreId: '2' }, // Subgenre of Adventure
    { id: '18', name: 'Sandbox', parentGenreId: '10' }, // Subgenre of Simulation
  ];
}
