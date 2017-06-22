import numeral from 'numeral';

export class NumbersValueConverter{
  toView(value){
    return numeral(value).format('0,0');
  }
}
