import * as v from "valibot";
import { StandardTagSchema } from "../../common";
import { AttrCommonSchema } from "../../shared";
import { AttrFacsimileSchema } from "../../facsimile";
import { AttrTrillAnlSchema } from "../../analytical";
import { AttrTrillGesSchema } from "../../gestural";
import { AttrTrillLogSchema } from "..";
import { AttrTrillVisSchema } from "../../visual";

/**
 * Base schema with attribute, to simplify types for TrillSchema
 */
const TrillBaseSchema = v.object({
	...StandardTagSchema.entries,
	...AttrCommonSchema.entries,
	...AttrFacsimileSchema.entries,
	...AttrTrillAnlSchema.entries,
	...AttrTrillGesSchema.entries,
	...AttrTrillLogSchema.entries,
	...AttrTrillVisSchema.entries,
});

/**
 * Rapid alternation of a note with another (usually at the interval of a second above).
 * @see https://music-encoding.org/guidelines/v5/elements/trill.html
 */
export const TrillSchema = v.intersect([TrillBaseSchema]);

export type TrillData = v.InferOutput<typeof TrillSchema>;
