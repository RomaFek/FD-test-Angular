import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {ImageService} from '../image.service';
import {ImageInfo} from '../images-models/images.model';

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
  ) {
  }

  public ngOnInit(): void {
    //здесь при переходе на другую страницу будет автоматическая отписка?
    this.route.paramMap.subscribe((params) => {
      const imageId = params.get('id');
      if (imageId) {
        this.loadImageDetails(imageId);
      }
    });
  }

  public loadImageDetails(imageId: string): void {
    //здесь отписку делать не обязательно, как я понимаю
    this.imageService.getImageDetails(imageId).subscribe((data) => {
      this.imgInfo = data;
    });
  }
}

