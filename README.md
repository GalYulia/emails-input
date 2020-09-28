# emails-input
A js-library with input for emails.
## Demo example


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
EmailsInput is the main class of library.  

| Property | Description | Type |
| -------- | ----------- | ---- | 
| container | html element where input will render | Element , `null` |

The return value id

### Development
For library local installation it's necessary to install [Node](https://nodejs.org/en/).
####Instal dependencies
To install dependencies run the command below in the root folder of the project
```
yarn
```
or 
```
npm install
```
####Build library
```
yarn build
```
####Launch demo-example
To launch demo-example run
```
yarn serve
```
or to rebuild the library before running
```
yarn serve:dev
```

The project will be hosted on http://localhost:5000