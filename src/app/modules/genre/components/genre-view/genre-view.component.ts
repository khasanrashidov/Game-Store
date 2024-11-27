import { Component } from '@angular/core';
import { GenreModel } from '../../../../core/models/genre/genre.model';
import { ActivatedRoute, Router } from '@angular/router';
import { GameModel } from '../../../../core/models/game/game.model';

@Component({
  selector: 'app-genre-view',
  templateUrl: './genre-view.component.html',
  styleUrl: './genre-view.component.scss'
})
export class GenreViewComponent {
  genre: GenreModel | null = null;

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

  games: GameModel[] = [
    {
      id: '1',
      key: 'elden-ring',
      name: 'Elden Ring',
      description:
        'An epic action RPG developed by FromSoftware, featuring a vast open world co-created by George R.R. Martin. Players explore the Lands Between, battling fierce enemies and uncovering deep lore.',
      price: 59.99,
      unitInStock: 120,
      discount: 10, // 10% discount
    },
    {
      id: '2',
      key: 'god-of-war-ragnarok',
      name: 'God of War: Ragnarok',
      description:
        'A gripping action-adventure game following Kratos and his son Atreus as they journey through the Nine Realms of Norse mythology. Experience breathtaking visuals, intense combat, and an emotional story about family and destiny.',
      price: 69.99,
      unitInStock: 50,
      discount: 15, // 15% discount
    },
    {
      id: '3',
      key: 'minecraft',
      name: 'Minecraft',
      description:
        'A sandbox game that encourages creativity and exploration. Build, mine, and survive in procedurally generated worlds alone or with friends. It’s a cultural phenomenon suitable for players of all ages.',
      price: 29.99,
      unitInStock: 200,
      discount: 5, // 5% discount
    },
    {
      id: '4',
      key: 'cyberpunk-2077',
      name: 'Cyberpunk 2077',
      description:
        'A futuristic RPG set in the vibrant yet dangerous open-world city of Night City. Immerse yourself in a dystopian environment where choices shape your character’s journey and the world around you.',
      price: 49.99,
      unitInStock: 75,
      discount: 20, // 20% discount
    },
    {
      id: '5',
      key: 'hollow-knight',
      name: 'Hollow Knight',
      description:
        'A beautifully hand-drawn 2D action-adventure game set in the mysterious underground kingdom of Hallownest. Explore interconnected areas, face challenging enemies, and unravel the secrets of a forgotten world.',
      price: 14.99,
      unitInStock: 300,
      discount: 0, // No discount
    },
    {
      id: '6',
      key: 'red-dead-redemption-2',
      name: 'Red Dead Redemption 2',
      description:
        'A critically acclaimed open-world game that tells an epic tale of life in America’s unforgiving heartland. Explore a rich and detailed world while experiencing Arthur Morgan’s gripping story of loyalty and betrayal.',
      price: 39.99,
      unitInStock: 95,
      discount: 25, // 25% discount
    },
    {
      id: '7',
      key: 'the-witcher-3-wild-hunt',
      name: 'The Witcher 3: Wild Hunt',
      description:
        'An award-winning RPG where you step into the shoes of Geralt of Rivia, a monster hunter. Traverse a vast, richly detailed open world filled with compelling characters, quests, and challenges.',
      price: 34.99,
      unitInStock: 150,
      discount: 10, // 10% discount
    },
    {
      id: '8',
      key: 'stardew-valley',
      name: 'Stardew Valley',
      description:
        'A charming farming simulator with RPG elements. Build your dream farm, nurture relationships with townsfolk, and uncover the mysteries of the valley in this beloved indie game.',
      price: 19.99,
      unitInStock: 250,
      discount: 5, // 5% discount
    },
    {
      id: '9',
      key: 'halo-infinite',
      name: 'Halo Infinite',
      description:
        'The latest entry in the iconic sci-fi FPS series. Step into the boots of Master Chief as he battles to save humanity in a dynamic and expansive world, with a mix of classic and modern gameplay.',
      price: 59.99,
      unitInStock: 80,
      discount: 10, // 10% discount
    },
    {
      id: '10',
      key: 'among-us',
      name: 'Among Us',
      description:
        'A wildly popular multiplayer party game of teamwork and betrayal set in space. Work together to complete tasks or sabotage and deceive as an imposter in this social deduction game.',
      price: 4.99,
      unitInStock: 500,
      discount: 0, // No discount
    },
  ];

  constructor(private readonly _route: ActivatedRoute, private readonly _router: Router) { }

  ngOnInit(): void {
    this._route.paramMap.subscribe(params => {
      const genreIdParam = params.get('id');

      if (genreIdParam) {
        this.getGenreById(genreIdParam);
      } else {
        this._router.navigate(['/not-found']);
      }
    });
  }

  getGenreById(id: string): void {
    const foundGenre = this.genres.find(genre => genre.id === id);
    this.genre = foundGenre !== undefined ? foundGenre : null;

    if (!this.genre) {
      this._router.navigate(['/error/not-found']);
    }
  }
}
