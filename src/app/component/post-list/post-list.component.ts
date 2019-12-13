import { Component, OnInit } from '@angular/core';
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
export class PostListComponent implements OnInit {
  displayedColumns: string[] = ['title', 'url', 'created_at', 'author'];
  dataSource = new MatTableDataSource();
  constructor(private postService: PostService, public dialog: MatDialog) { }

  ngOnInit() {
    this.getPostList();
  }

  openDialog(postData: HitsEntity): void {
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


}
