import * as v from "valibot";
import { StandardTagSchema } from "../../common";
import { AttrBiblSchema } from "../../shared/attr/bibl";
import { AttrCommonSchema } from "../../shared/attr/common";
import { AttrLangSchema } from "../../shared/attr/lang";

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
export const UnpubSchema = v.lazy(() => v.intersect([UnpubBaseSchema]));

export type UnpubData = v.InferOutput<typeof UnpubSchema>;
