import * as v from "valibot";
import { AttrPhraseVisCmnSchema } from "../../cmn/attr/phrase.vis.cmn";
import { AttrColorSchema } from "../../shared/attr/color";
import { AttrVisualOffsetSchema } from "../../shared/attr/visualOffset";
import { AttrVisualOffset2Schema } from "../../shared/attr/visualOffset2";
import { AttrXySchema } from "../../shared/attr/xy";
import { AttrXy2Schema } from "../../shared/attr/xy2";

/**
 * Visual domain attributes..
 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.phrase.vis.html
 */
export const AttrPhraseVisSchema = v.object({
	// Inherited attribute classes
	...AttrColorSchema.entries,
	...AttrPhraseVisCmnSchema.entries,
	...AttrVisualOffsetSchema.entries,
	...AttrVisualOffset2Schema.entries,
	...AttrXySchema.entries,
	...AttrXy2Schema.entries,
});

export type AttrPhraseVisData = v.InferOutput<typeof AttrPhraseVisSchema>;
