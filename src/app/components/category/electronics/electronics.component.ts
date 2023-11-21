import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-electronics',
  templateUrl: './electronics.component.html',
  styleUrls: ['./electronics.component.css']
})
export class ElectronicsComponent implements OnInit {
  public routerstate!: any;
  constructor(private activRoute: ActivatedRoute) { }
  ngOnInit(): void {
    this.activRoute.data.subscribe(data => {
      this.routerstate = data;
      
    })
}
}
