import * as v from "valibot";
import { AttrStaffGrpAnlSchema } from "../../analytical/attr/staffGrp.anl";
import { StandardTagSchema } from "../../common";
import { AttrFacsimileSchema } from "../../facsimile/attr/facsimile";
import { AttrStaffGrpGesSchema } from "../../gestural/attr/staffGrp.ges";
import { AttrStaffGrpVisSchema } from "../../visual/attr/staffGrp.vis";
import { AttrCommonSchema } from "../attr/common";
import { AttrMetadataPointingSchema } from "../attr/metadataPointing";
import { AttrStaffGrpLogSchema } from "../attr/staffGrp.log";
import { GrpSymSchema } from "../element/grpSym";
import { ModelInstrDefLikeSchema } from "../model/instrDefLike";
import { ModelLabelLikeSchema } from "../model/labelLike";
import { ModelStaffDefLikeSchema } from "../model/staffDefLike";
import { ModelStaffGrpLikeSchema } from "../model/staffGrpLike";

/**
 * Base schema with attribute, to simplify types for StaffGrpSchema
 */
const StaffGrpBaseSchema = v.object({
	...StandardTagSchema.entries,
	...AttrCommonSchema.entries,
	...AttrFacsimileSchema.entries,
	...AttrMetadataPointingSchema.entries,
	...AttrStaffGrpAnlSchema.entries,
	...AttrStaffGrpGesSchema.entries,
	...AttrStaffGrpLogSchema.entries,
	...AttrStaffGrpVisSchema.entries,
});

/**
 * A group of bracketed or braced staves.
 * @see https://music-encoding.org/guidelines/v5/elements/staffGrp.html
 */
export const StaffGrpSchema = v.lazy(() =>
	v.intersect([
		StaffGrpBaseSchema,
		v.object({
			/**
			 * Reference to element grpSym
			 * @see https://music-encoding.org/guidelines/v5/elements/grpSym.html
			 */
			grpSym: v.optional(v.union([GrpSymSchema, v.array(GrpSymSchema)])),
		}),
		ModelInstrDefLikeSchema,
		ModelLabelLikeSchema,
		ModelStaffDefLikeSchema,
		ModelStaffGrpLikeSchema,
	]),
);

export type StaffGrpData = v.InferOutput<typeof StaffGrpSchema>;
