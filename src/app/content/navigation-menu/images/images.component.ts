import {Component, OnDestroy, OnInit} from '@angular/core';
import {ImageService} from './image.service';
import {Router} from '@angular/router';
import {ImageInfo} from 'src/app/content/navigation-menu/images/images-models/images.model';
import {Subscription} from "rxjs";

@Component({
  selector: 'app-images',
  templateUrl: './images.component.html',
  styleUrls: ['./images.component.css']
})
export class ImagesComponent implements OnInit, OnDestroy {
  public images: ImageInfo[] = [];
  private subscription!: Subscription;

  constructor(
    private imageService: ImageService,
    private router: Router
  ) {
  }

  public ngOnInit() {
    this.subscription = this.imageService.getRandomImage().subscribe(data => {
      this.images = data;
    });
  }

  public ngOnDestroy() {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }
}
