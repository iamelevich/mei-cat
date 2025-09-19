import * as v from "valibot";
import { StandardTagSchema } from "../../common";
import {
	AttrCommonSchema,
	ModelTextPhraseLikeLimitedSchema,
} from "../../shared";
import { AttrFacsimileSchema } from "../../facsimile";
import { AttrLineAnlSchema } from "../../analytical";
import { AttrLineGesSchema } from "../../gestural";
import { AttrLineLogSchema } from "..";
import { AttrLineVisSchema } from "../../visual";

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
