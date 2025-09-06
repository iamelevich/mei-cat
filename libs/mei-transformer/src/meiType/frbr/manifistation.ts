import { Type } from "@sinclair/typebox";
import { StandardTagSchema } from "../common";
import { AttrCommonSchema } from "../shared/attr/common";

/**
 * A bibliographic description of a physical embodiment of an expression of a work.
 * @see https://music-encoding.org/guidelines/v5/elements/manifestation.html
 */
export const ManifestationSchema = Type.Intersect([
	StandardTagSchema,
	AttrCommonSchema,
	Type.Object({
		/**
		 * Indicates the manifestation is a unique physical object. Value conforms to data.BOOLEAN.
		 * @see https://music-encoding.org/guidelines/v5/elements/manifestation.html
		 * @see https://music-encoding.org/guidelines/v5/data-types/data.BOOLEAN.html
		 */
		"@singleton": Type.Optional(Type.Boolean()),
	}),
]);
