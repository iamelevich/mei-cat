import * as v from "valibot";
import { AttrPhraseVisCmnSchema } from "../../cmn";
import {
	AttrColorSchema,
	AttrVisualOffset2Schema,
	AttrVisualOffsetSchema,
	AttrXy2Schema,
	AttrXySchema,
} from "../../shared";

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
