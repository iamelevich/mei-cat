import * as v from "valibot";
import { StandardTagSchema } from "../../common";
import { AttrFacsimileSchema } from "../../facsimile";
import {
	AttrCommonSchema,
	AttrLangSchema,
	ModelTextPhraseLikeLimitedSchema,
} from "..";

/**
 * Base schema with attribute, to simplify types for RoleSchema
 */
const RoleBaseSchema = v.object({
	...StandardTagSchema.entries,
	...AttrCommonSchema.entries,
	...AttrFacsimileSchema.entries,
	...AttrLangSchema.entries,
});

/**
 * Name of a dramatic role, as given in a cast list.
 * @see https://music-encoding.org/guidelines/v5/elements/role.html
 */
export const RoleSchema = v.intersect([
	RoleBaseSchema,
	ModelTextPhraseLikeLimitedSchema,
]);

export type RoleData = v.InferOutput<typeof RoleSchema>;
