import * as v from "valibot";
import { StandardTagSchema } from "../../common";
import { AttrClefGrpAnlSchema } from "../../analytical";
import { AttrClefGrpGesSchema } from "../../gestural";
import { AttrClefGrpLogSchema, AttrCommonSchema, AttrEventSchema } from "..";
import { AttrClefGrpVisSchema } from "../../visual";
import { AttrFacsimileSchema } from "../../facsimile";
import { ClefSchema } from ".";

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
export const ClefGrpSchema = v.intersect([
	ClefGrpBaseSchema,
	v.object({
		/**
		 * Reference to element clef
		 * @see https://music-encoding.org/guidelines/v5/elements/clef.html
		 */
		clef: v.union([
			v.lazy(() => ClefSchema),
			v.array(v.lazy(() => ClefSchema)),
		]),
	}),
]);

export type ClefGrpData = v.InferOutput<typeof ClefGrpSchema>;
