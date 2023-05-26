// unit.test.js

const functions = require('../code-to-unit-test/unit-test-me.js');

// TODO - Part 2

// True tests for isPhoneNumber
test('Check if 000-000-0000 is a valid phone number', () => {
    expect(functions.isPhoneNumber("000-000-0000")).toBe(true);
});
test('Check if 111-111-1111 is a valid phone number', () => {
    expect(functions.isPhoneNumber("111-111-1111")).toBe(true);
});

// False tests for isPhoneNumber
test('Check if 9 is not a valid phone number', () => {
    expect(!functions.isPhoneNumber("9")).toBe(true);
});
test('Check if 0 is not a valid phone number', () => {
    expect(!functions.isPhoneNumber("0")).toBe(true);
});


// True tests for isEmail
test('Check if eMaIlEx@AmP.le is a valid email', () => {
    expect(functions.isEmail("eMaIlEx@AmP.le")).toBe(true);
});
test('Check if bruh@bruh.buh is a valid email', () => {
    expect(functions.isEmail("bruh@bruh.buh")).toBe(true);
});

// False tests for isEmail
test('Check if @. is not a valid email', () => {
    expect(!functions.isEmail("@.")).toBe(true);
});
test('Check if 00@00.00 is not a valid email', () => {
    expect(!functions.isEmail("00@00.00")).toBe(true);
});


// True tests for isStrongPassword
test('Check if aaaa is a strong password', () => {
    expect(functions.isStrongPassword("aaaa")).toBe(true);
});
test('Check if IoJdFJKNiueja is a strong password', () => {
    expect(functions.isStrongPassword("IoJdFJKNiueja")).toBe(true);
});

// False tests for isStrongPassword
test('Check if 1398173 is not a strong password', () => {
    expect(!functions.isStrongPassword("1398173")).toBe(true);
});
test('Check if bb is not a strong password', () => {
    expect(!functions.isStrongPassword("bb")).toBe(true);
});


// True tests for isDate
test('Check if 00/00/0000 is a date', () => {
    expect(functions.isDate("00/00/0000")).toBe(true);
});
test('Check if 01/01/2001 is a date', () => {
    expect(functions.isDate("01/01/2001")).toBe(true);
});

// False tests for isDate
test('Check if /// is not a date', () => {
    expect(!functions.isDate("///")).toBe(true);
});
test('Check if 0/2/23 is not a date', () => {
    expect(!functions.isDate("0/2/23")).toBe(true);
});

// True tests for isHexColor
test('Check if #ff0000 is a hex code', () => {
    expect(functions.isHexColor("#ff0000")).toBe(true);
});
test('Check if #00ff00 is a hex code', () => {
    expect(functions.isHexColor("#00ff00")).toBe(true);
});

// False tests for isHexColor
test('Check if #00 is not a hex code', () => {
    expect(!functions.isHexColor("#00")).toBe(true);
});
test('Check if 0111 is not a hex code', () => {
    expect(!functions.isHexColor("0111")).toBe(true);
});

