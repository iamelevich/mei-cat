import * as v from "valibot";
import { AttrPedalAnlSchema } from "../../analytical/attr/pedal.anl";
import { StandardTagSchema } from "../../common";
import { AttrFacsimileSchema } from "../../facsimile/attr/facsimile";
import { AttrPedalGesSchema } from "../../gestural/attr/pedal.ges";
import { AttrCommonSchema } from "../../shared/attr/common";
import { AttrPedalVisSchema } from "../../visual/attr/pedal.vis";
import { AttrPedalLogSchema } from "../attr/pedal.log";

/**
 * Base schema with attribute, to simplify types for PedalSchema
 */
const PedalBaseSchema = v.object({
	...StandardTagSchema.entries,
	...AttrCommonSchema.entries,
	...AttrFacsimileSchema.entries,
	...AttrPedalAnlSchema.entries,
	...AttrPedalGesSchema.entries,
	...AttrPedalLogSchema.entries,
	...AttrPedalVisSchema.entries,
});

/**
 * Piano pedal mark.
 * @see https://music-encoding.org/guidelines/v5/elements/pedal.html
 */
export const PedalSchema = v.lazy(() => v.intersect([PedalBaseSchema]));

export type PedalData = v.InferOutput<typeof PedalSchema>;
