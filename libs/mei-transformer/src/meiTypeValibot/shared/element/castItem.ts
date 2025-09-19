import * as v from "valibot";
import { StandardTagSchema } from "../../common";
import { AttrFacsimileSchema } from "../../facsimile/attr/facsimile";
import { PerfResSchema } from "../../header/element/perfRes";
import { AttrBiblSchema } from "../attr/bibl";
import { AttrCommonSchema } from "../attr/common";
import { AttrLangSchema } from "../attr/lang";
import { ActorSchema } from "../element/actor";
import { RoleSchema } from "../element/role";
import { RoleDescSchema } from "../element/roleDesc";

/**
 * Base schema with attribute, to simplify types for CastItemSchema
 */
const CastItemBaseSchema = v.object({
	...StandardTagSchema.entries,
	...AttrBiblSchema.entries,
	...AttrCommonSchema.entries,
	...AttrFacsimileSchema.entries,
	...AttrLangSchema.entries,
});

/**
 * Contains a single entry within a cast list, describing either a single role or a list of non-speaking roles.
 * @see https://music-encoding.org/guidelines/v5/elements/castItem.html
 */
export const CastItemSchema = v.lazy(() =>
	v.intersect([
		CastItemBaseSchema,
		v.object({
			/**
			 * Reference to element actor
			 * @see https://music-encoding.org/guidelines/v5/elements/actor.html
			 */
			actor: v.union([ActorSchema, v.array(ActorSchema)]),
			/**
			 * Reference to element perfRes
			 * @see https://music-encoding.org/guidelines/v5/elements/perfRes.html
			 */
			perfRes: v.union([PerfResSchema, v.array(PerfResSchema)]),
			/**
			 * Reference to element role
			 * @see https://music-encoding.org/guidelines/v5/elements/role.html
			 */
			role: v.union([RoleSchema, v.array(RoleSchema)]),
			/**
			 * Reference to element roleDesc
			 * @see https://music-encoding.org/guidelines/v5/elements/roleDesc.html
			 */
			roleDesc: v.union([RoleDescSchema, v.array(RoleDescSchema)]),
		}),
	]),
);

export type CastItemData = v.InferOutput<typeof CastItemSchema>;
