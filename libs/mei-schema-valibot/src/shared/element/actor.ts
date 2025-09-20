import * as v from "valibot";
import { StandardTagSchema } from "../../common";
import { AttrFacsimileSchema } from "../../facsimile/attr/facsimile";
import { AttrCommonSchema } from "../attr/common";
import { AttrLangSchema } from "../attr/lang";
import { ModelTextPhraseLikeLimitedSchema } from "../model/textPhraseLike.limited";

/**
 * Base schema with attribute, to simplify types for ActorSchema
 */
const ActorBaseSchema = v.object({
	...StandardTagSchema.entries,
	...AttrCommonSchema.entries,
	...AttrFacsimileSchema.entries,
	...AttrLangSchema.entries,
});

/**
 * Name of an actor appearing within a cast list.
 * @see https://music-encoding.org/guidelines/v5/elements/actor.html
 */
export const ActorSchema = v.lazy(() =>
	v.intersect([ActorBaseSchema, ModelTextPhraseLikeLimitedSchema]),
);

export type ActorData = v.InferOutput<typeof ActorSchema>;
