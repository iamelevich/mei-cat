import * as v from "valibot";
import { StandardTagSchema } from "../../common";
import { AttrFacsimileSchema } from "../../facsimile";
import {
	AttrBiblSchema,
	AttrCommonSchema,
	AttrLangSchema,
	MacroStrucUnstrucContentSchema,
} from "../../shared";

/**
 * Base schema with attribute, to simplify types for PerfDurationSchema
 */
const PerfDurationBaseSchema = v.object({
	...StandardTagSchema.entries,
	...AttrBiblSchema.entries,
	...AttrCommonSchema.entries,
	...AttrFacsimileSchema.entries,
	...AttrLangSchema.entries,

	// Direct attributes
	/**
	 * Holds a W3C duration value, <abbr>e.g.</abbr>, "PT2H34M45.67S".
	 */
	"@isodur": v.optional(v.string()),
});

/**
 * Used to express the duration of performance of printed or manuscript music or the playing time for a sound recording, videorecording, etc.
 * @see https://music-encoding.org/guidelines/v5/elements/perfDuration.html
 */
export const PerfDurationSchema = v.intersect([
	PerfDurationBaseSchema,
	MacroStrucUnstrucContentSchema,
]);

export type PerfDurationData = v.InferOutput<typeof PerfDurationSchema>;
