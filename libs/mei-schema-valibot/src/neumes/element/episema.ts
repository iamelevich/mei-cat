import * as v from "valibot";
import { AttrEpisemaAnlSchema } from "../../analytical/attr/episema.anl";
import { StandardTagSchema } from "../../common";
import { AttrFacsimileSchema } from "../../facsimile/attr/facsimile";
import { AttrEpisemaGesSchema } from "../../gestural/attr/episema.ges";
import { AttrCommonSchema } from "../../shared/attr/common";
import { AttrEpisemaVisSchema } from "../../visual/attr/episema.vis";
import { AttrEpisemaLogSchema } from "../attr/episema.log";

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
export const EpisemaSchema = v.lazy(() => v.intersect([EpisemaBaseSchema]));

export type EpisemaData = v.InferOutput<typeof EpisemaSchema>;
