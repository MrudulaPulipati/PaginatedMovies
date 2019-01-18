import { NgModule } from '@angular/core';
import { MyFilterPipe } from '../common/pipes/search-filter.pipe';
import { MovieDisplayComponent } from './components/movie-display.component';
import { MovieService } from './services/movie-display.service';
import { PagerService } from './services/page-service';
import { AppCommonModule } from '../common/app-common.module';

@NgModule({
    imports: [AppCommonModule],
    providers: [MovieService, PagerService, MyFilterPipe],
    declarations: [MovieDisplayComponent],
})
export class MovieDisplayModule { }
