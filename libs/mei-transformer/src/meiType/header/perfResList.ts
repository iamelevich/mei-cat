import { type Static, Type } from "@sinclair/typebox";
import { StandardTagSchema } from "../common";
import { AnnotSchema } from "../shared/annot";
import { AttrAuthorizedSchema } from "../shared/attr/authorized";
import { AttrBiblSchema } from "../shared/attr/bibl";
import { AttrCommonSchema } from "../shared/attr/common";
import { AttrEditSchema } from "../shared/attr/edit";
import { AttrLangSchema } from "../shared/attr/lang";
import { AttrPerfResBasicSchema } from "../shared/attr/perfRes";
import { HeadSchema } from "../shared/head";
import { PerfResSchema } from "../shared/perfRes";

/**
 * Several instrumental or vocal resources treated as a group.
 * @see https://music-encoding.org/guidelines/v5/elements/perfResList.html
 */
export const PerfResListSchema = Type.Recursive((ThisSchema) =>
	Type.Intersect([
		StandardTagSchema,
		AttrCommonSchema,
		AttrAuthorizedSchema,
		AttrBiblSchema,
		AttrEditSchema,
		AttrLangSchema,
		AttrPerfResBasicSchema,
		Type.Object(
			{
				// rng:zeroOrMore - model.headLike
				/**
				 * Contains any heading, for example, the title of a section of text, or the heading of a list.
				 * @see https://music-encoding.org/guidelines/v5/elements/head.html
				 */
				head: Type.Optional(Type.Union([HeadSchema, Type.Array(HeadSchema)])),
				// rng:zeroOrMore - choice between annot, perfRes, perfResList
				/**
				 * Provides a statement explaining the text or indicating the basis for an assertion.
				 * @see https://music-encoding.org/guidelines/v5/elements/annot.html
				 */
				annot: Type.Optional(
					Type.Union([AnnotSchema, Type.Array(AnnotSchema)]),
				),
				/**
				 * Name of an instrument on which a performer plays, a performer's voice range, or a standard performing ensemble designation.
				 * @see https://music-encoding.org/guidelines/v5/elements/perfRes.html
				 */
				perfRes: Type.Optional(
					Type.Union([PerfResSchema, Type.Array(PerfResSchema)]),
				),
				/**
				 * Several instrumental or vocal resources treated as a group.
				 * @see https://music-encoding.org/guidelines/v5/elements/perfResList.html
				 */
				perfResList: Type.Optional(
					Type.Union([ThisSchema, Type.Array(ThisSchema)]),
				),
			},
			{ additionalProperties: false },
		),
	]),
);

export type PerfResList = Static<typeof PerfResListSchema>;
