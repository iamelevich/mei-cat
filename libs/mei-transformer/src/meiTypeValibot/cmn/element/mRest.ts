import * as v from "valibot";
import { StandardTagSchema } from "../../common";
import { AttrCommonSchema } from "../../shared";
import { AttrFacsimileSchema } from "../../facsimile";
import { AttrMRestAnlSchema } from "../../analytical";
import { AttrMRestGesSchema } from "../../gestural";
import { AttrMRestLogSchema } from "..";
import { AttrMRestVisSchema } from "../../visual";

/**
 * Base schema with attribute, to simplify types for MRestSchema
 */
const MRestBaseSchema = v.object({
	...StandardTagSchema.entries,
	...AttrCommonSchema.entries,
	...AttrFacsimileSchema.entries,
	...AttrMRestAnlSchema.entries,
	...AttrMRestGesSchema.entries,
	...AttrMRestLogSchema.entries,
	...AttrMRestVisSchema.entries,
});

/**
 * Complete measure rest in any meter. <!-- (Read, p. 97-98). -->
 * @see https://music-encoding.org/guidelines/v5/elements/mRest.html
 */
export const MRestSchema = v.intersect([MRestBaseSchema]);

export type MRestData = v.InferOutput<typeof MRestSchema>;
