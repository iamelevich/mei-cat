import * as v from "valibot";
import { AttrEpisemaAnlSchema } from "../../analytical";
import { StandardTagSchema } from "../../common";
import { AttrFacsimileSchema } from "../../facsimile";
import { AttrEpisemaGesSchema } from "../../gestural";
import { AttrCommonSchema } from "../../shared";
import { AttrEpisemaVisSchema } from "../../visual";
import { AttrEpisemaLogSchema } from "..";

/**
 * Base schema with attribute, to simplify types for EpisemaSchema
 */
const EpisemaBaseSchema = v.object({
	...StandardTagSchema.entries,
	...AttrCommonSchema.entries,
	...AttrEpisemaAnlSchema.entries,
	...AttrEpisemaGesSchema.entries,
	...AttrEpisemaLogSchema.entries,
	...AttrEpisemaVisSchema.entries,
	...AttrFacsimileSchema.entries,
});

/**
 * Episema.
 * @see https://music-encoding.org/guidelines/v5/elements/episema.html
 */
export const EpisemaSchema = v.intersect([EpisemaBaseSchema]);

export type EpisemaData = v.InferOutput<typeof EpisemaSchema>;
