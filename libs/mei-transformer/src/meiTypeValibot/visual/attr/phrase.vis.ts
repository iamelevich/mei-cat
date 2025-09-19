import * as v from "valibot";
import {
	AttrColorSchema,
	AttrVisualOffsetSchema,
	AttrVisualOffset2Schema,
	AttrXySchema,
	AttrXy2Schema,
} from "../../shared";
import { AttrPhraseVisCmnSchema } from "../../cmn";

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
