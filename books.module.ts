import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { BookListComponent } from './book-list/book-list.component';
import { BookPageComponent } from './book-page/book-page.component';
import { BookFormComponent } from './book-form/book-form.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
    declarations: [
        BookListComponent,
        BookPageComponent,
        BookFormComponent
    ],
    imports: [
        CommonModule,
        ReactiveFormsModule,
        SharedModule,
        RouterModule
    ],
    exports: [
        BookPageComponent
    ]
})
export class BooksModule { }
