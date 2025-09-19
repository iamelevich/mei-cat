import * as v from "valibot";
import { AttrAltSymSchema } from "../../usersymbols";
import {
	AttrColorSchema,
	AttrEnclosingCharsSchema,
	AttrTypographySchema,
	AttrVisibilitySchema,
} from "../../shared";
import { AttrExtSymSchema } from "../../externalsymbols";

/**
 * Visual domain attributes..
 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.meterSig.vis.html
 */
export const AttrMeterSigVisSchema = v.object({
	// Inherited attribute classes
	...AttrAltSymSchema.entries,
	...AttrColorSchema.entries,
	...AttrEnclosingCharsSchema.entries,
	...AttrExtSymSchema.entries,
	...AttrTypographySchema.entries,
	...AttrVisibilitySchema.entries,

	// Direct attributes
	/**
	 * Contains an indication of how the meter signature should be rendered.
	 */
	"@form": v.optional(v.string()),
});

export type AttrMeterSigVisData = v.InferOutput<typeof AttrMeterSigVisSchema>;
