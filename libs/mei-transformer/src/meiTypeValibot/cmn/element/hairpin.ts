import * as v from "valibot";
import { AttrHairpinAnlSchema } from "../../analytical/attr/hairpin.anl";
import { StandardTagSchema } from "../../common";
import { AttrFacsimileSchema } from "../../facsimile/attr/facsimile";
import { AttrHairpinGesSchema } from "../../gestural/attr/hairpin.ges";
import { AttrCommonSchema } from "../../shared/attr/common";
import { AttrHairpinVisSchema } from "../../visual/attr/hairpin.vis";
import { AttrHairpinLogSchema } from "../attr/hairpin.log";

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
export const HairpinSchema = v.lazy(() => v.intersect([HairpinBaseSchema]));

export type HairpinData = v.InferOutput<typeof HairpinSchema>;
