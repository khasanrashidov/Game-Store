import { Component } from '@angular/core';
import { GameModel } from '../../core/models/game/game.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {
  title = 'Games';
  games: GameModel[] = [
    {
      id: '1',
      key: 'elden-ring',
      name: 'Elden Ring',
      price: 59.99,
      unitInStock: 120,
      discount: 0.1, // 10% discount
    },
    {
      id: '2',
      key: 'god-of-war-ragnarok',
      name: 'God of War: Ragnarok',
      description:
        'A gripping action-adventure following Kratos and Atreus in Norse mythology.',
      price: 69.99,
      unitInStock: 50,
      discount: 0.15, // 15% discount
    },
    {
      id: '3',
      key: 'minecraft',
      name: 'Minecraft',
      description:
        'A sandbox game that lets you build and explore endless worlds.',
      price: 29.99,
      unitInStock: 200,
      discount: 0.05, // 5% discount
    },
    {
      id: '4',
      key: 'cyberpunk-2077',
      name: 'Cyberpunk 2077',
      description:
        'A futuristic RPG set in a dystopian open world with endless possibilities.',
      price: 49.99,
      unitInStock: 75,
      discount: 0.2, // 20% discount
    },
    {
      id: '5',
      key: 'hollow-knight',
      name: 'Hollow Knight',
      description:
        'A beautiful and challenging 2D action-adventure in a mysterious underground kingdom.',
      price: 14.99,
      unitInStock: 300,
      discount: 0, // No discount
    },
    {
      id: '6',
      key: 'red-dead-redemption-2',
      name: 'Red Dead Redemption 2',
      description: 'An epic tale of life in America’s unforgiving heartland.',
      price: 39.99,
      unitInStock: 95,
      discount: 0.25, // 25% discount
    },
    {
      id: '7',
      key: 'the-witcher-3-wild-hunt',
      name: 'The Witcher 3: Wild Hunt',
      description:
        'An open-world RPG where you play as Geralt of Rivia, a monster hunter.',
      price: 34.99,
      unitInStock: 150,
      discount: 0.1, // 10% discount
    },
    {
      id: '8',
      key: 'stardew-valley',
      name: 'Stardew Valley',
      description: 'A charming farming simulator with RPG elements.',
      price: 19.99,
      unitInStock: 250,
      discount: 0.05, // 5% discount
    },
    {
      id: '9',
      key: 'halo-infinite',
      name: 'Halo Infinite',
      description: 'The latest entry in the iconic sci-fi FPS series.',
      price: 59.99,
      unitInStock: 80,
      discount: 0.1, // 10% discount
    },
    {
      id: '10',
      key: 'among-us',
      name: 'Among Us',
      description:
        'A multiplayer party game of teamwork and betrayal in space.',
      price: 4.99,
      unitInStock: 500,
      discount: 0, // No discount
    },
  ];
}
