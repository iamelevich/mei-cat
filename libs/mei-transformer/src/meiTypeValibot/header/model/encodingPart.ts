import * as v from "valibot";

/**
 * Groups elements that represent encoding parts.
 * @see https://music-encoding.org/guidelines/v5/model-classes/model.encodingPart.html
 */
export const EncodingPartSchema = v.object({
  // TODO: Add encoding part elements
});

export type EncodingPartData = v.InferOutput<typeof EncodingPartSchema>;
