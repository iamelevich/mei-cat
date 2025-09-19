import * as v from "valibot";
import { StandardTagSchema } from "../../common";
import { AttrFacsimileSchema } from "../../facsimile";
import { AttrCommonSchema, AttrLangSchema } from "..";
import {
	type CastItemData,
	CastItemSchema,
	type RoleDescData,
	RoleDescSchema,
} from ".";

/**
 * Base schema with attribute, to simplify types for CastGrpSchema
 */
const CastGrpBaseSchema = v.object({
	...StandardTagSchema.entries,
	...AttrCommonSchema.entries,
	...AttrFacsimileSchema.entries,
	...AttrLangSchema.entries,
});

type CastGrpBaseData = v.InferOutput<typeof CastGrpBaseSchema>;

/**
 * Groups one or more individual castItem elements within a cast list.
 * @see https://music-encoding.org/guidelines/v5/elements/castGrp.html
 */
export const CastGrpSchema: v.GenericSchema<CastGrpData> = v.intersect([
	CastGrpBaseSchema,
	v.object({
		/**
		 * Reference to element castGrp
		 * @see https://music-encoding.org/guidelines/v5/elements/castGrp.html
		 */
		castGrp: v.union([
			v.lazy(() => CastGrpSchema),
			v.array(v.lazy(() => CastGrpSchema)),
		]),
		/**
		 * Reference to element castItem
		 * @see https://music-encoding.org/guidelines/v5/elements/castItem.html
		 */
		castItem: v.union([
			v.lazy(() => CastItemSchema),
			v.array(v.lazy(() => CastItemSchema)),
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

export type CastGrpData = CastGrpBaseData & {
	castGrp: CastGrpData | CastGrpData[];
	castItem: CastItemData | CastItemData[];
	roleDesc: RoleDescData | RoleDescData[];
};
