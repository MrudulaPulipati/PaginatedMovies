import { Component, OnInit } from '@angular/core';
import { MovieService } from '../services/movie-display.service';
import { PagerService } from '../services/page-service';

@Component({
  selector: 'app-movie-display',
  templateUrl: '../templates/default/views/movie-display.component.html',
  styleUrls: ['../templates/default/themes/movie-display.component.css']
})
export class MovieDisplayComponent implements OnInit {

  movieList: any;
  searchValue: string;
  pagedItems: any;
  pager: any;
  filteredList: any;

  constructor(private pagerService: PagerService,
    private movieSerice: MovieService) { }

  ngOnInit() {
    this.getMovieList();
  }

  getMovieList() {
    this.movieSerice.getMovies().subscribe((res: any) => {
      if (res && res.Search && res.Search.length > 0) {
        this.movieList = res.Search;
        this.setPage(1);
      }
    });
  }

  getFilteredList(searchValue: string) {
    this.searchValue = searchValue;
    this.filteredList = this.movieList.filter(x => ((x.Title).toLowerCase()).includes(searchValue.toLowerCase()));
    // pagination with filtered list
    // this.pager = this.pagerService.getPager(this.filteredList.length, 1);
    // this.pagedItems = this.filteredList.slice(this.pager.startIndex, this.pager.endIndex + 1);
    this.setPage(1);
  }


  // /**
  //  * pagination with exact list
  //  *
  //  * @param {number} page
  //  * @returns
  //  * @memberof MovieDisplayComponent
  //  */
  setPage(page: number) {
    // if (this.searchValue) {
    //   return;
    // }
    // getting filtered list or complete list
    const sortList = this.searchValue ? this.filteredList : this.movieList;
    // get pager object from service
    this.pager = this.pagerService.getPager(sortList.length, page);
    // get current page of items
    this.pagedItems = sortList.slice(this.pager.startIndex, this.pager.endIndex + 1);
  }
}
