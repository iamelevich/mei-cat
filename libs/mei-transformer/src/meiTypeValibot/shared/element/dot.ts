import * as v from "valibot";
import { AttrDotAnlSchema } from "../../analytical";
import { StandardTagSchema } from "../../common";
import { AttrFacsimileSchema } from "../../facsimile";
import { AttrDotGesSchema } from "../../gestural";
import { AttrDotVisSchema } from "../../visual";
import { AttrCommonSchema, AttrDotLogSchema } from "..";

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
