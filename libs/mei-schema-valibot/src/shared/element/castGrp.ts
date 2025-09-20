import * as v from "valibot";
import { StandardTagSchema } from "../../common";
import { AttrFacsimileSchema } from "../../facsimile/attr/facsimile";
import { AttrCommonSchema } from "../attr/common";
import { AttrLangSchema } from "../attr/lang";
import { type CastItemData, CastItemSchema } from "./castItem";
import { type RoleDescData, RoleDescSchema } from "./roleDesc";

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
export const CastGrpSchema: v.GenericSchema<CastGrpData> = v.lazy(() =>
	v.intersect([
		CastGrpBaseSchema,
		v.object({
			/**
			 * Reference to element castGrp
			 * @see https://music-encoding.org/guidelines/v5/elements/castGrp.html
			 */
			castGrp: v.optional(v.union([v.array(CastGrpSchema), CastGrpSchema])),
			/**
			 * Reference to element castItem
			 * @see https://music-encoding.org/guidelines/v5/elements/castItem.html
			 */
			castItem: v.optional(v.union([v.array(CastItemSchema), CastItemSchema])),
			/**
			 * Reference to element roleDesc
			 * @see https://music-encoding.org/guidelines/v5/elements/roleDesc.html
			 */
			roleDesc: v.optional(v.union([v.array(RoleDescSchema), RoleDescSchema])),
		}),
	]),
);

export type CastGrpData = CastGrpBaseData & {
	castGrp?: CastGrpData | CastGrpData[];
	castItem?: CastItemData | CastItemData[];
	roleDesc?: RoleDescData | RoleDescData[];
};
