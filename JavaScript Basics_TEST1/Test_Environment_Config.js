//In CI/CD pipelines, tests run against different environments. 
// Write a JavaScript program using a switch statement that 
// takes an environment name stored in a variable and 
// prints the base URL, API key pattern, and timeout. 
// Use const for fixed values and let for the assembled config.

//Environments: dev, staging, qa, production/prod. 
// Each has different base URL, API key prefix, timeout, 
// and description.

const envConfig = {
    dev: {
        baseURL: "https://dev.api.example.com",
        apiKey: "DEV-12345",
        timeout: 5000,
        description: "Development environment for testing new features."
    },
    staging: {
        baseURL: "https://staging.api.example.com",
        apiKey: "STAGING-12345",
        timeout: 7000,
        description: "Staging environment for pre-production testing."
    },
    qa: {
        baseURL: "https://qa.api.example.com",
        apiKey: "QA-12345",
        timeout: 8000,
        description: "QA environment for testing features before production."
    },
    production: {
        baseURL: "https://prod.api.example.com",
        apiKey: "PROD-12345",
        timeout: 10000,
        description: "Production environment for live user traffic."
    }
};

let environment = "staging"; // Change this value to test different environments
let config;
switch (environment) {
    case "dev":
        config = envConfig.dev;
        break;
    case "staging":
        config = envConfig.staging;
        break;
    case "qa":
        config = envConfig.qa;
        break;
    case "prod":
        config = envConfig.production;
        break;
    default:
        console.log("Invalid environment specified.");
        break;
}
if (config) {
    console.log(`Environment: ${environment}`);
    console.log(`Base URL: ${config.baseURL}`);
    console.log(`API Key Pattern: ${config.apiKey}`);
    console.log(`Timeout: ${config.timeout}ms`);
    console.log(`Description: ${config.description}`);
}   

