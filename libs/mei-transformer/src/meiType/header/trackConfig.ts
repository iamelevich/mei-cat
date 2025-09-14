import { type Static, Type } from "@sinclair/typebox";
import { StandardTagSchema } from "../common";
import { AttrAuthorizedSchema } from "../shared/attr/authorized";
import { AttrBiblSchema } from "../shared/attr/bibl";
import { AttrCommonSchema } from "../shared/attr/common";
import { AttrLangSchema } from "../shared/attr/lang";

/**
 * Number of physical/input tracks on a sound medium (e.g., eight track, twelve track).
 * @see https://music-encoding.org/guidelines/v5/elements/trackConfig.html
 */
export const TrackConfigSchema = Type.Intersect([
	StandardTagSchema,
	AttrCommonSchema,
	AttrAuthorizedSchema,
	AttrBiblSchema,
	AttrLangSchema,
	Type.Object(
		{
			/**
			 * Records the track configuration in numeric form.
			 * Value is a positive integer.
			 * @see https://music-encoding.org/guidelines/v5/elements/trackConfig.html#num
			 */
			"@num": Type.Optional(Type.Number()),
		},
		{ additionalProperties: false },
	),
]);

export type TrackConfig = Static<typeof TrackConfigSchema>;
