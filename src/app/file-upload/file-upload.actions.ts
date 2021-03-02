import { createAction, props } from '@ngrx/store';

export const fileUploaded = createAction('[FileUpload Component] FileUploaded');
export const fileChosen = createAction('[FileUpload Component] FileChosen',
        props<{payload: { fileName: string, file: any  }}>());
export const reset = createAction('[FileUpload Component] Reset');