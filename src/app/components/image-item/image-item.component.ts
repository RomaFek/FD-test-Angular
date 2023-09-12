import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ImageService } from '../../image.service'; 
import { ImageInfo } from '../../models/images.model';

@Component({
  selector: 'app-image-item',
  templateUrl: './image-item.component.html',
  styleUrls: ['./image-item.component.css'],
})
export class ImageItemComponent implements OnInit {
  imgInfo: ImageInfo | undefined;

  constructor(
    private route: ActivatedRoute,
    private imageService: ImageService
  ) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      const imageId = params.get('id');
      if (imageId) {
        this.loadImageDetails(imageId);
      }
    });
  }

  loadImageDetails(imageId: string): void {
    this.imageService.getImageDetails(imageId).subscribe((data) => {
      this.imgInfo = data;
    });
  }
}

