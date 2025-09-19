import * as v from "valibot";
import {
	AttrColorSchema,
	AttrTypographySchema,
	AttrVisualOffsetToSchema,
	AttrVisualOffsetVoSchema,
	AttrXySchema,
} from "../../shared";

/**
 * Visual domain attributes..
 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.volta.vis.html
 */
export const AttrVoltaVisSchema = v.object({
	// Inherited attribute classes
	...AttrColorSchema.entries,
	...AttrTypographySchema.entries,
	...AttrVisualOffsetToSchema.entries,
	...AttrVisualOffsetVoSchema.entries,
	...AttrXySchema.entries,
});

export type AttrVoltaVisData = v.InferOutput<typeof AttrVoltaVisSchema>;
