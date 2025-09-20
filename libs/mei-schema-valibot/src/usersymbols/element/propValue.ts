import * as v from "valibot";
import { StandardTagSchema } from "../../common";
import { AttrCommonSchema } from "../../shared/attr/common";

/**
 * Base schema with attribute, to simplify types for PropValueSchema
 */
const PropValueBaseSchema = v.object({
	...StandardTagSchema.entries,
	...AttrCommonSchema.entries,
});

/**
 * A single property value.
 * @see https://music-encoding.org/guidelines/v5/elements/propValue.html
 */
export const PropValueSchema = v.lazy(() => v.intersect([PropValueBaseSchema]));

export type PropValueData = v.InferOutput<typeof PropValueSchema>;
