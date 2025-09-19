import * as v from "valibot";
import { AttrMSpaceAnlSchema } from "../../analytical/attr/mSpace.anl";
import { StandardTagSchema } from "../../common";
import { AttrFacsimileSchema } from "../../facsimile/attr/facsimile";
import { AttrMSpaceGesSchema } from "../../gestural/attr/mSpace.ges";
import { AttrCommonSchema } from "../../shared/attr/common";
import { AttrMSpaceVisSchema } from "../../visual/attr/mSpace.vis";
import { AttrMSpaceLogSchema } from "../attr/mSpace.log";

/**
 * Base schema with attribute, to simplify types for MSpaceSchema
 */
const MSpaceBaseSchema = v.object({
	...StandardTagSchema.entries,
	...AttrCommonSchema.entries,
	...AttrFacsimileSchema.entries,
	...AttrMSpaceAnlSchema.entries,
	...AttrMSpaceGesSchema.entries,
	...AttrMSpaceLogSchema.entries,
	...AttrMSpaceVisSchema.entries,
});

/**
 * A measure containing only empty space in any meter.
 * @see https://music-encoding.org/guidelines/v5/elements/mSpace.html
 */
export const MSpaceSchema = v.lazy(() => v.intersect([MSpaceBaseSchema]));

export type MSpaceData = v.InferOutput<typeof MSpaceSchema>;
