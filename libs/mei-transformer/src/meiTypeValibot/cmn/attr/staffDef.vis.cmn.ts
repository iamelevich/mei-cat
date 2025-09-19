import * as v from "valibot";
import { AttrBeamingVisSchema } from "../../visual";
import {
	AttrPianoPedalsSchema,
	AttrRehearsalSchema,
	AttrSlurRendSchema,
	AttrTieRendSchema,
} from "..";

/**
 * Visual domain attributes for staffDef in the CMN repertoire..
 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.staffDef.vis.cmn.html
 */
export const AttrStaffDefVisCmnSchema = v.object({
	// Inherited attribute classes
	...AttrBeamingVisSchema.entries,
	...AttrPianoPedalsSchema.entries,
	...AttrRehearsalSchema.entries,
	...AttrSlurRendSchema.entries,
	...AttrTieRendSchema.entries,
});

export type AttrStaffDefVisCmnData = v.InferOutput<
	typeof AttrStaffDefVisCmnSchema
>;
