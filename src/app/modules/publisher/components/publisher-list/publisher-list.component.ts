import { Component } from '@angular/core';

import { PublisherModel } from '../../../../core/models/publisher/publisher.model';

@Component({
  selector: 'app-publisher-list',
  templateUrl: './publisher-list.component.html',
  styleUrl: './publisher-list.component.scss'
})
export class PublisherListComponent {
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
}
