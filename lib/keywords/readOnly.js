import * as Browser from "@hyperjump/browser";
import * as Instance from "../../annotations/annotated-instance.js";


const id = "https://json-schema.org/keyword/readOnly";

const description = "This keyword indicates that the value of the instance is managed exclusively by the owning authority, and attempts by an application to modify the value of this property are expected to be ignored or rejected by that owning authority. Read more: https://www.learnjsonschema.com/2020-12/meta-data/readonly/";

const compile = (schema) => Browser.value(schema);

const interpret = (readOnly, instance, _ast, _dynamicAnchors, _quiet, schemaLocation) => {
  Instance.setAnnotation(instance, id, schemaLocation, readOnly);
  return true;
};

export default { id, description, compile, interpret };
