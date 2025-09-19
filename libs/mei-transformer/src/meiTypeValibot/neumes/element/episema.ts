import * as v from "valibot";
import { StandardTagSchema } from "../../common";
import { AttrCommonSchema } from "../../shared";
import { AttrEpisemaAnlSchema } from "../../analytical";
import { AttrEpisemaGesSchema } from "../../gestural";
import { AttrEpisemaLogSchema } from "..";
import { AttrEpisemaVisSchema } from "../../visual";
import { AttrFacsimileSchema } from "../../facsimile";

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
