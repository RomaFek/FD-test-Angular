import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {ImageService} from '../images-list/service/image.service';
import {ImageInfo} from '../images-list/models/images.model';
import {Observable, of, switchMap} from "rxjs";

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
            switchMap((params) => {
                const imageId = params.get('id');
                if (imageId) {
                    return this.imageService.getImageDetails(imageId);
                }
                return of(null);
            })
        );
    }

}

