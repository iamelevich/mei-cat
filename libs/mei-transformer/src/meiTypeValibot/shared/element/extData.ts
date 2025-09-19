import * as v from "valibot";
import { StandardTagSchema } from "../../common";
import {
	AttrBasicSchema,
	AttrInternetMediaSchema,
	AttrLabelledSchema,
	AttrPointingSchema,
	AttrResponsibilitySchema,
	AttrTypedSchema,
	AttrWhitespaceSchema,
	MacroAnyXMLSchema,
} from "..";

/**
 * Base schema with attribute, to simplify types for ExtDataSchema
 */
const ExtDataBaseSchema = v.object({
	...StandardTagSchema.entries,
	...AttrBasicSchema.entries,
	...AttrInternetMediaSchema.entries,
	...AttrLabelledSchema.entries,
	...AttrPointingSchema.entries,
	...AttrResponsibilitySchema.entries,
	...AttrTypedSchema.entries,
	...AttrWhitespaceSchema.entries,
});

/**
 * Provides a container element for non-MEI data formats.
 * @see https://music-encoding.org/guidelines/v5/elements/extData.html
 */
export const ExtDataSchema = v.intersect([
	ExtDataBaseSchema,
	MacroAnyXMLSchema,
]);

export type ExtDataData = v.InferOutput<typeof ExtDataSchema>;
