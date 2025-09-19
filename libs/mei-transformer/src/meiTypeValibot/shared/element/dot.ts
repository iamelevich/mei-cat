import * as v from "valibot";
import { StandardTagSchema } from "../../common";
import { AttrCommonSchema, AttrDotLogSchema } from "..";
import { AttrDotAnlSchema } from "../../analytical";
import { AttrDotGesSchema } from "../../gestural";
import { AttrDotVisSchema } from "../../visual";
import { AttrFacsimileSchema } from "../../facsimile";

/**
 * Base schema with attribute, to simplify types for DotSchema
 */
const DotBaseSchema = v.object({
	...StandardTagSchema.entries,
	...AttrCommonSchema.entries,
	...AttrDotAnlSchema.entries,
	...AttrDotGesSchema.entries,
	...AttrDotLogSchema.entries,
	...AttrDotVisSchema.entries,
	...AttrFacsimileSchema.entries,
});

/**
 * Dot of augmentation or division.
 * @see https://music-encoding.org/guidelines/v5/elements/dot.html
 */
export const DotSchema = v.intersect([DotBaseSchema]);

export type DotData = v.InferOutput<typeof DotSchema>;
