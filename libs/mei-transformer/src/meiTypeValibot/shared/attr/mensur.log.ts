import * as v from "valibot";
import { AttrDurationRatioSchema } from "..";
import { AttrMensuralSharedSchema } from "../../mensural";

/**
 * Logical domain attributes..
 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.mensur.log.html
 */
export const AttrMensurLogSchema = v.object({
	// Inherited attribute classes
	...AttrDurationRatioSchema.entries,
	...AttrMensuralSharedSchema.entries,

	// Direct attributes
	/**
	 * Level of duration at which the proportion given by the @num and @numbase ratio applies.
	 */
	"@level": v.optional(v.string()),
});

export type AttrMensurLogData = v.InferOutput<typeof AttrMensurLogSchema>;
