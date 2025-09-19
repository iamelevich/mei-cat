import * as v from "valibot";
import { StandardTagSchema } from "../../common";
import { AttrCommonSchema } from "../../shared";
import { AttrFacsimileSchema } from "../../facsimile";
import { AttrStemAnlSchema } from "../../analytical";
import { AttrStemGesSchema } from "../../gestural";
import { AttrStemLogSchema } from "..";
import { AttrStemVisSchema } from "../../visual";

/**
 * Base schema with attribute, to simplify types for StemSchema
 */
const StemBaseSchema = v.object({
	...StandardTagSchema.entries,
	...AttrCommonSchema.entries,
	...AttrFacsimileSchema.entries,
	...AttrStemAnlSchema.entries,
	...AttrStemGesSchema.entries,
	...AttrStemLogSchema.entries,
	...AttrStemVisSchema.entries,
});

/**
 * A stem element.
 * @see https://music-encoding.org/guidelines/v5/elements/stem.html
 */
export const StemSchema = v.intersect([StemBaseSchema]);

export type StemData = v.InferOutput<typeof StemSchema>;
