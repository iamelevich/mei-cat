import * as v from "valibot";
import { AttrLiquescentAnlSchema } from "../../analytical/attr/liquescent.anl";
import { StandardTagSchema } from "../../common";
import { AttrFacsimileSchema } from "../../facsimile/attr/facsimile";
import { AttrLiquescentGesSchema } from "../../gestural/attr/liquescent.ges";
import { AttrCommonSchema } from "../../shared/attr/common";
import { AttrLiquescentVisSchema } from "../../visual/attr/liquescent.vis";
import { AttrLiquescentLogSchema } from "../attr/liquescent.log";

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
export const LiquescentSchema = v.lazy(() =>
	v.intersect([LiquescentBaseSchema]),
);

export type LiquescentData = v.InferOutput<typeof LiquescentSchema>;
