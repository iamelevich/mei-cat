import * as v from "valibot";
import { AttrHairpinAnlSchema } from "../analytical/attr/hairpin.anl";
import { StandardTagSchema } from "../common";
import { AttrFacsimileSchema } from "../facsimile";
import { AttrHairpinGesSchema } from "../gestural/attr/hairpin.ges";
import { AttrCommonSchema } from "../shared";
import { AttrHairpinVisSchema } from "../visual/attr/hairpin.vis";
import { AttrHairpinLogSchema } from "./attr/hairpin.log";

/**
 * Indicates continuous dynamics expressed on the score as wedge-shaped graphics, e.g. , < and >.
 * @see https://music-encoding.org/guidelines/v5/elements/hairpin.html
 */
export const HairpinSchema = v.object({
	...StandardTagSchema.entries,
	...AttrCommonSchema.entries,
	...AttrFacsimileSchema.entries,
	...AttrHairpinLogSchema.entries,
	...AttrHairpinVisSchema.entries,
	...AttrHairpinGesSchema.entries,
	...AttrHairpinAnlSchema.entries,
});

export type HairpinData = v.InferOutput<typeof HairpinSchema>;
