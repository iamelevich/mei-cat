import * as v from "valibot";
import { StandardTagSchema } from "../../common";
import { AttrCommonSchema, AttrRestLogSchema } from "..";
import { AttrFacsimileSchema } from "../../facsimile";
import { AttrRestAnlSchema } from "../../analytical";
import { AttrRestGesSchema } from "../../gestural";
import { AttrRestVisSchema } from "../../visual";
import { DotSchema } from ".";
import { ModelAppLikeSchema } from "../../critapp";
import {
	ModelEditLikeSchema,
	ModelTranscriptionLikeSchema,
} from "../../edittrans";

/**
 * Base schema with attribute, to simplify types for RestSchema
 */
const RestBaseSchema = v.object({
	...StandardTagSchema.entries,
	...AttrCommonSchema.entries,
	...AttrFacsimileSchema.entries,
	...AttrRestAnlSchema.entries,
	...AttrRestGesSchema.entries,
	...AttrRestLogSchema.entries,
	...AttrRestVisSchema.entries,
});

/**
 * A non-sounding event found in the source being transcribed.
 * @see https://music-encoding.org/guidelines/v5/elements/rest.html
 */
export const RestSchema = v.intersect([
	RestBaseSchema,
	v.object({
		/**
		 * Reference to element dot
		 * @see https://music-encoding.org/guidelines/v5/elements/dot.html
		 */
		dot: v.optional(
			v.union([v.lazy(() => DotSchema), v.array(v.lazy(() => DotSchema))]),
		),
	}),
	ModelAppLikeSchema,
	ModelEditLikeSchema,
	ModelTranscriptionLikeSchema,
]);

export type RestData = v.InferOutput<typeof RestSchema>;
