import { HitsEntity } from './../../model/post';
import { Component, OnInit } from '@angular/core';
import { PostService } from '../../service/post.service';
import {MatTableDataSource} from '@angular/material';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.scss']
})
export class PostListComponent implements OnInit {
  displayedColumns: string[] = ['title', 'url', 'created_at', 'author'];
  dataSource = new MatTableDataSource();
  constructor(private postService: PostService) { }

  ngOnInit() {
    this.getPostList();
  }

  getPostList = () => {
    this.postService.getPostData().subscribe((res: HitsEntity[]) => {
      if (res && 'hits' in res) {
        const data = res['hits'];
        this.dataSource = new MatTableDataSource(data);
      }
    });
  }


}
