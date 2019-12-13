import { AfterViewInit, Component, OnInit, OnDestroy, ViewChild } from '@angular/core';
import { interval, Subscription } from 'rxjs';

// components
import { PostDialogComponent } from '../post-dialog/post-dialog.component';
// services
import { PostService } from '../../service/post.service';
// material dependencies
import { MatTableDataSource, MatPaginator } from '@angular/material';
import { MatDialog } from '@angular/material';

// model
import { HitsEntity } from './../../model/post';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.scss']
})
export class PostListComponent implements OnInit, OnDestroy, AfterViewInit {
  displayedColumns: string[] = ['title', 'url', 'created_at', 'author'];
  dataSource = new MatTableDataSource();
  subscription: Subscription;
  totalPostData: number;
  @ViewChild(MatPaginator) paginator: MatPaginator;


  constructor(private postService: PostService, public dialog: MatDialog) { }

  ngOnInit() {
    const source = interval(10000);
    this.getPostList();
    this.subscription = source.subscribe(val => this.getPostList());
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
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
        this.dataSource.data = data;
        if (this.displayedColumns.length === 0) {
          this.displayedColumns = Object.keys(data[0]);
        }
      }
    });
  }

  applyFilter = (filterValue: string) => {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  clearFilters() {
    this.dataSource.filter = '';
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
