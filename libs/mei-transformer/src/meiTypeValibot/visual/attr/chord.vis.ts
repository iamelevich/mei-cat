import * as v from "valibot";
import { AttrChordVisCmnSchema } from "../../cmn/attr/chord.vis.cmn";
import { AttrExtSymSchema } from "../../externalsymbols/attr/extSym";
import { AttrColorSchema } from "../../shared/attr/color";
import { AttrEnclosingCharsSchema } from "../../shared/attr/enclosingChars";
import { AttrStemsSchema } from "../../shared/attr/stems";
import { AttrTypographySchema } from "../../shared/attr/typography";
import { AttrVisibilitySchema } from "../../shared/attr/visibility";
import { AttrVisualOffsetHoSchema } from "../../shared/attr/visualOffset.ho";
import { AttrVisualOffsetToSchema } from "../../shared/attr/visualOffset.to";
import { AttrXySchema } from "../../shared/attr/xy";
import { AttrAltSymSchema } from "../../usersymbols/attr/altSym";

/**
 * Visual domain attributes for chord. The slur, slur.dir, slur.rend, tie, tie.dir, and tie.rend attributes here are syntactic sugar for these attributes on each of the chord's individual notes. The values here apply to all the notes in the chord. If some notes are slurred or tied while others aren't, then the individual note attributes must be used..
 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.chord.vis.html
 */
export const AttrChordVisSchema = v.object({
	// Inherited attribute classes
	...AttrAltSymSchema.entries,
	...AttrChordVisCmnSchema.entries,
	...AttrColorSchema.entries,
	...AttrEnclosingCharsSchema.entries,
	...AttrExtSymSchema.entries,
	...AttrStemsSchema.entries,
	...AttrTypographySchema.entries,
	...AttrVisibilitySchema.entries,
	...AttrVisualOffsetHoSchema.entries,
	...AttrVisualOffsetToSchema.entries,
	...AttrXySchema.entries,

	// Direct attributes
	/**
	 * Indicates a single, alternative note head should be displayed instead of individual note heads. The highest and lowest notes of the chord usually indicate the upper and lower boundaries of the cluster note head.
	 */
	"@cluster": v.optional(v.string()),
});

export type AttrChordVisData = v.InferOutput<typeof AttrChordVisSchema>;
