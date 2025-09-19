import * as v from "valibot";
import { StandardTagSchema } from "../../common";
import { AttrBiblSchema, AttrCommonSchema, AttrLangSchema } from "../../shared";

/**
 * Base schema with attribute, to simplify types for UnpubSchema
 */
const UnpubBaseSchema = v.object({
	...StandardTagSchema.entries,
	...AttrBiblSchema.entries,
	...AttrCommonSchema.entries,
	...AttrLangSchema.entries,
});

/**
 * Used to explicitly indicate that a bibliographic resource is unpublished.
 * @see https://music-encoding.org/guidelines/v5/elements/unpub.html
 */
export const UnpubSchema = v.intersect([UnpubBaseSchema]);

export type UnpubData = v.InferOutput<typeof UnpubSchema>;
