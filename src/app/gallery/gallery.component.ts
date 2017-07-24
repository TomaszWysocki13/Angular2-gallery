import { Component, OnInit } from '@angular/core';
import { Observable} from "rxjs/Observable";
import { GalleryService } from "./gallery.service";
import { IGallery } from "./gallery-interface";

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss']
})
export class GalleryComponent implements OnInit {
  gallery$: Observable<IGallery[]>;
  constructor(private galleryService: GalleryService) { }

  ngOnInit() {
    this.gallery$ = this.galleryService.getData();
  }
}
