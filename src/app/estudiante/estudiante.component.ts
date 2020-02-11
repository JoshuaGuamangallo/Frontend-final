import {Component, OnInit} from '@angular/core';
import {InscriptionModel} from './inscription.model';
import {InscriotionService} from './student.service';

@Component({
  selector: 'app-estudiante',
  templateUrl: './estudiante.component.html',
  styleUrls: ['./estudiante.component.css']
})
export class EstudianteComponent implements OnInit {
  static URL = 'estudiante';
  inscription: InscriptionModel;

  constructor(private inscriotionService: InscriotionService) {
    this.inscription = {studentDto: {id: ''}, subjectDto: {id: 0}};
  }

  ngOnInit() {
  }

  inscriptionSave() {
    console.log(this.inscription);
    this.inscriotionService. create(this.inscription).subscribe();
  }

}
