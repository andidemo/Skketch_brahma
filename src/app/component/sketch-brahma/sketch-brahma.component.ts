import { Component, OnInit } from '@angular/core';
import { GenericService } from 'src/app/generic.service';

@Component({
  selector: 'app-sketch-brahma',
  templateUrl: './sketch-brahma.component.html',
  styleUrls: ['./sketch-brahma.component.css']
})
export class SketchBrahmaComponent implements OnInit {
  sketchData: any = [];
  stateList: any;
  serach: any;
  constructor(public genericservice: GenericService) { }

  ngOnInit(): void {
    this.getStatedata();
    this.getDetails();
  }
  selectAccount(event) {
    console.log(event.target.value)
    let state = event.target.value;
    this.genericservice.getData(state.toLowerCase()).subscribe((data: any) => {
      this.sketchData = data;
      console.log(data);
    });
  }

  getDetails() {
    let state = "";
    this.genericservice.getData(state).subscribe((data: any) => {
      this.sketchData = data;
      console.log(data);
    });
  }
  getStatedata() {
    let state = "";
    this.genericservice.getData(state).subscribe((data: any) => {
      this.stateList = data;
      console.log(data);
    });
  }

  clearFilter() {
    this.serach='';
    this.getStatedata();
    this.getDetails();
  }
  serchByname(evet) {
    console.log(evet.target.value)
    this.genericservice.getSearch(evet.target.value).subscribe((data: any) => {
      this.sketchData = data;
      console.log(data);
    });
  }
}
