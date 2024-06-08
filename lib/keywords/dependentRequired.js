import { pipe, asyncMap, asyncCollectArray } from "@hyperjump/pact";
import * as Browser from "@hyperjump/browser";
import * as Instance from "../instance.js";


const id = "https://json-schema.org/keyword/dependentRequired";

const compile = (schema) => pipe(
  Browser.entries(schema),
  asyncMap(([key, dependentRequired]) => [key, Browser.value(dependentRequired)]),
  asyncCollectArray
);

const interpret = (dependentRequired, instance) => {
  if (Instance.typeOf(instance) !== "object") {
    return true;
  }

  let isValid = true;
  for (const [propertyName, required] of dependentRequired) {
    if (Instance.has(propertyName, instance) && !required.every((key) => Instance.has(key, instance))) {
      isValid = false;
    }
  }

  return isValid;
};

const description = "The dependentRequired keyword specifies a conditional dependency between properties within an instance. Read more: https://www.learnjsonschema.com/2020-12/validation/dependentrequired/";

export default { id, compile, interpret, description };
