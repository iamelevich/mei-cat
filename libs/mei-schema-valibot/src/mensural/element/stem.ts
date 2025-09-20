import * as v from "valibot";
import { AttrStemAnlSchema } from "../../analytical/attr/stem.anl";
import { StandardTagSchema } from "../../common";
import { AttrFacsimileSchema } from "../../facsimile/attr/facsimile";
import { AttrStemGesSchema } from "../../gestural/attr/stem.ges";
import { AttrCommonSchema } from "../../shared/attr/common";
import { AttrStemVisSchema } from "../../visual/attr/stem.vis";
import { AttrStemLogSchema } from "../attr/stem.log";

/**
 * Base schema with attribute, to simplify types for StemSchema
 */
const StemBaseSchema = v.object({
	...StandardTagSchema.entries,
	...AttrCommonSchema.entries,
	...AttrFacsimileSchema.entries,
	...AttrStemAnlSchema.entries,
	...AttrStemGesSchema.entries,
	...AttrStemLogSchema.entries,
	...AttrStemVisSchema.entries,
});

/**
 * A stem element.
 * @see https://music-encoding.org/guidelines/v5/elements/stem.html
 */
export const StemSchema = v.lazy(() => v.intersect([StemBaseSchema]));

export type StemData = v.InferOutput<typeof StemSchema>;
