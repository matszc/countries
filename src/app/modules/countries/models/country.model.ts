import {CountryNameModel} from "./country-name.model";
import {CountryFlag} from "./country-flag";
import {CurrencyModel} from "./currency.model";

export interface CountryModel {
  name: CountryNameModel;
  capital: string[];
  continents: string[];
  flags: CountryFlag;
  currencies: { [key: string]: CurrencyModel }
  languages: { [key: string]: string }
}
