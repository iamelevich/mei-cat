import * as v from "valibot";
import { StandardTagSchema } from "../../common";
import { AttrExtSymSchema } from "../../externalsymbols/attr/extSym";
import { AttrFacsimileSchema } from "../../facsimile/attr/facsimile";
import { AttrBasicSchema } from "../../shared/attr/basic";
import { AttrClassedSchema } from "../../shared/attr/classed";
import { AttrColorSchema } from "../../shared/attr/color";
import { AttrLabelledSchema } from "../../shared/attr/labelled";
import { AttrLinkingSchema } from "../../shared/attr/linking";
import { AttrNNumberLikeSchema } from "../../shared/attr/nNumberLike";
import { AttrResponsibilitySchema } from "../../shared/attr/responsibility";
import { AttrStaffLocSchema } from "../../shared/attr/staffLoc";
import { AttrVisibilitySchema } from "../../shared/attr/visibility";
import { AttrVisualOffsetHoSchema } from "../../shared/attr/visualOffset.ho";
import { AttrXySchema } from "../../shared/attr/xy";
import { AttrDivLineLogSchema } from "../attr/divLine.log";

/**
 * Base schema with attribute, to simplify types for DivLineSchema
 */
const DivLineBaseSchema = v.object({
	...StandardTagSchema.entries,
	...AttrBasicSchema.entries,
	...AttrClassedSchema.entries,
	...AttrColorSchema.entries,
	...AttrDivLineLogSchema.entries,
	...AttrExtSymSchema.entries,
	...AttrFacsimileSchema.entries,
	...AttrLabelledSchema.entries,
	...AttrLinkingSchema.entries,
	...AttrNNumberLikeSchema.entries,
	...AttrResponsibilitySchema.entries,
	...AttrStaffLocSchema.entries,
	...AttrVisibilitySchema.entries,
	...AttrVisualOffsetHoSchema.entries,
	...AttrXySchema.entries,
});

/**
 * Represents a division (divisio) in neume notation. Divisions indicate short, medium, or long pauses similar to breath marks in modern notation.
 * @see https://music-encoding.org/guidelines/v5/elements/divLine.html
 */
export const DivLineSchema = v.lazy(() => v.intersect([DivLineBaseSchema]));

export type DivLineData = v.InferOutput<typeof DivLineSchema>;
