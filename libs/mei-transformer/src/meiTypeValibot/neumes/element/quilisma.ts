import * as v from "valibot";
import { AttrQuilismaAnlSchema } from "../../analytical/attr/quilisma.anl";
import { StandardTagSchema } from "../../common";
import { AttrFacsimileSchema } from "../../facsimile/attr/facsimile";
import { AttrQuilismaGesSchema } from "../../gestural/attr/quilisma.ges";
import { AttrCommonSchema } from "../../shared/attr/common";
import { AttrQuilismaVisSchema } from "../../visual/attr/quilisma.vis";
import { AttrQuilismaLogSchema } from "../attr/quilisma.log";

/**
 * Base schema with attribute, to simplify types for QuilismaSchema
 */
const QuilismaBaseSchema = v.object({
	...StandardTagSchema.entries,
	...AttrCommonSchema.entries,
	...AttrFacsimileSchema.entries,
	...AttrQuilismaAnlSchema.entries,
	...AttrQuilismaGesSchema.entries,
	...AttrQuilismaLogSchema.entries,
	...AttrQuilismaVisSchema.entries,
});

/**
 * Quilisma.
 * @see https://music-encoding.org/guidelines/v5/elements/quilisma.html
 */
export const QuilismaSchema = v.lazy(() => v.intersect([QuilismaBaseSchema]));

export type QuilismaData = v.InferOutput<typeof QuilismaSchema>;
