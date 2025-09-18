import * as v from "valibot";

/**
 * Attributes for melodicFunction.
 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.melodicFunction.html
 */
export const AttrMelodicFunctionSchema = v.object({
  // TODO: Add melodicFunction attributes
});

export type AttrMelodicFunctionData = v.InferOutput<typeof AttrMelodicFunctionSchema>;
