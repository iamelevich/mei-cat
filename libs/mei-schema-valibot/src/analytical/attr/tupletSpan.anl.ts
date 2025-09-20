import * as v from "valibot";
import { AttrTupletAnlSchema } from "./tuplet.anl";

/**
 * Analytical domain attributes..
 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.tupletSpan.anl.html
 */
export const AttrTupletSpanAnlSchema = v.object({
	// Inherited attribute classes
	...AttrTupletAnlSchema.entries,
});

export type AttrTupletSpanAnlData = v.InferOutput<
	typeof AttrTupletSpanAnlSchema
>;
