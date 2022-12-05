const sum = require('./sum');

test('adds 1 + 2 to equal 3', () => {
  expect(sum(1, 2)).toBe(3);
});

test('object assignment', () => {
  const data = { one: 1 };
  data.two = 2;
  data.three = undefined;
  expect(data).toEqual({ one: 1, two: 2 });
});

test('null', () => {
  const n = null;
  expect(n).toBeNull();
  expect(n).toBeDefined();
  expect(n).not.toBeUndefined();
  expect(n).not.toBeTruthy();
  expect(n).toBeFalsy();
});

test('adding floating point numbers', () => {
  const value = 0.1 + 0.2;
  // expect(value).toBe(0.3); // This won't work because of rounding error.
  expect(value).toBeCloseTo(0.3); // This works.
});

test('there is no I in team', () => {
  expect('team').not.toMatch(/I/);
});

test('but there is a "stop" in Christoph', () => {
  expect('Christoph').toMatch(/stop/);
});

const shoppingList = [
  'diapers',
  'kleenex',
  'trash bags',
  'paper towels',
  'milk',
];

test('the shopping list has milk on it', () => {
  expect(shoppingList).toContain('milk');
  expect(new Set(shoppingList)).toContain('milk');
});

// Testing asynchronous code:

// If fetchData is a promise...
// test('the data is peanut butter', () => fetchData().then((data) => {
//   expect(data).toBe('peanut butter');
// }));
// Using async
// test('the data is peanut butter', async () => {
//   const data = await fetchData();
//   expect(data).toBe('peanut butter');
// });
// Using async and await
// test('the data is peanut butter', async () => {
//   await expect(fetchData()).resolves.toBe('peanut butter');
// });
// test('the fetch fails with an error', async () => {
//   await expect(fetchData()).rejects.toMatch('error');
// });

/*
Repeating Setup/Teardown

If you have some work you need to do repeatedly for many tests,
you can use beforeEach and afterEach hooks.

For example, let's say that several tests interact with a database of cities.
You have a method initializeCityDatabase() that must be called before each
of these tests, and a method clearCityDatabase() that must be called after
each of these tests. You can do this with:
*/

// Failing test examples due to undefined variables:

// beforeEach(() => {
//   initializeCityDatabase();
// });

// afterEach(() => {
//   clearCityDatabase();
// });

// test('city database has Vienna', () => {
//   expect(isCity('Vienna')).toBeTruthy();
// });

// test('city database has San Juan', () => {
//   expect(isCity('San Juan')).toBeTruthy();
// });

/*
One-Time Setup/Teardown

In some cases, you only need to do setup once, at the beginning of a file.
This can be especially bothersome when the setup is asynchronous, so you
can't do it inline. Jest provides beforeAll and afterAll hooks to handle this situation.

For example, if both initializeCityDatabase() and clearCityDatabase()
returned promises, and the city database could be reused between tests, we
could change our test code to:
*/

// Failing test examples due to undefined variables:

// beforeAll(() => initializeCityDatabase());

// afterAll(() => clearCityDatabase());

// test('city database has Vienna', () => {
//   expect(isCity('Vienna')).toBeTruthy();
// });

// test('city database has San Juan', () => {
//   expect(isCity('San Juan')).toBeTruthy();
// });
