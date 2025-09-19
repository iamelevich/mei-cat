import * as v from "valibot";
import { StandardTagSchema } from "../../common";
import { AttrCommonSchema, AttrPadLogSchema } from "..";
import { AttrPadAnlSchema } from "../../analytical";
import { AttrPadGesSchema } from "../../gestural";
import { AttrPadVisSchema } from "../../visual";

/**
 * Base schema with attribute, to simplify types for PadSchema
 */
const PadBaseSchema = v.object({
	...StandardTagSchema.entries,
	...AttrCommonSchema.entries,
	...AttrPadAnlSchema.entries,
	...AttrPadGesSchema.entries,
	...AttrPadLogSchema.entries,
	...AttrPadVisSchema.entries,
});

/**
 * An indication of extra visual space between notational elements.
 * @see https://music-encoding.org/guidelines/v5/elements/pad.html
 */
export const PadSchema = v.intersect([PadBaseSchema]);

export type PadData = v.InferOutput<typeof PadSchema>;
