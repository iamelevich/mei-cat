import { type Static, Type } from "@sinclair/typebox";
import { NotImplementedTagSchema, StandardTagSchema } from "../common";
import { AttrCommonSchema } from "../shared/attr/common";
import { AttrCoordinatedSchema } from "../shared/attr/coordinated";
import { AttrDataPointingSchema } from "../shared/attr/dataPointing";

/**
 * Defines an area of interest within a surface or graphic file.
 * @see https://music-encoding.org/guidelines/v5/elements/zone.html
 */
export const ZoneSchema = Type.Intersect([
	StandardTagSchema,
	AttrCommonSchema,
	AttrCoordinatedSchema,
	AttrDataPointingSchema,
	Type.Object(
		{
			// Content model according to MEI spec:
			// - Zero or more figDesc elements (model.figDescLike)
			// - Zero or more graphic elements (model.graphicLike)

			/**
			 * Figure description.
			 * @see https://music-encoding.org/guidelines/v5/elements/figDesc.html
			 */
			figDesc: Type.Optional(
				Type.Union([
					NotImplementedTagSchema,
					Type.Array(NotImplementedTagSchema),
				]),
			), // TODO: Not implemented because of circular dependency

			/**
			 * Graphic.
			 * @see https://music-encoding.org/guidelines/v5/elements/graphic.html
			 */
			graphic: Type.Optional(
				Type.Union([
					NotImplementedTagSchema,
					Type.Array(NotImplementedTagSchema),
				]), // TODO: Not implemented because of circular dependency
			),
		},
		{ additionalProperties: false },
	),
]);

export type Zone = Static<typeof ZoneSchema>;
