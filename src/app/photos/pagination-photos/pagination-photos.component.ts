import { Component, OnInit } from '@angular/core';
import { PhotosServices } from 'src/app/services/photosServices';
@Component({
  selector: 'app-pagination-photos',
  templateUrl: './pagination-photos.component.html',
  styleUrls: ['./pagination-photos.component.css']
})
export class PaginationPhotosComponent implements OnInit {
  photos: any = [];
  actualPhotos: any = [];
  totalPages: number = 0;
  page: number = 0;
  constructor(private photosService: PhotosServices) { }

  ngOnInit(): void {
    this.photosService.getPhotos()
      .then(
        (photos: any[]) => {
          this.photos = photos;
          this.totalPages = Math.ceil(photos.length / 10);
          this.actualPhotos = this.photos.slice(0, 10);
        }
      )
  }

  previousPage() {
    this.page--;
    this.actualPhotos = this.photos.slice(this.page * 10, (this.page + 1) * 10);

  }

  nextPage() {
    this.page++;
    this.actualPhotos = this.photos.slice(this.page * 10, (this.page + 1) * 10);
  }

}
