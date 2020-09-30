import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  transform(value: any[], ...args: any[]): any {
    if (!args) {
      return value;
    }
    return value.filter((val) => {
      let rVal;
      if (args[0] != "") {
        rVal = (val.name.includes(args[0]));
        if (!rVal) {
          rVal = (val.username.includes(args[0]));
        }
        return rVal;
      } else if (args[1] != "") {
        return rVal = (val.email.includes(args[1]));
      } else if (args[2] != "") {
        rVal = (val.address.street.includes(args[2]));
        if (!rVal) {
          rVal = (val.address.suite.includes(args[2]));
        } 
        if (!rVal) {
          rVal = (val.address.city.includes(args[2]));
        }
         if (!rVal) {
          rVal = (val.address.zipcode.includes(args[2]));
        }
        return rVal;
      } else{
        return true;
      }
    })
  }

}
