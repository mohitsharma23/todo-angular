import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  ngOnInit() {
  }

  newItem: string= '';
  items: any = [];
  some: any;
  currentDate: number = Date.now();
  priority: string;
  change: boolean = true;

  constructor() {
    this.some = -1;
  }

  addItem(){
    var newObj = {name: this.newItem, active: false, priority: this.priority};
    this.items.push(newObj);
    this.newItem = '';
    this.priority = '';
    this.sort();
  }

  keyadd(e){
    if(e.keyCode == 13){
      this.addItem();
    }
  }

  deleteItem(index){
    this.items.splice(index, 1);

  }

  remaining(){
    var count = 0;
    for(let item of this.items){
      count += item.active ? 0 : 1;
    }
    return count;
  }


  editItem(index){
    if(this.some == index){
      this.some = -1;
      console.log(this.some);
    }else{
        this.some = index;
        console.log(this.some);
    }
  }

  sort(){
    // let newArr = this.items;
    this.items.sort((a,b) => {
      if(a.priority < b.priority) return -1;
      if(a.priority > b.priority) return 1;
      return 0;
    });
    // console.log(newArr);
  }


  toggleClass(item){
    item.active = !item.active;
  }
}
