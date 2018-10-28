import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import  {  ENV  }  from  '@app/env';

/* 
  Generated class for the UserProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class UserProvider {

  requestUrl: string = ENV.url

  constructor(public http: HttpClient) {
    console.log('Hello UserProvider Provider');
  }

  sendReg(user) {
    console.log('sendReg() runs', user)
    return this.http.post(this.requestUrl + '/appUsers', user)
  }

  //update data from wizard page and patch user model
  updateUserModel(data: any) {
    console.log(data, "#1-updateUserModel") 
    return this.http.patch(this.requestUrl + '/appUsers/' + '5bd134f1896194001414e411', data)
  }


  login(creds) {
    return this.http.post(this.requestUrl + '/appUsers/login', creds);
  }
}
