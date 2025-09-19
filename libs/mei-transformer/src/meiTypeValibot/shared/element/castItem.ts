import * as v from "valibot";
import { StandardTagSchema } from "../../common";
import { AttrBiblSchema, AttrCommonSchema, AttrLangSchema } from "..";
import { AttrFacsimileSchema } from "../../facsimile";
import { ActorSchema, RoleSchema, RoleDescSchema } from ".";
import { PerfResSchema } from "../../header";

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
export const CastItemSchema = v.intersect([
	CastItemBaseSchema,
	v.object({
		/**
		 * Reference to element actor
		 * @see https://music-encoding.org/guidelines/v5/elements/actor.html
		 */
		actor: v.union([
			v.lazy(() => ActorSchema),
			v.array(v.lazy(() => ActorSchema)),
		]),
		/**
		 * Reference to element perfRes
		 * @see https://music-encoding.org/guidelines/v5/elements/perfRes.html
		 */
		perfRes: v.union([
			v.lazy(() => PerfResSchema),
			v.array(v.lazy(() => PerfResSchema)),
		]),
		/**
		 * Reference to element role
		 * @see https://music-encoding.org/guidelines/v5/elements/role.html
		 */
		role: v.union([
			v.lazy(() => RoleSchema),
			v.array(v.lazy(() => RoleSchema)),
		]),
		/**
		 * Reference to element roleDesc
		 * @see https://music-encoding.org/guidelines/v5/elements/roleDesc.html
		 */
		roleDesc: v.union([
			v.lazy(() => RoleDescSchema),
			v.array(v.lazy(() => RoleDescSchema)),
		]),
	}),
]);

export type CastItemData = v.InferOutput<typeof CastItemSchema>;
