import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {ImageService} from '../images-list/service/image.service';
import {ImageInfo} from '../images-list/models/images.model';
import {DestroyService} from "../shared/destroy.service";
import {Observable, takeUntil} from "rxjs";

@Component({
    selector: 'app-image-item',
    templateUrl: './image-item.component.html',
    styleUrls: ['./image-item.component.css'],
    providers: [DestroyService],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class ImageItemComponent implements OnInit {
    imgInfo$!: Observable<ImageInfo>

    constructor(
        private route: ActivatedRoute,
        private imageService: ImageService,
        private destroy$: DestroyService,
    ) {
    }

    public ngOnInit(): void {
        this.route.paramMap.pipe(takeUntil(this.destroy$)).subscribe((params) => {
            const imageId = params.get('id');
            if (imageId) {
                this.loadImageDetails(imageId);
            }
        });
    }

    public loadImageDetails(imageId: string): void {
        this.imgInfo$ = this.imageService.getImageDetails(imageId)
    }

}

