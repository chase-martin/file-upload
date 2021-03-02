import { createReducer, on } from '@ngrx/store';
import { fileChosen, fileUploaded } from './file-upload.actions';

export function fileUploadReducer(state: any, action: any) {
  const _fileUploadReducer = createReducer(
    {
      currFile: null,
      currFileName: '',
      fileNames: ['']
    },
    on(fileChosen, (state) => {
      return {
        currFileName: action.payload.fileName,
        currFile: action.payload.file,
        fileNames: state.fileNames
      };
    }),
    on(fileUploaded, (state) => {
      // If cuffFileName is empty, debounce.
      if (state.currFileName === '') return state;
      // Add filename to list of filenames
      const fileNames = Array.from(state.fileNames);
      fileNames.push(state.currFileName);

      return {
        currFile: state.currFile,
        currFileName: '',
        fileNames: fileNames
      };
    })
  );

  return _fileUploadReducer;
}