import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  template:` 
  <h1 class=title>{{title}}</h1>
  <h2 id=sub>Characters:</h2>
  <ul class="characters">
  	<li *ngFor="let character of characters" (click)="onSelect(character)">
		{{character.name}}
	</li>
  </ul>
  <div>
	  <label>name: </label>
	  <input [(ngModel)]="character.name" placeholder="name">
  </div>
  <div><label>id: </label>{{hero.id}}</div>
`,
	styles: [`
		.title {
			font-family: Impact, Charcoal, sans-serif;
			font-variant: small-caps;
			color: #607D8B;
		}
		#sub {
			font-family: Impact, Charcoal, sans-serif;
			color: red;
		}
		.selected {
			background-color: #CFD8DC !important;
			color: white;
		}
		.characters {
			margin: 0 0 2em 0;
			list-style-type: none;
			padding: 0;
			with 15em;
		}
		.characters li {
			cursor: pointer;
			position: relative;
			left: 0;
			background-color: #EEE;
			margin: .5em;
			padding: .3em 0;
			height: 1.6em;
			border-radius: 4px;
			font-family: Impact, Charcoal, sans-serif;
			font-size: 2em;
			color: blue;
			font-variant: small-caps;
		}
		.characters li.selected:hover {
			background-color: #BBD8DC !important;
			color: white;
		}
		.characters li:hover {
			color: #607D8B;
			background-color: #DDD;
			left: .1em;
		}
		.heroes .text {
			position: relative;
			top: -3px;
		}
		.heroes .badge {
			display: inline-block;
			font-size: small;
			color: white;
			padding: 0.8em 0.7em 0 0.7em;
			background-color: #607D8B;
			line-height: 1em;
			position: relative;
			left: -1px;
			top: -4px;
			height: 1.8em;
			margin-right: .8em;
			border-radius: 4px 0 0 4px;
		}
	`]
})

export class AppComponent  {
	title = 'Star Wars';
	characters = CHARS;
	selectedCharacter: Character;
	onSelect(character: Character): void {
		this.selectedCharacter = character;
	}
}

export class Character {
	id: number;
	name: string;
}

const CHARS: Character[] = [ 
	{id: 1, name: 'Darth Vader'},
	{id: 2, name: 'Qui-Gon Jinn'},
	{id: 3, name: 'Obi-Wan Kenobi'},
	{id: 4, name: 'Darth Maul'},
	{id: 5, name: 'Darth Sidious'}
];
