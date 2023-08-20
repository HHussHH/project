import { classNames } from './classNames';

describe('classNames', () => {
  test('with only first param', () => {
    expect(classNames('someClass')).toBe('someClass');
  });

  test('with additional params', () => {
    const expected = 'someClass class1 class2';
    expect(classNames('someClass', {}, ['class1', 'class2'])).toBe(expected);
  });

  test('with modal with one param', () => {
    const expected = 'someClass class1 class2 hover';
    expect(classNames('someClass', { hover: true, scroll: false }, ['class1', 'class2'])).toBe(expected);
  });

  test('with modal with all params', () => {
    const expected = 'someClass class1 class2 hover scroll';
    expect(classNames('someClass', { hover: true, scroll: true }, ['class1', 'class2'])).toBe(expected);
  });

  test('with modal with undefined', () => {
    const expected = 'someClass class1 class2 hover';
    expect(classNames('someClass', { hover: true, scroll: undefined }, ['class1', 'class2'])).toBe(expected);
  });
});
