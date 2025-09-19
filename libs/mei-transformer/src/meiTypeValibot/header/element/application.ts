import * as v from "valibot";
import { StandardTagSchema } from "../../common";
import { ModelLocrefLikeSchema } from "../../ptrref/model/locrefLike";
import { AttrCommonSchema } from "../../shared/attr/common";
import { AttrDatableSchema } from "../../shared/attr/datable";
import { NameSchema } from "../../shared/element/name";
import { ModelPLikeSchema } from "../../shared/model/pLike";

/**
 * Base schema with attribute, to simplify types for ApplicationSchema
 */
const ApplicationBaseSchema = v.object({
	...StandardTagSchema.entries,
	...AttrCommonSchema.entries,
	...AttrDatableSchema.entries,

	// Direct attributes
	/**
	 * Supplies a version number for an application, independent of its identifier or display name.
	 */
	"@version": v.optional(v.string()),
});

/**
 * Provides information about an application which has acted upon the current document.
 * @see https://music-encoding.org/guidelines/v5/elements/application.html
 */
export const ApplicationSchema = v.lazy(() =>
	v.intersect([
		ApplicationBaseSchema,
		v.object({
			/**
			 * Reference to element name
			 * @see https://music-encoding.org/guidelines/v5/elements/name.html
			 */
			name: v.union([NameSchema, v.array(NameSchema)]),
		}),
		ModelLocrefLikeSchema,
		ModelPLikeSchema,
	]),
);

export type ApplicationData = v.InferOutput<typeof ApplicationSchema>;
