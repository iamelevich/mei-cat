import * as v from "valibot";
import { AttrMordentAnlSchema } from "../../analytical";
import { StandardTagSchema } from "../../common";
import { AttrFacsimileSchema } from "../../facsimile";
import { AttrMordentGesSchema } from "../../gestural";
import { AttrCommonSchema } from "../../shared";
import { AttrMordentVisSchema } from "../../visual";
import { AttrMordentLogSchema } from "..";

/**
 * Base schema with attribute, to simplify types for MordentSchema
 */
const MordentBaseSchema = v.object({
	...StandardTagSchema.entries,
	...AttrCommonSchema.entries,
	...AttrFacsimileSchema.entries,
	...AttrMordentAnlSchema.entries,
	...AttrMordentGesSchema.entries,
	...AttrMordentLogSchema.entries,
	...AttrMordentVisSchema.entries,
});

/**
 * An ornament indicating rapid alternation of the main note with a secondary note, usually a step below, but sometimes a step above. <!--See Read, p. 245-246.-->
 * @see https://music-encoding.org/guidelines/v5/elements/mordent.html
 */
export const MordentSchema = v.intersect([MordentBaseSchema]);

export type MordentData = v.InferOutput<typeof MordentSchema>;
