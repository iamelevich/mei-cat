import * as v from "valibot";
import { AttrStemAnlSchema } from "../../analytical";
import { StandardTagSchema } from "../../common";
import { AttrFacsimileSchema } from "../../facsimile";
import { AttrStemGesSchema } from "../../gestural";
import { AttrCommonSchema } from "../../shared";
import { AttrStemVisSchema } from "../../visual";
import { AttrStemLogSchema } from "..";

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
