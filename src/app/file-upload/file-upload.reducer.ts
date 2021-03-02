import { createReducer, on } from '@ngrx/store';
import { fileChosen, fileUploaded, reset } from './file-upload.actions';
 

 
export function fileUploadReducer(state: any, action: any) {
  const _fileUploadReducer = createReducer(
    'test',
    on(fileChosen, (state) => {
      return state + "action.payload";//state.concat([action.payload]);
    }),
    on(fileUploaded, (state) => 'uploaded'),
    on(reset, (state) => 'test')
  );

  return _fileUploadReducer;
}