import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { switchMap, tap } from 'rxjs/operators';

import { PhotoComment } from '../../photo/photo-comment';
import { PhotoService } from './../../photo/photo.service';

@Component({
  selector: 'ap-photo-comments',
  templateUrl: './photo-comments.component.html',
  styleUrls: ['./photo-comments.component.css']
})
export class PhotoCommentsComponent implements OnInit {

  @Input() photoId: number;
  commentForm: FormGroup;
  comments$: Observable<PhotoComment[]>;

  constructor(
    private photoService: PhotoService,
    private formbuilder: FormBuilder
  ) { }

  ngOnInit() {
    this.comments$ = this.photoService.getComments(this.photoId);
    this.formMaker();
  }

  formMaker() {
    this.commentForm = this.formbuilder.group({
      comment: ['', Validators.maxLength(300)]
    })
  }

  save() {
    this.comments$ = this.photoService
      .addComment(this.photoId, this.commentForm.get('comment').value as string)
      .pipe(switchMap(() => this.photoService.getComments(this.photoId)))
      .pipe(tap(() => {
        this.commentForm.reset();
      }))
  }

}
