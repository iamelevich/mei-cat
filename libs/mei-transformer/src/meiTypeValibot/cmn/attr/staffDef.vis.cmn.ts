import * as v from "valibot";
import { AttrBeamingVisSchema } from "../../visual/attr/beaming.vis";
import { AttrPianoPedalsSchema } from "../attr/pianoPedals";
import { AttrRehearsalSchema } from "../attr/rehearsal";
import { AttrSlurRendSchema } from "../attr/slurRend";
import { AttrTieRendSchema } from "../attr/tieRend";

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
