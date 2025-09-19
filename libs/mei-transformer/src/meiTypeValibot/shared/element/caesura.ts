import * as v from "valibot";
import { AttrCaesuraAnlSchema } from "../../analytical";
import { StandardTagSchema } from "../../common";
import { AttrFacsimileSchema } from "../../facsimile";
import { AttrCaesuraGesSchema } from "../../gestural";
import { AttrCaesuraVisSchema } from "../../visual";
import { AttrCaesuraLogSchema, AttrCommonSchema } from "..";

/**
 * Base schema with attribute, to simplify types for CaesuraSchema
 */
const CaesuraBaseSchema = v.object({
	...StandardTagSchema.entries,
	...AttrCaesuraAnlSchema.entries,
	...AttrCaesuraGesSchema.entries,
	...AttrCaesuraLogSchema.entries,
	...AttrCaesuraVisSchema.entries,
	...AttrCommonSchema.entries,
	...AttrFacsimileSchema.entries,
});

/**
 * Break, pause, or interruption in the normal tempo of a composition. Typically indicated by "railroad tracks", <abbr>i.e.</abbr>, two diagonal slashes.
 * @see https://music-encoding.org/guidelines/v5/elements/caesura.html
 */
export const CaesuraSchema = v.intersect([CaesuraBaseSchema]);

export type CaesuraData = v.InferOutput<typeof CaesuraSchema>;
