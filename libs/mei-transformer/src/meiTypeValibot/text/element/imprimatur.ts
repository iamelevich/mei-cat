import * as v from "valibot";
import { StandardTagSchema } from "../../common";
import { AttrFacsimileSchema } from "../../facsimile";
import {
	AttrCommonSchema,
	AttrLangSchema,
	AttrMetadataPointingSchema,
	ModelParacontentPartSchema,
} from "../../shared";

/**
 * Base schema with attribute, to simplify types for ImprimaturSchema
 */
const ImprimaturBaseSchema = v.object({
	...StandardTagSchema.entries,
	...AttrCommonSchema.entries,
	...AttrFacsimileSchema.entries,
	...AttrLangSchema.entries,
	...AttrMetadataPointingSchema.entries,
});

/**
 * Contains a formal statement authorizing the publication of a work, sometimes required to appear on a title page or its verso.
 * @see https://music-encoding.org/guidelines/v5/elements/imprimatur.html
 */
export const ImprimaturSchema = v.intersect([
	ImprimaturBaseSchema,
	ModelParacontentPartSchema,
]);

export type ImprimaturData = v.InferOutput<typeof ImprimaturSchema>;
