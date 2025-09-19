import * as v from "valibot";
import { StandardTagSchema } from "../../common";
import {
	AttrBiblSchema,
	AttrCommonSchema,
	AttrWhitespaceSchema,
	MacroAnyXMLSchema,
} from "../../shared";

/**
 * Base schema with attribute, to simplify types for ExtMetaSchema
 */
const ExtMetaBaseSchema = v.object({
	...StandardTagSchema.entries,
	...AttrBiblSchema.entries,
	...AttrCommonSchema.entries,
	...AttrWhitespaceSchema.entries,
});

/**
 * Provides a container element for non-MEI metadata formats.
 * @see https://music-encoding.org/guidelines/v5/elements/extMeta.html
 */
export const ExtMetaSchema = v.intersect([
	ExtMetaBaseSchema,
	MacroAnyXMLSchema,
]);

export type ExtMetaData = v.InferOutput<typeof ExtMetaSchema>;
