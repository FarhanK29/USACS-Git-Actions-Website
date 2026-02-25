import { expect, test } from 'vitest';
import { toNumber, add } from './script.js';

test('Properly handles input types', () => {
  expect(toNumber("10")).toBe(10);
  expect(toNumber("")).toBe(null);
});

test('CI Demo: 5 + 5 should be 10', () => {
  // This will FAIL because our 'add' function currently does (a - b)
  // This failure is what will stop your GitHub Action from deploying!
  expect(add(5, 5)).toBe(10); 
});