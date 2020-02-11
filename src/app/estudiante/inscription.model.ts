import {StudenModel} from './studen.model';
import {SubjectModel} from './subject.model';

export interface InscriptionModel {
  studentDto?: StudenModel;
  subjectDto?: SubjectModel;
}
