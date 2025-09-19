import * as v from "valibot";
import { AttrLineAnlSchema } from "../../analytical";
import { StandardTagSchema } from "../../common";
import { AttrFacsimileSchema } from "../../facsimile";
import { AttrLineGesSchema } from "../../gestural";
import {
	AttrCommonSchema,
	ModelTextPhraseLikeLimitedSchema,
} from "../../shared";
import { AttrLineVisSchema } from "../../visual";
import { AttrLineLogSchema } from "..";

/**
 * Base schema with attribute, to simplify types for LineSchema
 */
const LineBaseSchema = v.object({
	...StandardTagSchema.entries,
	...AttrCommonSchema.entries,
	...AttrFacsimileSchema.entries,
	...AttrLineAnlSchema.entries,
	...AttrLineGesSchema.entries,
	...AttrLineLogSchema.entries,
	...AttrLineVisSchema.entries,
});

/**
 * A visual line that cannot be represented by a more specific; <abbr>i.e.</abbr>, semantic, element.
 * @see https://music-encoding.org/guidelines/v5/elements/line.html
 */
export const LineSchema = v.intersect([
	LineBaseSchema,
	ModelTextPhraseLikeLimitedSchema,
]);

export type LineData = v.InferOutput<typeof LineSchema>;
