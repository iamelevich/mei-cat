import * as v from "valibot";
import { StandardTagSchema } from "../../common";
import { AttrCommonSchema } from "../../shared";
import { AttrFacsimileSchema } from "../../facsimile";
import { AttrQuilismaAnlSchema } from "../../analytical";
import { AttrQuilismaGesSchema } from "../../gestural";
import { AttrQuilismaLogSchema } from "..";
import { AttrQuilismaVisSchema } from "../../visual";

/**
 * Base schema with attribute, to simplify types for QuilismaSchema
 */
const QuilismaBaseSchema = v.object({
	...StandardTagSchema.entries,
	...AttrCommonSchema.entries,
	...AttrFacsimileSchema.entries,
	...AttrQuilismaAnlSchema.entries,
	...AttrQuilismaGesSchema.entries,
	...AttrQuilismaLogSchema.entries,
	...AttrQuilismaVisSchema.entries,
});

/**
 * Quilisma.
 * @see https://music-encoding.org/guidelines/v5/elements/quilisma.html
 */
export const QuilismaSchema = v.intersect([QuilismaBaseSchema]);

export type QuilismaData = v.InferOutput<typeof QuilismaSchema>;
