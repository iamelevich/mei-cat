import * as v from "valibot";
import { StandardTagSchema } from "../../common";
import {
	AttrCommonSchema,
	AttrLangSchema,
	ModelAnnotLikeSchema,
	ModelTextComponentLikeSchema,
} from "..";
import { ModelGraphicPrimitiveLikeSchema } from "../../usersymbols";
import { ModelLocrefLikeSchema } from "../../ptrref";

/**
 * Base schema with attribute, to simplify types for PgDescSchema
 */
const PgDescBaseSchema = v.object({
	...StandardTagSchema.entries,
	...AttrCommonSchema.entries,
	...AttrLangSchema.entries,
});

/**
 * Contains a brief prose description of the appearance or description of the content of a physical page.
 * @see https://music-encoding.org/guidelines/v5/elements/pgDesc.html
 */
export const PgDescSchema = v.intersect([
	PgDescBaseSchema,
	ModelAnnotLikeSchema,
	ModelGraphicPrimitiveLikeSchema,
	ModelLocrefLikeSchema,
	ModelTextComponentLikeSchema,
]);

export type PgDescData = v.InferOutput<typeof PgDescSchema>;
