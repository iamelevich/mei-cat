import * as v from "valibot";
import { AttrSbAnlSchema } from "../../analytical";
import { StandardTagSchema } from "../../common";
import { AttrFacsimileSchema } from "../../facsimile";
import { AttrSbGesSchema } from "../../gestural";
import { AttrSbVisSchema } from "../../visual";
import { AttrCommonSchema, AttrSbLogSchema, AttrSourceSchema } from "..";

/**
 * Base schema with attribute, to simplify types for SbSchema
 */
const SbBaseSchema = v.object({
	...StandardTagSchema.entries,
	...AttrCommonSchema.entries,
	...AttrFacsimileSchema.entries,
	...AttrSbAnlSchema.entries,
	...AttrSbGesSchema.entries,
	...AttrSbLogSchema.entries,
	...AttrSbVisSchema.entries,
	...AttrSourceSchema.entries,
});

/**
 * An empty formatting element that forces musical notation to begin on a new line.
 * @see https://music-encoding.org/guidelines/v5/elements/sb.html
 */
export const SbSchema = v.intersect([SbBaseSchema]);

export type SbData = v.InferOutput<typeof SbSchema>;
