import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BookPageComponent } from './books/book-page/book-page.component';
import { AboutPageComponent } from './about-page/about-page.component';
import { ReviewPageComponent } from './reviews/review-page/review-page.component';

const routes: Routes = [{
    path: '',
    component: BookPageComponent
}, {
    path: 'about',
    component: AboutPageComponent
}, {
    path: 'id',
    component: ReviewPageComponent
}, {
    path: 'reviews',
    loadChildren: () => import('./reviews/reviews.module')
        .then(mod => mod.ReviewsModule)

}];



@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
