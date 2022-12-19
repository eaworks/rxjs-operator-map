import { from, Observable, forkJoin } from 'rxjs';
import { map } from 'rxjs/operators';
import { ajax, AjaxResponse } from 'rxjs/ajax';

// const source = from([1, 2, 3, 4, 5]);
// const example = source.pipe(map((val) => val + 5));

// example.subscribe((val) => console.log(val));

const randomName$ = ajax(
  'https://random-data-api.com/api/name/random_name'
).pipe(map((ajaxResponse) => ajaxResponse.response['first_name']));
const randomNation$ = ajax(
  'https://random-data-api.com/api/nation/random_nation'
).pipe(map((ajaxResponse) => ajaxResponse.response['capital']));
const randomFood$ = ajax(
  'https://random-data-api.com/api/food/random_food'
).pipe(map((ajaxResponse) => ajaxResponse.response['dish']));

// randomName$.subscribe((example) => console.log(example));
// randomNation$.subscribe((example) => console.log(example));
// randomFood$.subscribe((example) => console.log(example));
forkJoin([randomName$, randomNation$, randomFood$]).subscribe(
  ([randomName, randomNation, randomFood]) =>
    console.log(
      `${randomNation} da yasayan ${randomName} ${randomFood} yemeyi cok sever
    `
    )
);
