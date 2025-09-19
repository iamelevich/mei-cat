import * as v from "valibot";
import { AttrClefGrpAnlSchema } from "../../analytical/attr/clefGrp.anl";
import { StandardTagSchema } from "../../common";
import { AttrFacsimileSchema } from "../../facsimile/attr/facsimile";
import { AttrClefGrpGesSchema } from "../../gestural/attr/clefGrp.ges";
import { AttrClefGrpVisSchema } from "../../visual/attr/clefGrp.vis";
import { AttrClefGrpLogSchema } from "../attr/clefGrp.log";
import { AttrCommonSchema } from "../attr/common";
import { AttrEventSchema } from "../attr/event";
import { ClefSchema } from "../element/clef";

/**
 * Base schema with attribute, to simplify types for ClefGrpSchema
 */
const ClefGrpBaseSchema = v.object({
	...StandardTagSchema.entries,
	...AttrClefGrpAnlSchema.entries,
	...AttrClefGrpGesSchema.entries,
	...AttrClefGrpLogSchema.entries,
	...AttrClefGrpVisSchema.entries,
	...AttrCommonSchema.entries,
	...AttrEventSchema.entries,
	...AttrFacsimileSchema.entries,
});

/**
 * A set of simultaneously-occurring clefs.
 * @see https://music-encoding.org/guidelines/v5/elements/clefGrp.html
 */
export const ClefGrpSchema = v.lazy(() =>
	v.intersect([
		ClefGrpBaseSchema,
		v.object({
			/**
			 * Reference to element clef
			 * @see https://music-encoding.org/guidelines/v5/elements/clef.html
			 */
			clef: v.union([v.array(ClefSchema), ClefSchema]),
		}),
	]),
);

export type ClefGrpData = v.InferOutput<typeof ClefGrpSchema>;
