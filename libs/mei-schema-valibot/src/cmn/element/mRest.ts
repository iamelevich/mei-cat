import * as v from "valibot";
import { AttrMRestAnlSchema } from "../../analytical/attr/mRest.anl";
import { StandardTagSchema } from "../../common";
import { AttrFacsimileSchema } from "../../facsimile/attr/facsimile";
import { AttrMRestGesSchema } from "../../gestural/attr/mRest.ges";
import { AttrCommonSchema } from "../../shared/attr/common";
import { AttrMRestVisSchema } from "../../visual/attr/mRest.vis";
import { AttrMRestLogSchema } from "../attr/mRest.log";

/**
 * Base schema with attribute, to simplify types for MRestSchema
 */
const MRestBaseSchema = v.object({
	...StandardTagSchema.entries,
	...AttrCommonSchema.entries,
	...AttrFacsimileSchema.entries,
	...AttrMRestAnlSchema.entries,
	...AttrMRestGesSchema.entries,
	...AttrMRestLogSchema.entries,
	...AttrMRestVisSchema.entries,
});

/**
 * Complete measure rest in any meter. <!-- (Read, p. 97-98). -->
 * @see https://music-encoding.org/guidelines/v5/elements/mRest.html
 */
export const MRestSchema = v.lazy(() => v.intersect([MRestBaseSchema]));

export type MRestData = v.InferOutput<typeof MRestSchema>;
