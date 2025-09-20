import * as v from "valibot";
import { StandardTagSchema } from "../../common";
import { AttrFacsimileSchema } from "../../facsimile/attr/facsimile";
import { AttrCommonSchema } from "../attr/common";
import { AttrSourceSchema } from "../attr/source";

/**
 * Base schema with attribute, to simplify types for LbSchema
 */
const LbBaseSchema = v.object({
	...StandardTagSchema.entries,
	...AttrCommonSchema.entries,
	...AttrFacsimileSchema.entries,
	...AttrSourceSchema.entries,
});

/**
 * An empty formatting element that forces text to begin on a new line.
 * @see https://music-encoding.org/guidelines/v5/elements/lb.html
 */
export const LbSchema = v.lazy(() => v.intersect([LbBaseSchema]));

export type LbData = v.InferOutput<typeof LbSchema>;
