import * as v from "valibot";
import { AttrStaffDefVisCmnSchema } from "../../cmn";
import { AttrStaffDefVisMensuralSchema } from "../../mensural";
import {
	AttrBarringSchema,
	AttrDistancesSchema,
	AttrLyricStyleSchema,
	AttrMultinumMeasuresSchema,
	AttrNotationStyleSchema,
	AttrOneLineStaffSchema,
	AttrScalableSchema,
	AttrStaffItemsSchema,
	AttrTextStyleSchema,
	AttrVisibilitySchema,
} from "../../shared";
import { AttrStaffDefVisTablatureSchema } from "../../stringtab";
import {
	AttrCleffingVisSchema,
	AttrGuitarGridVisSchema,
	AttrKeySigDefaultVisSchema,
	AttrMeterSigDefaultVisSchema,
} from "..";

/**
 * Visual domain attributes for staffDef..
 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.staffDef.vis.html
 */
export const AttrStaffDefVisSchema = v.object({
	// Inherited attribute classes
	...AttrBarringSchema.entries,
	...AttrCleffingVisSchema.entries,
	...AttrDistancesSchema.entries,
	...AttrGuitarGridVisSchema.entries,
	...AttrKeySigDefaultVisSchema.entries,
	...AttrLyricStyleSchema.entries,
	...AttrMeterSigDefaultVisSchema.entries,
	...AttrMultinumMeasuresSchema.entries,
	...AttrNotationStyleSchema.entries,
	...AttrOneLineStaffSchema.entries,
	...AttrScalableSchema.entries,
	...AttrStaffDefVisCmnSchema.entries,
	...AttrStaffDefVisMensuralSchema.entries,
	...AttrStaffDefVisTablatureSchema.entries,
	...AttrStaffItemsSchema.entries,
	...AttrTextStyleSchema.entries,
	...AttrVisibilitySchema.entries,

	// Direct attributes
	/**
	 * Indicates the number of layers and their stem directions.
	 */
	"@layerscheme": v.optional(v.string()),
	/**
	 * Captures the colors of the staff lines.
	 */
	"@lines.color": v.optional(v.string()),
	/**
	 * Records whether all staff lines are visible.
	 */
	"@lines.visible": v.optional(v.string()),
	/**
	 * Records the absolute distance (as opposed to the relative distances recorded in <gi scheme="MEI">scoreDef</gi> elements) between this staff and the preceding one in the same system. This value is meaningless for the first staff in a system since the spacing.system attribute indicates the spacing between systems.
	 */
	"@spacing": v.optional(v.string()),
});

export type AttrStaffDefVisData = v.InferOutput<typeof AttrStaffDefVisSchema>;
