/* eslint no-console: 0 */
import test from 'tape';
import {tokenize, RPNize, evaluate} from '../src';

test('tokenize', (assert) => {
  const text = '3 + 4 * 2 / ( 1 - 5 ) ^ 2 ^ 3';
  const tokens = tokenize(text);
  console.log(tokens);
  assert.ok(tokens.length, 'return tokens');
  assert.end();
});
test('RPNize', (assert) => {
  const tokens = ['3', '+', '4', '*', '2', '/', '(', '1', '-', '5', ')', '^', '2', '^'];
  const RPNizedTokens = RPNize(tokens);
  console.log(RPNizedTokens);
  assert.ok(RPNizedTokens.length, 'return RPNizedTokens');
  assert.end();
});
test.only('evaluate', (assert) => {
  // const tokens = ['3', '4', '2', '*', '1', '5', '-', '2', '^', '^', '/', '+'];
  const tokens = ['5', '1', '2', '+', '4', '*', '+', '3', '-'];
  const expectedResult = 14;
  const result = evaluate(tokens);
  assert.equal(result, expectedResult, 'return result');
  assert.end();
});
