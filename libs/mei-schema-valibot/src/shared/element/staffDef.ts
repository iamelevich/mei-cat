import * as v from "valibot";
import { AttrStaffDefAnlSchema } from "../../analytical/attr/staffDef.anl";
import { StandardTagSchema } from "../../common";
import { AttrStaffDefGesSchema } from "../../gestural/attr/staffDef.ges";
import { AttrStaffDefVisSchema } from "../../visual/attr/staffDef.vis";
import { AttrBasicSchema } from "../attr/basic";
import { AttrLabelledSchema } from "../attr/labelled";
import { AttrLinkingSchema } from "../attr/linking";
import { AttrMetadataPointingSchema } from "../attr/metadataPointing";
import { AttrNIntegerSchema } from "../attr/nInteger";
import { AttrResponsibilitySchema } from "../attr/responsibility";
import { AttrStaffDefLogSchema } from "../attr/staffDef.log";
import { AttrTypedSchema } from "../attr/typed";
import { ModelInstrDefLikeSchema } from "../model/instrDefLike";
import { ModelLabelLikeSchema } from "../model/labelLike";
import { ModelLayerDefLikeSchema } from "../model/layerDefLike";
import { ModelStaffDefPartSchema } from "../model/staffDefPart";
import { AmbitusSchema } from "./ambitus";

/**
 * Base schema with attribute, to simplify types for StaffDefSchema
 */
const StaffDefBaseSchema = v.object({
	...StandardTagSchema.entries,
	...AttrBasicSchema.entries,
	...AttrLabelledSchema.entries,
	...AttrLinkingSchema.entries,
	...AttrMetadataPointingSchema.entries,
	...AttrNIntegerSchema.entries,
	...AttrResponsibilitySchema.entries,
	...AttrStaffDefAnlSchema.entries,
	...AttrStaffDefGesSchema.entries,
	...AttrStaffDefLogSchema.entries,
	...AttrStaffDefVisSchema.entries,
	...AttrTypedSchema.entries,
});

/**
 * Container for staff meta-information.
 * @see https://music-encoding.org/guidelines/v5/elements/staffDef.html
 */
export const StaffDefSchema = v.lazy(() =>
	v.intersect([
		StaffDefBaseSchema,
		v.object({
			/**
			 * Reference to element ambitus
			 * @see https://music-encoding.org/guidelines/v5/elements/ambitus.html
			 */
			ambitus: v.optional(AmbitusSchema),
		}),
		ModelInstrDefLikeSchema,
		ModelLabelLikeSchema,
		ModelLayerDefLikeSchema,
		ModelStaffDefPartSchema,
	]),
);

export type StaffDefData = v.InferOutput<typeof StaffDefSchema>;
