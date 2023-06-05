import { DatePipe } from '@angular/common';
import { Pipe, PipeTransform } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
@Pipe({
  name: 'date'
})
export class DateProxyPipe implements PipeTransform {

  constructor(private translateService: TranslateService) {
  console.log(this.translateService.currentLang)
  }

  public transform(value: any, pattern: string = 'mediumDate',currentLang: any): any {
    const ngPipe = new DatePipe(currentLang);
    return ngPipe.transform(value, pattern);
  }
}