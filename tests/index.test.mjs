import assert from 'node:assert/strict';
import test from 'node:test';
import * as api from '../dist/esm/index.js';
test('removes duplicate values', () => {
  assert.deepEqual(api.uniqueLines(['a', 'b', 'a']), ['a', 'b']);
});
test('preserves first-seen order', () => {
  assert.deepEqual(api.uniqueLines(['b', 'a', 'c', 'a']), ['b', 'a', 'c']);
});
test('keeps case-distinct lines', () => {
  assert.deepEqual(api.uniqueLines(['A', 'a']), ['A', 'a']);
});
test('keeps empty line once', () => {
  assert.deepEqual(api.uniqueLines(['', '', 'x']), ['', 'x']);
});
test('does not mutate input', () => {
  const x = ['a', 'a'];
  api.uniqueLines(x);
  assert.deepEqual(x, ['a', 'a']);
});
test('rejects non-string lines', () => {
  assert.throws(() => api.uniqueLines(['a', 2]), TypeError);
});
