import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {ImageService} from '../images-list/service/image.service';
import {ImageInfo} from '../images-list/models/images.model';
import {Observable, of, switchMap} from "rxjs";
import {map} from "rxjs/operators";

@Component({
    selector: 'app-image-item',
    templateUrl: './image-item.component.html',
    styleUrls: ['./image-item.component.css'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class ImageItemComponent implements OnInit {
    imgInfo$!: Observable<ImageInfo | null>

    constructor(
        private route: ActivatedRoute,
        private imageService: ImageService,
    ) {
    }

    ngOnInit(): void {
        this.imgInfo$ = this.route.paramMap.pipe(
            map(imageId => imageId.get('id')),
            switchMap((imageId) => {
                if (imageId) {
                    return this.imageService.getImageDetails(imageId);
                }
                return of(null);
            })
        );
    }
}

