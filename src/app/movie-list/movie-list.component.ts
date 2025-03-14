import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BollytrixService } from '../services/bollytrix.service';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.css']
})
export class MovieListComponent implements OnInit {
  movies: any[] = [];
  movieToGuess: string = '';
  movieYear: string = '';
  movieCharacters: string[] = [];
  userGuess: string[] = [];
  queryLetter: string = '';
  triesLeft: number = 9;
  hintUsed: boolean = false;
  gameOver: boolean = false;
  gameMessage: string = '';
  warningMessage: string = '';
  guessedLetters: Set<string> = new Set();
  incorrectGuesses: string[] = [];

  constructor(private bollytrixSvc: BollytrixService, private router: Router) {}

  ngOnInit(): void {
    this.initializeGame();
  }

  initializeGame(): void {
    this.hintUsed = false;
    this.triesLeft = 9;
    this.gameOver = false;
    this.gameMessage = '';
    this.warningMessage = '';
    this.guessedLetters.clear();
    this.incorrectGuesses = [];

    // Select a random movie
    this.movies = this.bollytrixSvc.movies;
    const index = Math.floor(Math.random() * this.movies.length);
    this.movieToGuess = this.movies[index].Title.toUpperCase();
    this.movieYear = this.movies[index].Year;

    // Prepare movie characters array
    this.movieCharacters = this.movieToGuess.split('').map(char =>
      'AEIOU '.includes(char) ? char : '_'
    );

    // Create user guess array
    this.userGuess = [...this.movieCharacters];
  }

  checkLetter(): void {
    if (!this.queryLetter) return;

    const letter = this.queryLetter.toUpperCase();
    this.queryLetter = ''; // Clear input after checking

    if ('AEIOU'.includes(letter)) {
      this.warningMessage = '❌ Vowels are already revealed. Please enter a consonant.';
      return;
    }

    if (this.guessedLetters.has(letter)) {
      this.warningMessage = '⚠️ You already guessed this letter. Try a different one.';
      return;
    }

    this.guessedLetters.add(letter);
    this.warningMessage = '';

    if (this.movieToGuess.includes(letter)) {
      // Correct guess, fill in the letters
      this.movieToGuess.split('').forEach((char, index) => {
        if (char === letter) {
          this.userGuess[index] = letter;
        }
      });

      // Check if the game is won
      if (!this.userGuess.includes('_')) {
        this.gameOver = true;
        this.gameMessage = '🎉 Congratulations! You guessed the movie!';
      }
    } else {
      // Wrong guess, decrease tries and mark as incorrect
      this.triesLeft--;
      this.incorrectGuesses.push(letter);

      if (this.triesLeft === 0) {
        this.gameOver = true;
        this.gameMessage = `😢 You lost! The movie was: "${this.movieToGuess}".`;
      }
    }
  }

  useHint(): void {
    if (!this.hintUsed) {
      this.hintUsed = true;
      this.triesLeft--;

      if (this.triesLeft === 0) {
        this.gameOver = true;
        this.gameMessage = `😢 You lost! The movie was: "${this.movieToGuess}".`;
      }
    }
  }

  resetGame(): void {
    this.initializeGame();
  }

  goHome(): void {
    this.router.navigate(['/']);
  }
}
