import {Injectable} from '@angular/core';
import {Observable, throwError} from 'rxjs';
import {HttpService} from '../core/http.service';
import {InscriptionModel} from './inscription.model';

@Injectable()
export class InscriotionService {
  static END_POINT = 'inscription';

  constructor(private httpService: HttpService) {
  }

  create(provider: InscriptionModel): Observable<InscriptionModel> {
    return this.httpService.post(InscriotionService.END_POINT, provider);
  }

}
