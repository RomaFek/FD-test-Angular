import {Component, Input, OnInit} from '@angular/core';
import {ImageService} from '../service/image.service';
import {ImageInfo} from 'src/app/images-list/models/images.model';
import {takeUntil} from "rxjs";
import {DestroyService} from "../../shared/destroy.service";

@Component({
  selector: 'app-images-list',
  templateUrl: './images.component.html',
  styleUrls: ['./images.component.css'],
  providers: [DestroyService],
  // changeDetection: ChangeDetectionStrategy.OnPush
})
export class ImagesComponent implements OnInit {
  @Input()
  public images: ImageInfo[] = [];

  constructor(
    private imageService$: ImageService,
    private destroy$: DestroyService,
  ) {
  }

  public ngOnInit() {
    this.imageService$.getRandomImage().pipe(takeUntil(this.destroy$)).subscribe(data => {
      this.images = [...data];
    });
  }


}
