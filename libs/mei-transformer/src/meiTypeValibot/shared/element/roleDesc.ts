import * as v from "valibot";
import { StandardTagSchema } from "../../common";
import {
	AttrCommonSchema,
	AttrLangSchema,
	ModelTextPhraseLikeLimitedSchema,
} from "..";
import { AttrFacsimileSchema } from "../../facsimile";

/**
 * Base schema with attribute, to simplify types for RoleDescSchema
 */
const RoleDescBaseSchema = v.object({
	...StandardTagSchema.entries,
	...AttrCommonSchema.entries,
	...AttrFacsimileSchema.entries,
	...AttrLangSchema.entries,
});

/**
 * Describes a character’s role in a drama.
 * @see https://music-encoding.org/guidelines/v5/elements/roleDesc.html
 */
export const RoleDescSchema = v.intersect([
	RoleDescBaseSchema,
	ModelTextPhraseLikeLimitedSchema,
]);

export type RoleDescData = v.InferOutput<typeof RoleDescSchema>;
