import * as Browser from "@hyperjump/browser";


const id = "https://spec.openapis.org/oas/3.0/keyword/nullable";

const compile = (schema) => Browser.value(schema);

const interpret = () => true;

export default { id, compile, interpret };
