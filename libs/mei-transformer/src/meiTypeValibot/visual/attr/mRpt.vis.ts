import * as v from "valibot";
import { AttrExpandableSchema, AttrNumberPlacementSchema } from "../../cmn";
import { AttrExtSymSchema } from "../../externalsymbols";
import { AttrColorSchema, AttrTypographySchema } from "../../shared";
import { AttrAltSymSchema } from "../../usersymbols";

/**
 * Visual domain attributes..
 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.mRpt.vis.html
 */
export const AttrMRptVisSchema = v.object({
	// Inherited attribute classes
	...AttrAltSymSchema.entries,
	...AttrColorSchema.entries,
	...AttrExpandableSchema.entries,
	...AttrExtSymSchema.entries,
	...AttrNumberPlacementSchema.entries,
	...AttrTypographySchema.entries,
});

export type AttrMRptVisData = v.InferOutput<typeof AttrMRptVisSchema>;
