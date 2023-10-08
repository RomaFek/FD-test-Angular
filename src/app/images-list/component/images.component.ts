import {ChangeDetectionStrategy, Component, Input, OnInit} from '@angular/core';
import {ImageService} from '../service/image.service';
import {ImageInfo} from 'src/app/images-list/models/images.model';
import {Observable} from "rxjs";

@Component({
    selector: 'app-images-list',
    templateUrl: './images.component.html',
    styleUrls: ['./images.component.css'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class ImagesComponent implements OnInit {
    @Input()
    public images$!: Observable<ImageInfo[]>;

    constructor(
        private imageService$: ImageService,
    ) {
    }

    public ngOnInit() {
        this.images$ = this.imageService$.getRandomImage()
    }


}
