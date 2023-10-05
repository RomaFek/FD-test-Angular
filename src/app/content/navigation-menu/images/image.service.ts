import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {ImageInfo} from './images-models/images.model';

@Injectable({
  providedIn: 'root',
})
export class ImageService {
  private accessKey = 'KQTN3tvSoBIfLG5Vm6bIB7mcuMDfF0jiePwLZP6X2qg';
  private unsplashBaseUrl = 'https://api.unsplash.com';

  constructor(private http: HttpClient) {
  }

  public getRandomImage(): Observable<ImageInfo[]> {
    const headers = new HttpHeaders({
      'Authorization': `Client-ID ${this.accessKey}`,
    });

    const options = {headers: headers};
    const randomNumber = Math.floor(Math.random() * 10) + 1;

    return this.http.get<ImageInfo[]>(`${this.unsplashBaseUrl}/photos?page=${randomNumber}`, options);
  }

  public getImageDetails(imageId: string): Observable<ImageInfo> {

    return this.http.get<ImageInfo>(`https://api.unsplash.com/photos/${imageId}`, {
      headers: {
        Authorization: `Client-ID ${this.accessKey}`,
      },
    });
  }

}
