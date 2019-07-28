import { Parser } from "expr-eval";

const parseExpression = (screenValue, expressionString) => {
  const parser = new Parser();

  let expressionObj, parsedValue;

  try {
    expressionObj = parser.parse(expressionString);
    parsedValue = expressionObj.evaluate({ x: screenValue });
  } catch (error) {
    throw new Error(`Expression Parsing error: ${error}`);
  }

  return parsedValue;
};

export { parseExpression };
