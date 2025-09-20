import * as v from "valibot";
import { AttrBarLineAnlSchema } from "../../analytical/attr/barLine.anl";
import { StandardTagSchema } from "../../common";
import { AttrFacsimileSchema } from "../../facsimile/attr/facsimile";
import { AttrBarLineGesSchema } from "../../gestural/attr/barLine.ges";
import { AttrBarLineVisSchema } from "../../visual/attr/barLine.vis";
import { AttrBarLineLogSchema } from "../attr/barLine.log";
import { AttrCommonSchema } from "../attr/common";
import { AttrPointingSchema } from "../attr/pointing";
import { AttrTargetEvalSchema } from "../attr/targetEval";

/**
 * Base schema with attribute, to simplify types for BarLineSchema
 */
const BarLineBaseSchema = v.object({
	...StandardTagSchema.entries,
	...AttrBarLineAnlSchema.entries,
	...AttrBarLineGesSchema.entries,
	...AttrBarLineLogSchema.entries,
	...AttrBarLineVisSchema.entries,
	...AttrCommonSchema.entries,
	...AttrFacsimileSchema.entries,
	...AttrPointingSchema.entries,
	...AttrTargetEvalSchema.entries,
});

/**
 * Vertical line drawn through one or more staves that divides musical notation into metrical units.
 * @see https://music-encoding.org/guidelines/v5/elements/barLine.html
 */
export const BarLineSchema = v.lazy(() => v.intersect([BarLineBaseSchema]));

export type BarLineData = v.InferOutput<typeof BarLineSchema>;
