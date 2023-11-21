import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SenddataService } from 'src/app/services/senddata.service';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {
  public routerstate!: any;

  constructor(private sendRouteNameService: SenddataService) { }
  ngOnInit(): void {
    this.sendRouteNameService.returnedName.subscribe((res) => {
      if (res) {
        this.routerstate = res
        console.log(res);
      }
    })
  }
}
