import { Component, OnInit, OnDestroy } from '@angular/core';
import { interval, Subscription } from 'rxjs';

// components
import { PostDialogComponent } from '../post-dialog/post-dialog.component';
// services
import { PostService } from '../../service/post.service';
// material dependencies
import { MatTableDataSource } from '@angular/material';
import { MatDialog } from '@angular/material';

// model
import { HitsEntity } from './../../model/post';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.scss']
})
export class PostListComponent implements OnInit, OnDestroy {
  displayedColumns: string[] = ['title', 'url', 'created_at', 'author'];
  dataSource = new MatTableDataSource();
  subscription: Subscription;

  constructor(private postService: PostService, public dialog: MatDialog) { }

  ngOnInit() {
    const source = interval(10000);
    this.getPostList();
    this.subscription = source.subscribe(val => this.getPostList());
  }

  openDialog = (postData: HitsEntity): void => {
    const dialogRef = this.dialog.open(PostDialogComponent, {
      width: '550px',
      data: postData
    });
  }

  getRecord = (row: HitsEntity) => {
    this.openDialog(row);
  }

  getPostList = () => {
    this.postService.getPostData().subscribe((res: HitsEntity[]) => {
      if (res && 'hits' in res) {
        const data = res['hits'];
        this.dataSource = new MatTableDataSource(data);
      }
    });
  }

  applyFilter = (filterValue: string) => {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
