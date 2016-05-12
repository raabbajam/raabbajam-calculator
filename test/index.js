/* eslint no-console: 0 */
import test from 'tape';
import {calculate, tokenize, RPNize, evaluate} from '../src';

test('tokenize', (assert) => {
  const text = '5 + ((1 + 2) * 4) - 3';
  const tokens = tokenize(text);
  // console.log(tokens);
  assert.ok(tokens.length, 'return tokens');
  assert.end();
});
test('RPNize', (assert) => {
  const tokens = ['5', '+', '(', '(', '1', '+', '2', ')', '*', '4', ')', '-', '3'];
  const RPNizedTokens = RPNize(tokens);
  // console.log(RPNizedTokens);
  assert.ok(RPNizedTokens.length, 'return RPNizedTokens');
  assert.end();
});
test('evaluate', (assert) => {
  const tokens = ['5', '1', '2', '+', '4', '*', '+', '3', '-'];
  const expectedResult = 14;
  const result = evaluate(tokens);
  assert.equal(result, expectedResult, 'return result');
  assert.end();
});
test('calculate', (assert) => {
  const text = '5 + ((1 + 2) * 4) - 3';
  const result = calculate(text);
  const expectedResult = 14;
  // console.log(tokens);
  assert.equal(result, expectedResult, 'return result');
  assert.end();
});
