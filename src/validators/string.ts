import { Validator } from './validator';

export class IsStringValidator extends Validator<object> {
  async doValidate(value: object | unknown): Promise<boolean> {
    return typeof value === 'string';
  }
}
