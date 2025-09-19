import * as v from "valibot";
import { StandardTagSchema } from "../../common";
import { AttrCommonSchema } from "../../shared";
import { AttrFacsimileSchema } from "../../facsimile";
import { AttrHairpinAnlSchema } from "../../analytical";
import { AttrHairpinGesSchema } from "../../gestural";
import { AttrHairpinLogSchema } from "..";
import { AttrHairpinVisSchema } from "../../visual";

/**
 * Base schema with attribute, to simplify types for HairpinSchema
 */
const HairpinBaseSchema = v.object({
	...StandardTagSchema.entries,
	...AttrCommonSchema.entries,
	...AttrFacsimileSchema.entries,
	...AttrHairpinAnlSchema.entries,
	...AttrHairpinGesSchema.entries,
	...AttrHairpinLogSchema.entries,
	...AttrHairpinVisSchema.entries,
});

/**
 * Indicates continuous dynamics expressed on the score as wedge-shaped graphics, <abbr>e.g.</abbr>, &lt; and &gt;.
 * @see https://music-encoding.org/guidelines/v5/elements/hairpin.html
 */
export const HairpinSchema = v.intersect([HairpinBaseSchema]);

export type HairpinData = v.InferOutput<typeof HairpinSchema>;
