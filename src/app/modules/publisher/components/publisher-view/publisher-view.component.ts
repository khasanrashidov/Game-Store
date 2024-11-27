import { Component } from '@angular/core';

import { PublisherModel } from '../../../../core/models/publisher/publisher.model';
import { GameModel } from '../../../../core/models/game/game.model';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-publisher-view',
  templateUrl: './publisher-view.component.html',
  styleUrl: './publisher-view.component.scss'
})
export class PublisherViewComponent {
  publisher: PublisherModel | null = null;

  publishers: PublisherModel[] = [
    {
      id: '1',
      companyName: 'Electronic Arts',
      homePage: 'https://www.ea.com',
      description: 'A leading global publisher of games like FIFA, Madden, and Battlefield.',
    },
    {
      id: '2',
      companyName: 'Activision Blizzard',
      homePage: 'https://www.activisionblizzard.com',
      description: 'The publisher behind iconic franchises such as Call of Duty, World of Warcraft, and Overwatch.',
    },
    {
      id: '3',
      companyName: 'Ubisoft',
      homePage: 'https://www.ubisoft.com',
      description: 'Known for blockbuster series like Assassin’s Creed, Far Cry, and Rainbow Six.',
    },
    {
      id: '4',
      companyName: 'Nintendo',
      homePage: 'https://www.nintendo.com',
      description: 'A pioneer in the gaming industry, famous for titles like Mario, Zelda, and Pokémon.',
    },
    {
      id: '5',
      companyName: 'Sony Interactive Entertainment',
      homePage: 'https://www.playstation.com',
      description: 'The publisher of PlayStation exclusives, including God of War, The Last of Us, and Horizon.',
    },
    {
      id: '6',
      companyName: 'Microsoft Studios',
      homePage: 'https://www.xbox.com',
      description: 'The publisher for Xbox platforms, behind Halo, Forza, and Gears of War.',
    },
    {
      id: '7',
      companyName: 'Square Enix',
      homePage: 'https://www.square-enix.com',
      description: 'Renowned for RPG classics such as Final Fantasy, Dragon Quest, and Kingdom Hearts.',
    },
    {
      id: '8',
      companyName: 'Bethesda Softworks',
      homePage: 'https://www.bethesda.net',
      description: 'The publisher of open-world hits like The Elder Scrolls, Fallout, and Starfield.',
    },
    {
      id: '9',
      companyName: 'Capcom',
      homePage: 'https://www.capcom.com',
      description: 'Famous for franchises like Resident Evil, Street Fighter, and Monster Hunter.',
    },
    {
      id: '10',
      companyName: 'Epic Games',
      homePage: 'https://www.epicgames.com',
      description: 'The creator of Fortnite and Unreal Engine, and publisher of other popular titles.',
    },
    {
      id: '11',
      companyName: 'Rockstar Games',
      homePage: 'https://www.rockstargames.com',
      description: 'The studio behind critically acclaimed series like Grand Theft Auto and Red Dead Redemption.',
    },
    {
      id: '12',
      companyName: 'Bandai Namco Entertainment',
      homePage: 'https://www.bandainamcoent.com',
      description: 'Known for games like Tekken, Dark Souls, and the Tales series.',
    },
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
      const publisherIdParam = params.get('id');

      if (publisherIdParam) {
        this.getPublisherById(publisherIdParam);
      } else {
        this._router.navigate(['/not-found']);
      }
    });
  }

  getPublisherById(id: string): void {
    const foundPublisher = this.publishers.find(publisher => publisher.id === id);
    this.publisher = foundPublisher !== undefined ? foundPublisher : null;

    if (!this.publisher) {
      this._router.navigate(['/error/not-found']);
    }
  }
}
