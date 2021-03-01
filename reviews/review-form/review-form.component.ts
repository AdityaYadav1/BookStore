import { formatCurrency } from '@angular/common';
import { Component, OnInit, Input } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Review } from '../../models/review';

@Component({
    selector: 'app-review-form',
    templateUrl: './review-form.component.html',
    styleUrls: ['./review-form.component.css']
})
export class ReviewFormComponent implements OnInit {

    @Input() bookId: number;

    review: Review;

    constructor() { }

    ngOnInit() {
        this.review = new Review('', this.bookId);
    }

    submit(form: NgForm) {
        console.log(this.review);
        form.resetForm();
    }
}
