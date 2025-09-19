import * as v from "valibot";
import { StandardTagSchema } from "../../common";
import { AttrCommonSchema } from "../../shared";
import { AttrFacsimileSchema } from "../../facsimile";
import { AttrLiquescentAnlSchema } from "../../analytical";
import { AttrLiquescentGesSchema } from "../../gestural";
import { AttrLiquescentLogSchema } from "..";
import { AttrLiquescentVisSchema } from "../../visual";

/**
 * Base schema with attribute, to simplify types for LiquescentSchema
 */
const LiquescentBaseSchema = v.object({
	...StandardTagSchema.entries,
	...AttrCommonSchema.entries,
	...AttrFacsimileSchema.entries,
	...AttrLiquescentAnlSchema.entries,
	...AttrLiquescentGesSchema.entries,
	...AttrLiquescentLogSchema.entries,
	...AttrLiquescentVisSchema.entries,
});

/**
 * Liquescent.
 * @see https://music-encoding.org/guidelines/v5/elements/liquescent.html
 */
export const LiquescentSchema = v.intersect([LiquescentBaseSchema]);

export type LiquescentData = v.InferOutput<typeof LiquescentSchema>;
