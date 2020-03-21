const { Schema, Instance } = require("@hyperjump/json-schema-core");


const compile = async (schema) => {
  let isExclusive;
  try {
    const exclusiveMaximum = await Schema.sibling("exclusiveMaximum", schema);
    const value = Schema.value(exclusiveMaximum);
    isExclusive = typeof value === "boolean" ? value : false;
  } catch (error) {
    isExclusive = false;
  }
  return [Schema.value(schema), isExclusive];
};

const interpret = ([maximum, isExclusive], instance) => {
  const value = Instance.value(instance);
  if (typeof value !== "number") {
    return true;
  }

  return isExclusive ? value < maximum : value <= maximum;
};

module.exports = { compile, interpret };