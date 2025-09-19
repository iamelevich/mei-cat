import * as v from "valibot";
import { AttrDotAnlSchema } from "../../analytical/attr/dot.anl";
import { StandardTagSchema } from "../../common";
import { AttrFacsimileSchema } from "../../facsimile/attr/facsimile";
import { AttrDotGesSchema } from "../../gestural/attr/dot.ges";
import { AttrDotVisSchema } from "../../visual/attr/dot.vis";
import { AttrCommonSchema } from "../attr/common";
import { AttrDotLogSchema } from "../attr/dot.log";

/**
 * Base schema with attribute, to simplify types for DotSchema
 */
const DotBaseSchema = v.object({
	...StandardTagSchema.entries,
	...AttrCommonSchema.entries,
	...AttrDotAnlSchema.entries,
	...AttrDotGesSchema.entries,
	...AttrDotLogSchema.entries,
	...AttrDotVisSchema.entries,
	...AttrFacsimileSchema.entries,
});

/**
 * Dot of augmentation or division.
 * @see https://music-encoding.org/guidelines/v5/elements/dot.html
 */
export const DotSchema = v.lazy(() => v.intersect([DotBaseSchema]));

export type DotData = v.InferOutput<typeof DotSchema>;
