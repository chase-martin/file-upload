import { Injectable } from '@angular/core';
import { HttpClient, HttpEvent, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class FileUploadService {
  private UPLOAD_URL = environment.UPLOAD_URL;

  constructor(private httpClient: HttpClient) {}

  public uploadFile(file: File): Observable<HttpEvent<{}>> {
    const formData = new FormData();
    formData.append('files', file, file.name);
  
    const options = {
      reportProgress: true
    };
  
    const req = new HttpRequest(
      'POST',
      `${this.UPLOAD_URL}/`,
      formData,
      options
    );
    return this.httpClient.request(req);
  }
}
