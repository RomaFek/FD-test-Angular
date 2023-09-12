import { Component, OnInit } from '@angular/core';
import { ImageService } from '../../image.service';
import { ActivatedRoute, Router } from '@angular/router';
import { ImageInfo } from 'src/app/models/images.model';

@Component({
  selector: 'app-images-list',
  templateUrl: './images-list.component.html',
  styleUrls: ['./images-list.component.css']
})
export class ImagesListComponent implements OnInit {
  images: ImageInfo[] = [];

  constructor(
    private imageService: ImageService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit() {
    this.imageService.getRandomImage().subscribe(data => {
      this.images = data;
    });
  }

  onClickImage(imageId: string) {
    this.router.navigate(['images', imageId]);
  }
}
