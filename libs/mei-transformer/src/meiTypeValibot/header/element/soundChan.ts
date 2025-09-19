import * as v from "valibot";
import { StandardTagSchema } from "../../common";
import {
	AttrAuthorizedSchema,
	AttrBiblSchema,
	AttrCommonSchema,
	AttrLangSchema,
	ModelTextPhraseLikeLimitedSchema,
} from "../../shared";

/**
 * Base schema with attribute, to simplify types for SoundChanSchema
 */
const SoundChanBaseSchema = v.object({
	...StandardTagSchema.entries,
	...AttrAuthorizedSchema.entries,
	...AttrBiblSchema.entries,
	...AttrCommonSchema.entries,
	...AttrLangSchema.entries,

	// Direct attributes
	/**
	 * Records the channel configuration in numeric form.
	 */
	"@num": v.optional(v.string()),
});

/**
 * Reflects the number of apparent sound channels in the playback of a recording (monaural, stereophonic, quadraphonic, etc.).
 * @see https://music-encoding.org/guidelines/v5/elements/soundChan.html
 */
export const SoundChanSchema = v.intersect([
	SoundChanBaseSchema,
	ModelTextPhraseLikeLimitedSchema,
]);

export type SoundChanData = v.InferOutput<typeof SoundChanSchema>;
