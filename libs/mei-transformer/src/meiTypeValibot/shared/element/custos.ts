import * as v from "valibot";
import { AttrCustosAnlSchema } from "../../analytical/attr/custos.anl";
import { StandardTagSchema } from "../../common";
import { AttrFacsimileSchema } from "../../facsimile/attr/facsimile";
import { AttrCustosGesSchema } from "../../gestural/attr/custos.ges";
import { AttrCustosVisSchema } from "../../visual/attr/custos.vis";
import { AttrCommonSchema } from "../attr/common";
import { AttrCustosLogSchema } from "../attr/custos.log";
import { AttrSourceSchema } from "../attr/source";
import { AccidSchema } from "../element/accid";

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
export const CustosSchema = v.lazy(() =>
	v.intersect([
		CustosBaseSchema,
		v.object({
			/**
			 * Reference to element accid
			 * @see https://music-encoding.org/guidelines/v5/elements/accid.html
			 */
			accid: v.optional(v.union([v.array(AccidSchema), AccidSchema])),
		}),
	]),
);

export type CustosData = v.InferOutput<typeof CustosSchema>;
