import { Pipe, PipeTransform } from '@angular/core';


@Pipe({
  name: 'searchHeros'
})

export class SearchHerosPipe implements PipeTransform {

  transform(values: any[],searchText: string): any {
    if(!values || !searchText)
      return values;
      var upperLetter = searchText.toLowerCase();
    return values.filter((items)=>items.name.toLowerCase().startsWith(upperLetter));  
    //return values.filter((items)=>items.Name.toLowerCase().startsWith(searchText.toLowerCase())); 
  }
 

}

