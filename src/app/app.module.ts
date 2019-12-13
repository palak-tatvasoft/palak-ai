import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
// material modules
import { MatTableModule } from '@angular/material/table';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatIconModule } from '@angular/material/icon';

// app routing
import { AppRoutingModule } from './app-routing.module';

// app components
import { AppComponent } from './app.component';

// post components
import { PostListComponent } from './component/post-list/post-list.component';
import { PostDialogComponent } from './component/post-dialog/post-dialog.component';

@NgModule({
  declarations: [
    AppComponent,
    PostListComponent,
    PostDialogComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatTableModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatDialogModule,
    MatButtonModule,
    MatPaginatorModule,
    MatIconModule
  ],
  providers: [],
  bootstrap: [
    AppComponent
  ],
  entryComponents: [
    PostDialogComponent
  ]
})
export class AppModule { }
