import { Component, OnInit } from '@angular/core';
import { NguCarousel } from '@ngu/carousel';


@Component({
  selector: 'app-services',
  templateUrl:'./services.component.html',
  styleUrls: ['./services.component.css']
  
})
export class ServicesComponent implements OnInit {

  public carouselTileItems: Array<any>;
  public carouselTile: NguCarousel;
  public categories: Array<any>;

  ngOnInit(){
    this.carouselTileItems = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];
    this.categories =  [
      {
          "catID": 1,
          "serviceCategory": "Electric",
          "status": null,
          "date": null,
          "availed": null,
          "imageURL": "http://54.172.238.246:8080/images/Painting.png",
          "services": [
              {
                  "serviceID": 1,
                  "service": "Fan reparing",
                  "date": "Mon Aug 28 17:03:40 UTC 2017",
                  "imageURL": "http://54.172.238.246:8080/images/Painting.png",
                  "status": "OPEN",
                  "availed": null,
                  "serviceRate": null
              },
              {
                  "serviceID": 2,
                  "service": "Washing Machine",
                  "date": "Mon Aug 28 17:03:40 UTC 2017",
                  "imageURL": "http://54.172.238.246:8080/images/Painting.png",
                  "status": "OPEN",
                  "availed": null,
                  "serviceRate": null
              },
              {
                  "serviceID": 3,
                  "service": "Microwave servicing",
                  "date": "Mon Aug 28 17:03:40 UTC 2017",
                  "imageURL": "http://54.172.238.246:8080/images/Painting.png",
                  "status": "OPEN",
                  "availed": null,
                  "serviceRate": null
              }
          ]
      },
      {
          "catID": 2,
          "serviceCategory": "Plumbing Services",
          "status": null,
          "date": null,
          "availed": null,
          "imageURL": "http://54.172.238.246:8080/images/Photography.png",
          "services": [
              {
                  "serviceID": 4,
                  "service": "Taps repairing",
                  "date": "Mon Aug 28 17:03:40 UTC 2017",
                  "imageURL": "http://54.172.238.246:8080/images/Painting.png",
                  "status": "OPEN",
                  "availed": null,
                  "serviceRate": null
              },
              {
                  "serviceID": 5,
                  "service": "Drainage services",
                  "date": "Mon Aug 28 17:03:40 UTC 2017",
                  "imageURL": "http://54.172.238.246:8080/images/Painting.png",
                  "status": "OPEN",
                  "availed": null,
                  "serviceRate": null
              }
          ]
      },
      {
          "catID": 3,
          "serviceCategory": "Home Gardening ",
          "status": null,
          "date": null,
          "availed": null,
          "imageURL": "http://54.172.238.246:8080/images/Painting.png",
          "services": [
              {
                  "serviceID": 8,
                  "service": "Tree care",
                  "date": null,
                  "imageURL": "http://54.172.238.246:8080/images/Painting.png",
                  "status": null,
                  "availed": null,
                  "serviceRate": null
              },
              {
                  "serviceID": 9,
                  "service": "Bio foods",
                  "date": null,
                  "imageURL": "http://54.172.238.246:8080/images/Painting.png",
                  "status": null,
                  "availed": null,
                  "serviceRate": null
              },
              {
                  "serviceID": 10,
                  "service": "Modern Planting ",
                  "date": null,
                  "imageURL": "http://54.172.238.246:8080/images/Painting.png",
                  "status": null,
                  "availed": null,
                  "serviceRate": null
              },
              {
                  "serviceID": 11,
                  "service": "Banana tree care",
                  "date": null,
                  "imageURL": "http://54.172.238.246:8080/images/Painting.png",
                  "status": null,
                  "availed": null,
                  "serviceRate": null
              },
              {
                  "serviceID": 6,
                  "service": "Flower Decorater",
                  "date": null,
                  "imageURL": "http://54.172.238.246:8080/images/Painting.png",
                  "status": null,
                  "availed": null,
                  "serviceRate": null
              },
              {
                  "serviceID": 7,
                  "service": "Planting",
                  "date": null,
                  "imageURL": "http://54.172.238.246:8080/images/Painting.png",
                  "status": null,
                  "availed": null,
                  "serviceRate": null
              }
          ]
      },
      {
          "catID": 4,
          "serviceCategory": "Pet Services",
          "status": null,
          "date": null,
          "availed": null,
          "imageURL": "http://54.172.238.246:8080/images/Painting.png",
          "services": [
              {
                  "serviceID": 16,
                  "service": "Puppy Training ",
                  "date": null,
                  "imageURL": "http://54.172.238.246:8080/images/Painting.png",
                  "status": null,
                  "availed": null,
                  "serviceRate": null
              },
              {
                  "serviceID": 17,
                  "service": "Big Dogs Training",
                  "date": null,
                  "imageURL": "http://54.172.238.246:8080/images/Painting.png",
                  "status": null,
                  "availed": null,
                  "serviceRate": null
              },
              {
                  "serviceID": 12,
                  "service": "Dog Care",
                  "date": null,
                  "imageURL": "http://54.172.238.246:8080/images/Painting.png",
                  "status": null,
                  "availed": null,
                  "serviceRate": null
              },
              {
                  "serviceID": 13,
                  "service": "Little Cats Caring",
                  "date": null,
                  "imageURL": "http://54.172.238.246:8080/images/Painting.png",
                  "status": null,
                  "availed": null,
                  "serviceRate": null
              },
              {
                  "serviceID": 14,
                  "service": "Wild Animals",
                  "date": null,
                  "imageURL": "http://54.172.238.246:8080/images/Painting.png",
                  "status": null,
                  "availed": null,
                  "serviceRate": null
              },
              {
                  "serviceID": 15,
                  "service": "Fish Caring ",
                  "date": null,
                  "imageURL": "http://54.172.238.246:8080/images/Painting.png",
                  "status": null,
                  "availed": null,
                  "serviceRate": null
              }
          ]
      }
  ];
    this.carouselTile = {
      grid: {xs: 2, sm: 3, md: 3, lg: 4, all: 0},
      slide: 1,
      speed: 600,
      animation: 'lazy',
      point: {
        visible: false,
      },
      load: 1,
      touch: true,
      easing: 'ease'
    }
  }

  public carouselTileLoad(evt: any) {

    const len = this.carouselTileItems.length
    if (len <= 30) {
      for (let i = len; i < len + 10; i++) {
        this.carouselTileItems.push(i);
      }
    }

  }

     // carouselLoad will trigger this funnction when your load value reaches
     // it is helps to load the data by parts to increase the performance of the app
     // must use feature to all carousel

}