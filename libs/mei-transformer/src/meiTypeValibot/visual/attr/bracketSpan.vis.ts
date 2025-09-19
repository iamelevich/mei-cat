import * as v from "valibot";
import { AttrAltSymSchema } from "../../usersymbols";
import {
	AttrColorSchema,
	AttrLineRendSchema,
	AttrTypographySchema,
	AttrVisualOffsetSchema,
	AttrVisualOffset2Schema,
	AttrXySchema,
	AttrXy2Schema,
} from "../../shared";
import { AttrExtSymSchema } from "../../externalsymbols";

/**
 * Visual domain attributes..
 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.bracketSpan.vis.html
 */
export const AttrBracketSpanVisSchema = v.object({
	// Inherited attribute classes
	...AttrAltSymSchema.entries,
	...AttrColorSchema.entries,
	...AttrExtSymSchema.entries,
	...AttrLineRendSchema.entries,
	...AttrTypographySchema.entries,
	...AttrVisualOffsetSchema.entries,
	...AttrVisualOffset2Schema.entries,
	...AttrXySchema.entries,
	...AttrXy2Schema.entries,
});

export type AttrBracketSpanVisData = v.InferOutput<
	typeof AttrBracketSpanVisSchema
>;
