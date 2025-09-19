import * as v from "valibot";
import { AttrMSpaceAnlSchema } from "../../analytical";
import { StandardTagSchema } from "../../common";
import { AttrFacsimileSchema } from "../../facsimile";
import { AttrMSpaceGesSchema } from "../../gestural";
import { AttrCommonSchema } from "../../shared";
import { AttrMSpaceVisSchema } from "../../visual";
import { AttrMSpaceLogSchema } from "..";

/**
 * Base schema with attribute, to simplify types for MSpaceSchema
 */
const MSpaceBaseSchema = v.object({
	...StandardTagSchema.entries,
	...AttrCommonSchema.entries,
	...AttrFacsimileSchema.entries,
	...AttrMSpaceAnlSchema.entries,
	...AttrMSpaceGesSchema.entries,
	...AttrMSpaceLogSchema.entries,
	...AttrMSpaceVisSchema.entries,
});

/**
 * A measure containing only empty space in any meter.
 * @see https://music-encoding.org/guidelines/v5/elements/mSpace.html
 */
export const MSpaceSchema = v.intersect([MSpaceBaseSchema]);

export type MSpaceData = v.InferOutput<typeof MSpaceSchema>;
