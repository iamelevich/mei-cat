import * as v from "valibot";
import { AttrHispanTickAnlSchema } from "../../analytical/attr/hispanTick.anl";
import { StandardTagSchema } from "../../common";
import { AttrFacsimileSchema } from "../../facsimile/attr/facsimile";
import { AttrHispanTickGesSchema } from "../../gestural/attr/hispanTick.ges";
import { AttrCommonSchema } from "../../shared/attr/common";
import { AttrHispanTickVisSchema } from "../../visual/attr/hispanTick.vis";
import { AttrHispanTickLogSchema } from "../attr/hispanTick.log";

/**
 * Base schema with attribute, to simplify types for HispanTickSchema
 */
const HispanTickBaseSchema = v.object({
	...StandardTagSchema.entries,
	...AttrCommonSchema.entries,
	...AttrFacsimileSchema.entries,
	...AttrHispanTickAnlSchema.entries,
	...AttrHispanTickGesSchema.entries,
	...AttrHispanTickLogSchema.entries,
	...AttrHispanTickVisSchema.entries,
});

/**
 * Hispanic tick.
 * @see https://music-encoding.org/guidelines/v5/elements/hispanTick.html
 */
export const HispanTickSchema = v.lazy(() =>
	v.intersect([HispanTickBaseSchema]),
);

export type HispanTickData = v.InferOutput<typeof HispanTickSchema>;
