import { ValidatorConstraint, ValidatorConstraintInterface, ValidationArguments } from 'class-validator';

@ValidatorConstraint({ name: 'error', async: false })
export class DontStartWithZ implements ValidatorConstraintInterface {
  validate(text: string, args: ValidationArguments) {
    const emojiRegex = /^(?!z|Z).+/;
    return emojiRegex.test(text);
  }

  defaultMessage(args: ValidationArguments) {
    // here you can provide default error message if validation failed
    return `Name can't start with z! ($value)`;
  }
}