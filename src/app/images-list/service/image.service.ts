import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {ImageInfo} from '../models/images.model';

@Injectable({
  providedIn: 'root',
})
export class ImageService {

  constructor(
    private http: HttpClient,
  ) {
  }

  public getRandomImage(): Observable<ImageInfo[]> {
    const randomNumber = Math.floor(Math.random() * 10) + 1;
    return this.http.get<ImageInfo[]>(`/photos?page=${randomNumber}`);
  }

  public getImageDetails(imageId: string): Observable<ImageInfo> {
    return this.http.get<ImageInfo>(`/photos/${imageId}`);
  }
}
