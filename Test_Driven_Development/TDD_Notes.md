## Using assertations in programming

### Assertions with JUnit framework
    assertEquals(arg1, arg2);
	   assertEquals(1, 2); //fail, error
	   assertEquals(1, 1); //pass, do nothing
    assertArrayEquals(array1, array2);
    assertNotNull(obj1);
    assertNull(obj1);
    assertSame(obj1, obj2);
    assertNotSame(obj1, obj2);
    assertTrue(condition);
    assertFalse(condition);

red(fail)/green(success)/refactor(edit codes to get success)

### TDD in a nutshell

1. Write a test
2. Watch the test fail
3. Write apllication logic - as simple as possible
4. Pass the test
5. Refactor, removing duplication
6. Pass the test agile

### Naming unit tests

JUnit: Annotation @test or test methods start with testXXX

```
    public void testDeposit() {
        BankAccount acc = new BankAccount();    //Arrange
        acc.deposit(50);                        //Act
        assertEquals(acc.getBalance(), 50);     //Assert
    }

```

__setUp() & tearDown() come before and after every single test method__
```
    @before
    setUp();
    @test
    testDeposit();
    @after
    tearDown();
```
######  
```
    @before
    setUp();
    @test
    testWithdraw();
    @after
    tearDown();
```

__setUpBeforeClass() & tearDownAfterClass()__
#### *setUp() would be used most often

## Common questions

No need to test all the setters and getters, only test the logic

## Reasons for Mock objects

- Real object hasn't been written
- UI/human interaction
- Slow or difficult to set up
- External resource: file system, database, network, printer
- Non-deterministic behavior

__Mock objects frameworks:__
[jMock](jmock.org)
[easyMock](easymock.org)
mockito

__Code coverage__: classes, methods

## TDD Recommendations

- One test case / test fixture for each class
- 3-5 test methods for each class method
    + if too many test methods for one method, then the method must have too much responsibility and should be split up
    + if only one test method for each class method, then where is your logic and conditions, and are you actually testing them. 
- A test for every branch
    + if/else/and/or/case/for/while/polymorphism
- use code coverage tools
- Avoid 
    + interact with real database or file system
    + require non-trivial network communication
    + require environment changes to run
    + call complex collaborator objects
