export default calculate;
export function calculate(text) {
  return evaluate(RPNize(tokenize(text)));
}

export function tokenize(text) {
  const tokens = [];
  let number = null;
  text.match(/\S/g).forEach((token) => {
    if (isNumber(token)) {
      number = `${number || ''}${String(token)}`;
    } else {
      if (number) {
        tokens.push(number);
      }
      tokens.push(token);
      number = null;
    }
  });
  tokens.push(number);
  return tokens;
}

export function RPNize(tokens) {
  const stack = [];
  let output = [];
  tokens.forEach((token) => {
    if (isNumber(token)) {
      output.push(token);
    } else if (isFunction(token)) {
      stack.push(token);
    } else if (isOperator(token)) {
      const operator1 = token;
      while (tail(stack) && isOperator(tail(stack))) {
        const operator2 = tail(stack);
        if (isLeftAssociative(operator1) && isLtePrecedence(operator1, operator2) ||
          isRightAssociative(operator1) && isLtPrecedence(operator1, operator2)
        ) {
          output.push(stack.pop());
        } else {
          break;
        }
      }
      stack.push(token);
    } else if (isRightParentheses(token)) {
      while (tail(stack) && !isLeftParentheses(tail(stack))) {
        output.push(stack.pop());
      }

      if (!isLeftParentheses(tail(stack))) {
        throw new Error('Mismatch parentheses');
      }
      stack.pop();
    }
  });
  output = output.concat(stack.reverse());
  return output;
}

export function evaluate(tokens) {
  const stack = [];
  tokens.forEach((token) => {
    if (isNumber(token)) {
      stack.push(token);
    } else if (isOperator(token)) {
      const operator = token;
      const operand2 = stack.pop();
      const operand1 = stack.pop();
      const result = execute(operator, operand1, operand2);
      stack.push(result);
    }
  });
  return stack.pop();
}

function isNumber(text) {
  return /\d/.test(text);
}

function isFunction(token) {
  return /\(/.test(token);
}

function isLeftParentheses(token) {
  return /\(/.test(token);
}

function isRightParentheses(token) {
  return /\)/.test(token);
}

function isOperator(token) {
  return /[\+\-\*\/\^]/.test(token);
}

function tail(stack) {
  return stack[stack.length - 1];
}

function isLeftAssociative(operator) {
  return /[\+\-\*\/]/.test(operator);
}

function isRightAssociative(operator) {
  return /\^/.test(operator);
}

function isLtePrecedence(operator1, operator2) {
  const operatorPrecedence1 = getPrecedence(operator1);
  const operatorPrecedence2 = getPrecedence(operator2);
  return operatorPrecedence1 <= operatorPrecedence2;
}

function isLtPrecedence(operator1, operator2) {
  const operatorPrecedence1 = getPrecedence(operator1);
  const operatorPrecedence2 = getPrecedence(operator2);
  return operatorPrecedence1 < operatorPrecedence2;
}

function getPrecedence(operator) {
  let precedence = 0;
  switch (operator) {
    case '^':
      precedence = 4;
      break;
    case '*':
      precedence = 3;
      break;
    case '/':
      precedence = 3;
      break;
    case '+':
      precedence = 2;
      break;
    case '-':
      precedence = 2;
      break;
    default:
      precedence = 0;
  }
  return precedence;
}

function execute(operator, operand1, operand2) {
  operand1 = Number(operand1);
  operand2 = Number(operand2);
  let result = 0;
  switch (operator) {
    case '+':
      result = operand1 + operand2;
      break;
    case '-':
      result = operand1 - operand2;
      break;
    case '*':
      result = operand1 * operand2;
      break;
    case '/':
      result = operand1 / operand2;
      break;
    case '^':
      result = Math.pow(operand1, operand2);
      break;
    default:
      result = 0;
  }
  return result;
}
