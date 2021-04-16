import { CadUsers } from '../../core/model';
import { Pipe, PipeTransform } from "@angular/core";

@Pipe({name: 'filterDescription'})
export class FilterDescription implements PipeTransform{
  transform(users: CadUsers[], descriptionQuery: string) {
    descriptionQuery = descriptionQuery
    .trim()
    .toLowerCase();

    if(descriptionQuery) {
       return users.filter(users =>
        users.login.toLowerCase().includes(descriptionQuery));
    } else {
      return users;
    }
  }

}
