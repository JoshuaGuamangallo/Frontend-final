import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-matriculacion',
  templateUrl: './matriculacion.component.html',
  styleUrls: ['./matriculacion.component.css']
})
export class MatriculacionComponent implements OnInit {
  static URL = 'matriculacion';
  displayedColumns: string[] = ['name', 'id', 'semester'];
  dataSource = ELEMENT_DATA;
  constructor() {

  }

  ngOnInit() {

  }

}
export interface PeriodicElement {
  name: string;
  id: number;
  semester: number;
}
const ELEMENT_DATA: PeriodicElement[] = [
  {name: 'Hydrogen', id: 1.0079, semester: 6},
  {name: 'joshua guamangallo', id: 4.0156, semester: 7},
  {name: 'maricela andrade', id: 4.0026, semester: 7},
];
