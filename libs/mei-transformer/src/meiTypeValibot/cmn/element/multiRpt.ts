import * as v from "valibot";
import { StandardTagSchema } from "../../common";
import { AttrCommonSchema } from "../../shared";
import { AttrFacsimileSchema } from "../../facsimile";
import { AttrMultiRptAnlSchema } from "../../analytical";
import { AttrMultiRptGesSchema } from "../../gestural";
import { AttrMultiRptLogSchema } from "..";
import { AttrMultiRptVisSchema } from "../../visual";

/**
 * Base schema with attribute, to simplify types for MultiRptSchema
 */
const MultiRptBaseSchema = v.object({
	...StandardTagSchema.entries,
	...AttrCommonSchema.entries,
	...AttrFacsimileSchema.entries,
	...AttrMultiRptAnlSchema.entries,
	...AttrMultiRptGesSchema.entries,
	...AttrMultiRptLogSchema.entries,
	...AttrMultiRptVisSchema.entries,
});

/**
 * Multiple repeated measures.
 * @see https://music-encoding.org/guidelines/v5/elements/multiRpt.html
 */
export const MultiRptSchema = v.intersect([MultiRptBaseSchema]);

export type MultiRptData = v.InferOutput<typeof MultiRptSchema>;
