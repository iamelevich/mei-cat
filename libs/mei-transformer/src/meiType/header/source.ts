import { type Static, Type } from "@sinclair/typebox";
import { StandardTagSchema } from "../common";
import { AttrComponentTypeSchema } from "../msDesc/attr/componentType";
import { LocusSchema } from "../namesdates/locus";
import { LocusGrpSchema } from "../namesdates/locusGrp";
import { AttrAuthorizedSchema } from "../shared/attr/authorized";
import { AttrBiblSchema } from "../shared/attr/bibl";
import { AttrCommonSchema } from "../shared/attr/common";
import { AttrDataPointingSchema } from "../shared/attr/dataPointing";
import { AttrPointingSchema } from "../shared/attr/pointing";
import { AttrTargetEvalSchema } from "../shared/attr/targetEval";
import { BiblSchema } from "../shared/bibl";
import { BiblStructSchema } from "../shared/biblStruct";
import { HeadSchema } from "../shared/head";
import { AttrRecordTypeSchema } from "./attr/recordType";

/**
 * A bibliographic description of a source used in the creation of the electronic file.
 * @see https://music-encoding.org/guidelines/v5/elements/source.html
 */
export const SourceSchema = Type.Intersect([
	StandardTagSchema,
	AttrCommonSchema,
	AttrAuthorizedSchema,
	AttrBiblSchema,
	AttrDataPointingSchema,
	AttrComponentTypeSchema,
	AttrPointingSchema,
	AttrTargetEvalSchema,
	AttrRecordTypeSchema,
	Type.Object(
		{
			// Zero or more model.headLike
			/**
			 * Contains any heading, for example, the title of a section of text, or the heading of a list.
			 * @see https://music-encoding.org/guidelines/v5/elements/head.html
			 */
			head: Type.Optional(Type.Union([HeadSchema, Type.Array(HeadSchema)])),
			// Zero or more locus / locusGrp
			/**
			 * Defines a location within a manuscript or manuscript component, usually as a (possibly discontinuous) sequence of folio references.
			 * @see https://music-encoding.org/guidelines/v5/elements/locus.html
			 */
			locus: Type.Optional(Type.Union([LocusSchema, Type.Array(LocusSchema)])),
			/**
			 * Groups locations which together form a distinct but discontinuous item within a manuscript or manuscript part, according to a specific foliation.
			 * @see https://music-encoding.org/guidelines/v5/elements/locusGrp.html
			 */
			locusGrp: Type.Optional(
				Type.Union([LocusGrpSchema, Type.Array(LocusGrpSchema)]),
			),
			// Zero or more model.biblLike
			/**
			 * Provides a loosely-structured bibliographic citation in which the sub-components may or may not be explicitly marked.
			 * @see https://music-encoding.org/guidelines/v5/elements/bibl.html
			 */
			bibl: Type.Optional(Type.Union([BiblSchema, Type.Array(BiblSchema)])),
			/**
			 * Contains a bibliographic citation in which bibliographic sub-elements must appear in a specified order.
			 * @see https://music-encoding.org/guidelines/v5/elements/biblStruct.html
			 */
			biblStruct: Type.Optional(
				Type.Union([BiblStructSchema, Type.Array(BiblStructSchema)]),
			),
		},
		{ additionalProperties: false },
	),
]);

export type Source = Static<typeof SourceSchema>;
