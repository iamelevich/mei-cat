import * as v from "valibot";
import { AttrLiquescentAnlSchema } from "../../analytical";
import { StandardTagSchema } from "../../common";
import { AttrFacsimileSchema } from "../../facsimile";
import { AttrLiquescentGesSchema } from "../../gestural";
import { AttrCommonSchema } from "../../shared";
import { AttrLiquescentVisSchema } from "../../visual";
import { AttrLiquescentLogSchema } from "..";

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
