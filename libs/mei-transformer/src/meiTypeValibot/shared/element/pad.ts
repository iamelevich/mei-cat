import * as v from "valibot";
import { AttrPadAnlSchema } from "../../analytical";
import { StandardTagSchema } from "../../common";
import { AttrPadGesSchema } from "../../gestural";
import { AttrPadVisSchema } from "../../visual";
import { AttrCommonSchema, AttrPadLogSchema } from "..";

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
