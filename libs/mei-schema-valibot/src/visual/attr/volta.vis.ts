import * as v from "valibot";
import { AttrColorSchema } from "../../shared/attr/color";
import { AttrTypographySchema } from "../../shared/attr/typography";
import { AttrVisualOffsetToSchema } from "../../shared/attr/visualOffset.to";
import { AttrVisualOffsetVoSchema } from "../../shared/attr/visualOffset.vo";
import { AttrXySchema } from "../../shared/attr/xy";

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
