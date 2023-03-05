import {Component, OnInit} from '@angular/core';
import {FaceSnap} from "../models/face-snap.model";

@Component({
  selector: 'app-face-snap-list',
  templateUrl: './face-snap-list.component.html',
  styleUrls: ['./face-snap-list.component.scss']
})
export class FaceSnapListComponent implements OnInit{
  faceSnaps! : FaceSnap[];

  ngOnInit(): void {
    this.faceSnaps =
      [new FaceSnap(
        'Archibald',
        'mon chat preferé',
        new Date(),
        6,
        'https://cdn.pixabay.com/photo/2015/05/31/16/03/teddy-bear-792273_1280.jpg',
      ),
        new FaceSnap(
          'Three Rock Mountain',
          'Un endroit magnifique pour les randonnées.',
          new Date(),
          160,
          'https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Three_Rock_Mountain_Southern_Tor.jpg/2880px-Three_Rock_Mountain_Southern_Tor.jpg',
          "france"
        ),
        new FaceSnap(
          'Un bon repas',
          'Mmmh que c\'est bon !',
          new Date(),
          2000,
          'https://wtop.com/wp-content/uploads/2020/06/HEALTHYFRESH.jpg',
          "england",
        )
      ]
  }
}
