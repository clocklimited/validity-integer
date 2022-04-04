# validity-integer

Validity style validator to ensure a property is an integer

## Installation

```
npm install @clocklimited/validity-integer --save
```

## Usage

Below is a simple example for usage with schemata and save:

``` js
var isInteger = require('@clocklimited/validity-integer')
  , schemata = require('schemata')

var schema = schemata(
    { width:
      { type: Number
      , validators: { [ isInteger ] }
      }
    })
```
