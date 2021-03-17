# Matatau

## Steps used to create this project

- Install Amplify CLI tool
- `npx create-react-app matatau --template typescript`
- `mv README.md CRA_README.md; touch README.md`
- In CRA_README.md `:%s/yarn/npm`
- `amplify init`
  - ? Enter a name for the project: `matatau`
  - ? Enter a name for the environment: `dev`
  - ? Choose your default editor: _Visual Studio Code_
  - ? Choose the type of app that you're building: `javascript`
  - ? What JavaScript framework are you using: `react`
  - ? Source Directory Path: `src`
  - ? Distribution Directory Path: `build`
  - ? Build Command: `npm run-script build`
  - ? Start Command: `npm run-script start`
- `amplify add api` (with API Gateway and DynamoDB)
  - ? Please select from one of the below mentioned services: `REST`
  - ? Provide a friendly name for your resource to be used as a label for this category in the project: `matatauapi`
  - ? Provide a path (e.g., /book/{isbn}): `/assessments`
  - ? Choose a Lambda source: _Create a new Lambda function_
  - ? Provide an AWS Lambda function name: `getAssessments`
  - ? Choose the runtime that you want to use: _NodeJS_
  - ? Choose the function template that you want to use: _CRUD function for DynamoDB (Integration with API Gateway)_
  - ? Choose a DynamoDB data source option: _Create a new DynamoDB table_
  - ? Please provide a friendly name for your resource that will be used to label this category in the project: `matataudb`
  - ? Please provide table name: `matatautable`
  - ? What would you like to name this column: `PK`
  - ? Please choose the data type: `string`
  - ? Would you like to add another column? _No_
  - ? Please choose partition key for the table: `PK`
  - ? Do you want to add a sort key to your table? _Yes_
  - ? Do you want to add global secondary indexes to your table? _No_
  - ? Do you want to add a Lambda Trigger for your Table? _No_
  - ? Do you want to configure advanced settings? _No_
  - ? Do you want to edit the local lambda function now? _No_
  - ? Restrict API access: _Yes_
  - ? Who should have access? _Authenticated users only_
  - ? What kind of access do you want for Authenticated users? `create`, `read`, `update`
  - ? Do you want to add another path? _No_
- `amplify add hosting` (with auto deployments)
  - ? Select the plugin module to execute: _Hosting with Amplify Console (Managed hosting with custom domains, Continuous deployment)_
  - ? Choose a type: _Continuous deployment (Git-based deployments)_

## UI Design

Current iteration of the UI design can be viewed using this link :)

- https://xd.adobe.com/view/33a2e735-367e-4e89-b465-bd69956a7634-66f1/
