import * as v from "valibot";
import { StandardTagSchema } from "../../common";
import { AttrFacsimileSchema } from "../../facsimile/attr/facsimile";
import { PerfResSchema } from "../../header/element/perfRes";
import { AttrBiblSchema } from "../attr/bibl";
import { AttrCommonSchema } from "../attr/common";
import { AttrLangSchema } from "../attr/lang";
import { ActorSchema } from "./actor";
import { RoleSchema } from "./role";
import { RoleDescSchema } from "./roleDesc";

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
			actor: v.optional(v.union([v.array(ActorSchema), ActorSchema])),
			/**
			 * Reference to element perfRes
			 * @see https://music-encoding.org/guidelines/v5/elements/perfRes.html
			 */
			perfRes: v.optional(v.union([v.array(PerfResSchema), PerfResSchema])),
			/**
			 * Reference to element role
			 * @see https://music-encoding.org/guidelines/v5/elements/role.html
			 */
			role: v.optional(v.union([v.array(RoleSchema), RoleSchema])),
			/**
			 * Reference to element roleDesc
			 * @see https://music-encoding.org/guidelines/v5/elements/roleDesc.html
			 */
			roleDesc: v.optional(v.union([v.array(RoleDescSchema), RoleDescSchema])),
		}),
	]),
);

export type CastItemData = v.InferOutput<typeof CastItemSchema>;
