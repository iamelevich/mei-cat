import * as v from "valibot";
import { StandardTagSchema } from "../../common";
import {
	AttrCommonSchema,
	AttrLangSchema,
	AttrMetadataPointingSchema,
	AttrXySchema,
	ModelParacontentPartSchema,
} from "..";
import { AttrFacsimileSchema } from "../../facsimile";

/**
 * Base schema with attribute, to simplify types for PSchema
 */
const PBaseSchema = v.object({
	...StandardTagSchema.entries,
	...AttrCommonSchema.entries,
	...AttrFacsimileSchema.entries,
	...AttrLangSchema.entries,
	...AttrMetadataPointingSchema.entries,
	...AttrXySchema.entries,
});

/**
 * One or more text phrases that form a logical prose passage.
 * @see https://music-encoding.org/guidelines/v5/elements/p.html
 */
export const PSchema = v.intersect([PBaseSchema, ModelParacontentPartSchema]);

export type PData = v.InferOutput<typeof PSchema>;
