import * as v from "valibot";
import { AttrExpandableSchema } from "../../cmn/attr/expandable";
import { AttrExtSymSchema } from "../../externalsymbols/attr/extSym";
import { AttrColorSchema } from "../../shared/attr/color";
import { AttrTypographySchema } from "../../shared/attr/typography";
import { AttrAltSymSchema } from "../../usersymbols/attr/altSym";

/**
 * Visual domain attributes..
 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.beatRpt.vis.html
 */
export const AttrBeatRptVisSchema = v.object({
	// Inherited attribute classes
	...AttrAltSymSchema.entries,
	...AttrColorSchema.entries,
	...AttrExpandableSchema.entries,
	...AttrExtSymSchema.entries,
	...AttrTypographySchema.entries,

	// Direct attributes
	/**
	 * Indicates the number of slashes required to render the appropriate beat repeat symbol. When a single beat consisting of a single note or chord is repeated, the repetition symbol is a single thick, slanting slash; therefore, the value <val>1</val> should be used. When the beat is divided into even notes, the following values should be used: 4ths or 8ths=1, 16ths=2, 32nds=3, 64ths=4, 128ths=5. When the beat is comprised of mixed duration values, the default rendition is 2 slashes and 2 dots.
	 */
	"@slash": v.optional(v.string()),
});

export type AttrBeatRptVisData = v.InferOutput<typeof AttrBeatRptVisSchema>;
