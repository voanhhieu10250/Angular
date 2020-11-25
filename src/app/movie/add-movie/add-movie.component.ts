import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-add-movie',
  templateUrl: './add-movie.component.html',
  styleUrls: ['./add-movie.component.scss']
})
export class AddMovieComponent implements OnInit {

  @Output() onAdd = new EventEmitter()

  constructor() { }

  ngOnInit(): void {
  }

  handleAddMovie(name: string, price: string, image: string){
    const id = Math.floor(Math.random() * 100)
    this.onAdd.emit({name, price, image})
  }

}
