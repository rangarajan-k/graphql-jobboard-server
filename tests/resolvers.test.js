import {getFormattedDate} from '../resolvers.js';

test('Formatted date function should return date in DD-MM-YYYY format', () => {
    let inputDate = '2023-11-08T09:41:28.223Z';
    let expectedResultDate = '08-11-2023';
    expect(getFormattedDate(inputDate)).toBe(expectedResultDate);
})