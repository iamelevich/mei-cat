import * as v from "valibot";
import { StandardTagSchema } from "../../common";
import {
	AttrCommonSchema,
	AttrLangSchema,
	ModelTextPhraseLikeLimitedSchema,
} from "..";
import { AttrFacsimileSchema } from "../../facsimile";

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
export const ActorSchema = v.intersect([
	ActorBaseSchema,
	ModelTextPhraseLikeLimitedSchema,
]);

export type ActorData = v.InferOutput<typeof ActorSchema>;
