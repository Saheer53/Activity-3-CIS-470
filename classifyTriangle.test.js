
const  classifyTriangle  = require('./classifyTriangle');

describe('classifyTriangle: Required input conditions -  See readme for more details', () => {
    test('should classify an Equilateral triangle', () => {
      expect(classifyTriangle(10, 10, 10)).toBe('Equilateral');
      // add more test cases based on your requirements and Boundary Value Analysis + Equivalence Partitioning
    });
  
    test('should classify an Isosceles triangle', () => {
      expect(classifyTriangle(10, 10, 5)).toBe('Isosceles');
    // add more test cases based on your requirements and Boundary Value Analysis + Equivalence Partitioning
    });
  
    test('should classify a Scalene triangle', () => {
      expect(classifyTriangle(10, 12, 14)).toBe('Scalene');
      // add more test cases based on your requirements and Boundary Value Analysis + Equivalence Partitioning
    });

  
    test('should return error for invalid inputs', () => {
      expect(classifyTriangle(0, 10, 10)).toBe('Error: Input conditions C1, C2, or C3 failed.');
        // add more test cases based on your requirements and Boundary Value Analysis + Equivalence Partitioning
    });
  
    test('should return "Not a Triangle" for invalid triangle sides', () => {
      expect(classifyTriangle(1, 2, 3)).toBe('Not a Triangle');
      // add more test cases based on your requirements and Boundary Value Analysis + Equivalence Partitioning
    });
    // Boundary Value Analysis and Equivalence Partitioning Test Cases
    // Testing lower and upper boundaries for Equilateral triangles
    test('Equilateral triangle with minimum valid side length', () => {
      expect(classifyTriangle(1, 1, 1)).toBe('Equilateral');
      // Testing the smallest possible equilateral triangle
  });

  test('Equilateral triangle with maximum valid side length', () => {
      expect(classifyTriangle(200, 200, 200)).toBe('Equilateral');
      // Testing the largest possible equilateral triangle
  });

  // Testing lower and upper boundaries for Isosceles triangles
  test('Isosceles triangle with one side at minimum and others at just above minimum', () => {
      expect(classifyTriangle(1, 1, 2)).toBe('Isosceles');
      // Testing boundary condition where two sides are equal and one is just larger
  });

  test('Isosceles triangle with two sides at maximum and one side just below maximum', () => {
      expect(classifyTriangle(199, 200, 200)).toBe('Isosceles');
      // Testing boundary condition where two sides are equal and one is just smaller
  });

  // Testing lower and upper boundaries for Scalene triangles
  test('Scalene triangle with sides just above minimum valid lengths', () => {
      expect(classifyTriangle(2, 3, 4)).toBe('Scalene');
      // Testing a small scalene triangle
  });

  test('Scalene triangle with sides just below maximum valid lengths', () => {
      expect(classifyTriangle(198, 199, 200)).toBe('Scalene');
      // Testing a large scalene triangle
  });

  // Testing invalid input cases (negative numbers, zeros, and numbers above 200)
  test('Triangle with a negative side length', () => {
      expect(classifyTriangle(-1, 10, 10)).toBe('Error: Input conditions C1, C2, or C3 failed.');
      // Testing negative side length, which is invalid
  });

  test('Triangle with zero side length', () => {
      expect(classifyTriangle(0, 10, 10)).toBe('Error: Input conditions C1, C2, or C3 failed.');
      // Testing zero side length, which is invalid
  });

  test('Triangle with side length greater than 200', () => {
      expect(classifyTriangle(201, 10, 10)).toBe('Error: Input conditions C1, C2, or C3 failed.');
      // Testing side length more than the maximum allowed
  });

  // Additional Equivalence Partitioning cases
  test('Triangle with two equal sides and one different (Isosceles)', () => {
      expect(classifyTriangle(5, 5, 3)).toBe('Isosceles');
      // Typical isosceles triangle
  });

  test('Triangle with all sides different (Scalene)', () => {
      expect(classifyTriangle(6, 7, 8)).toBe('Scalene');
      // Typical scalene triangle
  });

  // Additional boundary cases for invalid triangles
  test('Triangle with the sum of two sides equal to the third side', () => {
      expect(classifyTriangle(5, 5, 10)).toBe('Not a Triangle');
      // A degenerate case where it's not a valid triangle
  });

  test('Triangle with two sides summing up to less than the third side', () => {
      expect(classifyTriangle(2, 2, 5)).toBe('Not a Triangle');
      // Another case of an invalid triangle
  });

  // Edge cases for floating-point values
  test('Triangle with floating-point side lengths (Isosceles)', () => {
      expect(classifyTriangle(5.5, 5.5, 3.0)).toBe('Isosceles');
      // Testing with floating point numbers
  });

  test('Triangle with very close floating-point side lengths (Scalene)', () => {
      expect(classifyTriangle(5.5, 5.6, 5.7)).toBe('Scalene');
      // Edge case with floating-point numbers
  });

  // Additional cases for very small differences
  test('Triangle with very small difference in side lengths (Scalene)', () => {
      expect(classifyTriangle(10, 10.1, 10.2)).toBe('Scalene');
      // Very small differences in side lengths
  });

  // Testing with large numbers
  test('Large triangle with valid dimensions (Scalene)', () => {
      expect(classifyTriangle(150, 120, 170)).toBe('Scalene');
      // Large scalene triangle
  });
  // Testing for extremely close but not equal side lengths (Isosceles)
test('Nearly Equilateral but actually Isosceles triangle', () => {
  expect(classifyTriangle(10, 10, 9.999)).toBe('Isosceles');
  // Very close to an equilateral triangle but still isosceles
});

// Testing for precision limits (Scalene)
test('Scalene triangle with high precision floating-point numbers', () => {
  expect(classifyTriangle(10.1234, 12.3456, 14.5678)).toBe('Scalene');
  // High precision floating-point numbers
});

// Testing zero as a boundary condition
test('Triangle with all sides zero', () => {
  expect(classifyTriangle(0, 0, 0)).toBe('Error: Input conditions C1, C2, or C3 failed.');
  // All sides are zero, which is invalid
});

// Testing with large equal sides and a small third side (Isosceles)
test('Large Isosceles triangle with a very small third side', () => {
  expect(classifyTriangle(1000, 1000, 1)).toBe('Isosceles');
  // Large isosceles triangle with a very small third side
});

// Testing for degenerate triangle cases
test('Degenerate triangle with sum of two sides equal to the third (Scalene)', () => {
  expect(classifyTriangle(1, 2, 3)).toBe('Not a Triangle');
  // Degenerate triangle
});

// Testing with extremely large numbers
test('Very large Scalene triangle', () => {
  expect(classifyTriangle(100000, 200000, 300000)).toBe('Scalene');
  // Extremely large scalene triangle
});

// Testing with very small but non-zero side lengths (Scalene)
test('Very small Scalene triangle', () => {
  expect(classifyTriangle(0.1, 0.2, 0.3)).toBe('Scalene');
  // Very small scalene triangle
});

// Testing Equilateral triangles with boundary values
test('Equilateral triangle with floating-point boundary value', () => {
  expect(classifyTriangle(0.000001, 0.000001, 0.000001)).toBe('Equilateral');
  // Small equilateral triangle with floating-point values
});

// Testing for input types other than numbers
test('Triangle with non-numeric inputs', () => {
  expect(classifyTriangle("10", "10", "10")).toBe('Error: Input conditions C1, C2, or C3 failed.');
  // Non-numeric inputs
});

// Testing with one very long side and two short sides (Not a Triangle)
test('Long side with two very short sides', () => {
  expect(classifyTriangle(100, 0.1, 0.1)).toBe('Not a Triangle');
  // One very long side and two short sides, not forming a triangle
});

// Testing negative boundary values
test('Triangle with negative and positive side lengths', () => {
  expect(classifyTriangle(-10, 10, 10)).toBe('Error: Input conditions C1, C2, or C3 failed.');
  // Negative and positive side lengths
});

// Testing with one side much larger than the other two (Not a Triangle)
test('One side significantly larger than the sum of the other two', () => {
  expect(classifyTriangle(50, 10, 10)).toBe('Not a Triangle');
  // One side too long to form a triangle
});

// Testing for inputs that are numbers but not integers
test('Triangle with floating-point inputs that should form a Scalene triangle', () => {
  expect(classifyTriangle(10.5, 10.4, 10.3)).toBe('Scalene');
  // Floating-point inputs forming a scalene triangle
});
  });
  