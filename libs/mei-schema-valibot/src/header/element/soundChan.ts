import * as v from "valibot";
import { StandardTagSchema } from "../../common";
import { AttrAuthorizedSchema } from "../../shared/attr/authorized";
import { AttrBiblSchema } from "../../shared/attr/bibl";
import { AttrCommonSchema } from "../../shared/attr/common";
import { AttrLangSchema } from "../../shared/attr/lang";
import { ModelTextPhraseLikeLimitedSchema } from "../../shared/model/textPhraseLike.limited";

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
export const SoundChanSchema = v.lazy(() =>
	v.intersect([SoundChanBaseSchema, ModelTextPhraseLikeLimitedSchema]),
);

export type SoundChanData = v.InferOutput<typeof SoundChanSchema>;
