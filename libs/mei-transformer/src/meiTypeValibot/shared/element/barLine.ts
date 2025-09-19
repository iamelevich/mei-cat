import * as v from "valibot";
import { StandardTagSchema } from "../../common";
import { AttrBarLineAnlSchema } from "../../analytical";
import { AttrBarLineGesSchema } from "../../gestural";
import {
	AttrBarLineLogSchema,
	AttrCommonSchema,
	AttrPointingSchema,
	AttrTargetEvalSchema,
} from "..";
import { AttrBarLineVisSchema } from "../../visual";
import { AttrFacsimileSchema } from "../../facsimile";

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
export const BarLineSchema = v.intersect([BarLineBaseSchema]);

export type BarLineData = v.InferOutput<typeof BarLineSchema>;
