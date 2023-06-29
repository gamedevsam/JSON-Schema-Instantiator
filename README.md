# JSON-Schema-Instantiator

A simple tool for instantiating JSON Schemas.

## Installing

```
npm install @gamedevsam/json-schema-instantiator
```

## Using

```javascript
// CommonJS (default export)
var instantiator = require('@gamedevsam/json-schema-instantiator').default;
// CommonJS (named export)
var { instanciate } = require('@gamedevsam/json-schema-instantiator');

// ESModules (default export)
import instanciator from '@gamedevsam/json-schema-instantiator';
// ESModules (named export)
import { instanciate } from '@gamedevsam/json-schema-instantiator';
...

var schema = {
    "type": "object",
    "properties": {
        "title": {
            "type": "string",
            "default": "Example"
        },
        "description": {
            "type": "string"
        },
        "quantity": {
            "type": "number"
        },
        "endDate": {
            "type": "string",
            "format": "date"
        }
    },
    "required": ["title"]
};

instance = instantiate(schema);
// instance === { title: "Example", description: "", quantity: 0, endDate: "" }

instance = instantiate(schema, {requiredPropertiesOnly: false});
// instance === { title: "Example", description: "", quantity: 0, endDate: "" }

instance = instantiate(schema, {requiredPropertiesOnly: true});
// instance === { title: "Example" }

// Override default values for a given type with a static value
instance = instantiate(schema, { defaults: { number: 42 } });
// instance === { title: "Example", description: "", quantity: 42, endDate: "" }

// Override default values for a given type function that returns a value
instance = instantiate(schema, {
  defaults: {
    // Function that receives current property/val and returns a value
    string: function (val) {
      var format = val.format;

      if (format && format === "date") {
        return new Date(2021, 0, 1);
      }

      return "";
    },
  },
});
// instance === { title: "Example", description: "", quantity: 0, endDate: new Date(2021, 0, 1) }
```
