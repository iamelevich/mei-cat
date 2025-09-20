import * as v from "valibot";
import { AttrTrillAnlSchema } from "../../analytical/attr/trill.anl";
import { StandardTagSchema } from "../../common";
import { AttrFacsimileSchema } from "../../facsimile/attr/facsimile";
import { AttrTrillGesSchema } from "../../gestural/attr/trill.ges";
import { AttrCommonSchema } from "../../shared/attr/common";
import { AttrTrillVisSchema } from "../../visual/attr/trill.vis";
import { AttrTrillLogSchema } from "../attr/trill.log";

/**
 * Base schema with attribute, to simplify types for TrillSchema
 */
const TrillBaseSchema = v.object({
	...StandardTagSchema.entries,
	...AttrCommonSchema.entries,
	...AttrFacsimileSchema.entries,
	...AttrTrillAnlSchema.entries,
	...AttrTrillGesSchema.entries,
	...AttrTrillLogSchema.entries,
	...AttrTrillVisSchema.entries,
});

/**
 * Rapid alternation of a note with another (usually at the interval of a second above).
 * @see https://music-encoding.org/guidelines/v5/elements/trill.html
 */
export const TrillSchema = v.lazy(() => v.intersect([TrillBaseSchema]));

export type TrillData = v.InferOutput<typeof TrillSchema>;
