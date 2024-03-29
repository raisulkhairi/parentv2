/* eslint-disable @angular-eslint/no-empty-lifecycle-method */
/* eslint-disable @typescript-eslint/no-empty-function */
import { Component, OnInit } from '@angular/core';
import { ParentService } from '../../services/parent.service';

@Component({
  selector: 'parent-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css'],
})
export class SidebarComponent implements OnInit {
  showProfile = false;
  showProfile2 = false;
  showProfile3 = false;
  parentData!: any;

  constructor(private parentService: ParentService) {}

  ngOnInit(): void {
    this.parentService
      .getParentById('61e29a10f9e10e4f8ad8913d')
      .subscribe((el) => {
        this.parentData = el;
        console.log('HASIL : ', this.parentData.child);
      });
  }
  goToLink(id : any){
    window.location.href =  `/score-info/${id}`
  }
}
