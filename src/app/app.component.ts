import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  titled:string="for each loop set color by status condition"
  today: Date = new Date();

  constructor(public translate: TranslateService ,private http: HttpClient) {
    translate.addLangs(['en', 'fr', 'de']);
    translate.setDefaultLang('en');

    const browserLang = translate.getBrowserLang();
    translate.use(browserLang.match(/en|fr|de/) ? browserLang : 'en');
  }

  public get currentLanguage(): string {
    return this.translate.currentLang;
  }


  tableData: any[] = [];
  NewtableData: any[] = [];
  
  // ngOnInit() {
  //   return this.http.get<any>('./../assets/customers-large.json').toPromise().then((res) => {
  //     console.log(res, 'subscription');
  //     this.tableData = res;
  //     this.tableData.forEach((el) => {
  //       let patchData = {
  //         name: el.name,
  //         prenom: 'chebbi',
  //         color: '',
  //         situation: '',
  //       };
  //       if (el.activity < 30) {
  //         patchData.color = 'green';
  //         patchData.situation = 'normal';
  //       } else {
  //         patchData.color = 'red';
  //         patchData.situation = 'risky';
  //       }
  //       this.NewtableData.push(patchData);
  //       console.log('patched Data', patchData);
  //     });
  //   });
  // }
}
