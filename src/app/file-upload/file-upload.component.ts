import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { FileUploadService } from  './file-upload.service';
import { Observable, of } from 'rxjs';
import { fileChosen, fileUploaded, reset } from './file-upload.actions';

@Component({
  selector: 'app-file-upload',
  templateUrl: './file-upload.component.html',
  styleUrls: ['./file-upload.component.scss']
})
export class FileUploadComponent implements OnInit {
  fileNames: Observable<string>;
  fileNamesArray: string[] = [];

  constructor(private fileUploadService: FileUploadService, private store: Store<{fileNames: string}>) {
    this.fileNames = store.select('fileNames');
  }

  ngOnInit(): void {
  }

  fileUploadedClick() {
    this.store.dispatch(fileUploaded());
  }
     
  onFileChange(target: any) {
    const files = target.files;
    if(files.length != 0) {
      console.log("Selected File Name is: ", files[0].name);
      //this.store.dispatch(fileChosen({payload: files[0].name}));
      this.store.dispatch(fileChosen());
    }
    
  }

  reset() {
    this.store.dispatch(reset());
  }

  onSubmit() {
    // this.fileUploadService.upload(formData, this.userId).subscribe(
    //   (res: any) => this.uploadResponse = res,
    //   (err: any) => this.error = err
    // );
  }

}
