# Emails input
A js-library with input for emails.
## Demo example
You can see an example [here](https://galyulia.github.io/emails-input/)

## Usage
1. Link js bundle to your HTML document
    ```html
    <script src="emails-input.js"></script>
    ```

2. Define the element where the emails input will be rendered. Let's call this element - container.
    ```html
    <div class="form-example">
        ...
        <div class="form-emails-input" id="emails-input"></div>
    </div>
    ```
3. Pass this container element as a parameter to EmailsInput
    ```html
    <script>
        var inputContainerNode = document.querySelector('#emails-input');
        var emailsInput = EmailsInput(inputContainerNode);
    </script>
    ```

## EmailsInput API 
EmailsInput is the main component of the library. It takes one argument.  

| Property | Description | Type |
| -------- | ----------- | ---- | 
| container | html element where input will render | Element , `null` |

Returned value is an object and consists of fields

| Property | Description | Type | Example
| -------- | ----------- | ---- | ---- |
| inputRef | HTML id attribute of emails input | string | `ref_a7jodjdw7`|
| getValidEmailsCount | function that returns valid emails count  | () => number | |
| addEmail | function for adding emails  | (value: string) => void | |

### Development
For local installation it's necessary to install [Node](https://nodejs.org/en/). 
#### Instal dependencies
To install dependencies run the command below in the root folder of the project
```
yarn
```
or 
```
npm install
```
#### Build library
```
yarn build
```
#### Launch demo-example
To launch demo-example run
```
yarn serve
```
or to rebuild the library before running
```
yarn serve:dev
```

The project will be hosted on http://localhost:5000

#### Run tests
```
yarn test
```