abstract class BaseTest {
    protected testName: string;
    constructor(testName: string) {
        this.testName = testName;
    }

    abstract setup(): void;
    abstract execute(): void;
    abstract teardown(): void;
}

class UITest extends BaseTest {
    setup(): void {
        console.log("  Setup: launch browser");
    }
    execute(): void {
        console.log("  Execute: click buttons, fill forms");
    }
    teardown(): void {
        console.log("  Teardown: close browser");
    }
}

class APITest extends BaseTest {
    setup(): void {
        console.log("  Setup: initialize API client");
    }   
    execute(): void {
        console.log("  Execute: send API requests");
    }
    teardown(): void {
        console.log("  Teardown: clean up API client");
    }
}

function runTest(test: BaseTest) {
    console.log(`Running test: ${test.testName}`);
    test.setup();
    test.execute();
    test.teardown();
}   

const uiTest = new UITest("Login Page Test");
const apiTest = new APITest("User API Test");
runTest(uiTest);
runTest(apiTest);   

