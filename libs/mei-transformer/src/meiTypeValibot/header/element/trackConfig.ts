import * as v from "valibot";
import { StandardTagSchema } from "../../common";
import {
	AttrAuthorizedSchema,
	AttrBiblSchema,
	AttrCommonSchema,
	AttrLangSchema,
	MacroStrucUnstrucContentSchema,
} from "../../shared";

/**
 * Base schema with attribute, to simplify types for TrackConfigSchema
 */
const TrackConfigBaseSchema = v.object({
	...StandardTagSchema.entries,
	...AttrAuthorizedSchema.entries,
	...AttrBiblSchema.entries,
	...AttrCommonSchema.entries,
	...AttrLangSchema.entries,

	// Direct attributes
	/**
	 * Records the track configuration in numeric form.
	 */
	"@num": v.optional(v.string()),
});

/**
 * Number of physical/input tracks on a sound medium (<abbr>e.g.</abbr>, eight track, twelve track).
 * @see https://music-encoding.org/guidelines/v5/elements/trackConfig.html
 */
export const TrackConfigSchema = v.intersect([
	TrackConfigBaseSchema,
	MacroStrucUnstrucContentSchema,
]);

export type TrackConfigData = v.InferOutput<typeof TrackConfigSchema>;
