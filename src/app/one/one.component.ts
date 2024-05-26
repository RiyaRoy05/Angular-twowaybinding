import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-one',
  templateUrl: './one.component.html',
  styleUrl: './one.component.scss'
})
export class OneComponent implements OnInit{
fullName : string ="Hello World";
constructor() {}

ngOnInit(): void{

}
}
