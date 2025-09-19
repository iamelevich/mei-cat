import * as v from "valibot";
import { StandardTagSchema } from "../../common";
import {
	AttrCommonSchema,
	AttrOrnamLogSchema,
	ModelTextPhraseLikeLimitedSchema,
} from "..";
import { AttrFacsimileSchema } from "../../facsimile";
import { AttrOrnamAnlSchema } from "../../analytical";
import { AttrOrnamGesSchema } from "../../gestural";
import { AttrOrnamVisSchema } from "../../visual";
import {
	ModelEditLikeSchema,
	ModelTranscriptionLikeSchema,
} from "../../edittrans";
import { ModelGraphicPrimitiveLikeSchema } from "../../usersymbols";

/**
 * Base schema with attribute, to simplify types for OrnamSchema
 */
const OrnamBaseSchema = v.object({
	...StandardTagSchema.entries,
	...AttrCommonSchema.entries,
	...AttrFacsimileSchema.entries,
	...AttrOrnamAnlSchema.entries,
	...AttrOrnamGesSchema.entries,
	...AttrOrnamLogSchema.entries,
	...AttrOrnamVisSchema.entries,
});

/**
 * An element indicating an ornament that is not a mordent, turn, or trill.
 * @see https://music-encoding.org/guidelines/v5/elements/ornam.html
 */
export const OrnamSchema = v.intersect([
	OrnamBaseSchema,
	ModelEditLikeSchema,
	ModelGraphicPrimitiveLikeSchema,
	ModelTextPhraseLikeLimitedSchema,
	ModelTranscriptionLikeSchema,
]);

export type OrnamData = v.InferOutput<typeof OrnamSchema>;
