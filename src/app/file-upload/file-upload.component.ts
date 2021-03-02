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
  fileNames$: Observable<Array<string|null>>;
  currFile$: Observable<File>

  constructor(
    private fileUploadService: FileUploadService, 
    private store: Store<{currFileName: string, currFile: any, fileNames: string[] }>
  ) {
    this.fileNames$ = store.select('fileNames');
    this.currFile$ = store.select('currFile');
  }

  ngOnInit(): void {
  }

  // When user uploads file, add file name to list of file names.
  fileUploadedClick() {
    this.store.dispatch(fileUploaded());
    // Once user clicks upload File, send file to upload service.
    // this.fileUploadService.uploadFile(this.currFile$).subscribe(
    //   (res: any) => {
    //     console.log('response', res);
    //   },
    // );
  }
     
  // When user chooses a file to upload, save in state.
  onFileChange(target: any) {
    const files = target.files;
    if(files.length != 0) {
      const fileName = files[0].name;
      const file = files[0];
      this.store.dispatch(fileChosen({payload: {fileName, file}}));
    }
  }
}
