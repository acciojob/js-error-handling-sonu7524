//your code here
class OutOfRangeError extends Error {
  constructor(message = "Expression should only consist of integers and +-/* characters and not <arg>") {
    super(message);
    this.name = "OutOfRangeError";
  }
}

class InvalidExprError extends Error {
  constructor(message = "Expression should not have an invalid combination of expression") {
    super(message);
    this.name = "InvalidExprError";
  }
}
