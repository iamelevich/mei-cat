import * as v from "valibot";
import { StandardTagSchema } from "../../common";
import { AttrCommonSchema, AttrCustosLogSchema, AttrSourceSchema } from "..";
import { AttrCustosAnlSchema } from "../../analytical";
import { AttrCustosGesSchema } from "../../gestural";
import { AttrCustosVisSchema } from "../../visual";
import { AttrFacsimileSchema } from "../../facsimile";
import { AccidSchema } from ".";

/**
 * Base schema with attribute, to simplify types for CustosSchema
 */
const CustosBaseSchema = v.object({
	...StandardTagSchema.entries,
	...AttrCommonSchema.entries,
	...AttrCustosAnlSchema.entries,
	...AttrCustosGesSchema.entries,
	...AttrCustosLogSchema.entries,
	...AttrCustosVisSchema.entries,
	...AttrFacsimileSchema.entries,
	...AttrSourceSchema.entries,
});

/**
 * Symbol placed at the end of a line of music to indicate the first note of the next line. Sometimes called a "direct".
 * @see https://music-encoding.org/guidelines/v5/elements/custos.html
 */
export const CustosSchema = v.intersect([
	CustosBaseSchema,
	v.object({
		/**
		 * Reference to element accid
		 * @see https://music-encoding.org/guidelines/v5/elements/accid.html
		 */
		accid: v.optional(
			v.union([v.lazy(() => AccidSchema), v.array(v.lazy(() => AccidSchema))]),
		),
	}),
]);

export type CustosData = v.InferOutput<typeof CustosSchema>;
