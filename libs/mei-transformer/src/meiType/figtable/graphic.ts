import { type Static, Type } from "@sinclair/typebox";
import { StandardTagSchema } from "../common";
import { ZoneSchema } from "../facsimile/zone";
import { AttrCommonSchema } from "../shared/attr/common";
import { AttrCoordinatedSchema } from "../shared/attr/coordinated";
import { AttrDimensionsSchema } from "../shared/attr/dimensions";
import { AttrFacsimileSchema } from "../shared/attr/facsimile";
import { AttrInternetMediaSchema } from "../shared/attr/internetMedia";
import { AttrMetadataPointingSchema } from "../shared/attr/metadataPointing";
import { AttrPointingSchema } from "../shared/attr/pointing";
import { AttrStartIdSchema } from "../shared/attr/startId";
import { AttrVisualOffsetSchema } from "../shared/attr/visualOffset";

/**
 * Indicates the location of an inline graphic.
 * @see https://music-encoding.org/guidelines/v5/elements/graphic.html
 */
export const GraphicSchema = Type.Intersect([
	StandardTagSchema,
	AttrCommonSchema,
	AttrCoordinatedSchema,
	AttrDimensionsSchema,
	AttrFacsimileSchema,
	AttrInternetMediaSchema,
	AttrMetadataPointingSchema,
	AttrPointingSchema,
	AttrStartIdSchema,
	AttrVisualOffsetSchema,
	Type.Object(
		{
			// Child elements - zero or more zone elements
			/**
			 * Zone.
			 * @see https://music-encoding.org/guidelines/v5/elements/zone.html
			 */
			zone: Type.Optional(Type.Union([ZoneSchema, Type.Array(ZoneSchema)])),
		},
		{ additionalProperties: false },
	),
]);

export type Graphic = Static<typeof GraphicSchema>;
