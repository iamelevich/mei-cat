import { Type } from "typebox";
import { StandardTagSchema } from "../common";
import { AttrCommonSchema } from "./attr/common";
import { AttrLangSchema } from "./attr/lang";
import { AttrTextRenditionSchema } from "./attr/textRendition";

/**
 * Entity to whom a creative work is formally offered.
 * @see https://music-encoding.org/guidelines/v5/elements/dedic.html
 */
export const DedicSchema = Type.Intersect([
	StandardTagSchema,
	AttrCommonSchema,
	AttrLangSchema,
	AttrTextRenditionSchema,
	Type.Object(
		{
			// Content model according to MEI spec:
			// rng:zeroOrMore - choice of text OR model.editLike OR model.transcriptionLike
			// Text content is handled by Type.String() in the schema

			// model.editLike elements
			/**
			 * Contains information deleted, marked as deleted, or otherwise indicated as superfluous or spurious in the copy text by an author, scribe, annotator, or corrector.
			 * @see https://music-encoding.org/guidelines/v5/elements/del.html
			 */
			del: Type.Optional(Type.Union([Type.Ref("del"), Type.Array(Type.Ref("del"))])),

			/**
			 * Contains the expansion of an abbreviation.
			 * @see https://music-encoding.org/guidelines/v5/elements/expan.html
			 */
			expan: Type.Optional(Type.Union([Type.Ref("expan"), Type.Array(Type.Ref("expan"))])),

			/**
			 * Marks the beginning of a passage written in a new hand, or of a change in the scribe, writing style, ink or character of the document hand.
			 * @see https://music-encoding.org/guidelines/v5/elements/handShift.html
			 */
			handShift: Type.Optional(
				Type.Union([Type.Ref("handshift"), Type.Array(Type.Ref("handshift"))]),
			),

			/**
			 * Contains material which is marked as following the original, rather than being normalized or corrected.
			 * @see https://music-encoding.org/guidelines/v5/elements/orig.html
			 */
			orig: Type.Optional(Type.Union([Type.Ref("orig"), Type.Array(Type.Ref("orig"))])),

			/**
			 * Contains material which has been regularized or normalized in some sense.
			 * @see https://music-encoding.org/guidelines/v5/elements/reg.html
			 */
			reg: Type.Optional(Type.Union([Type.Ref("reg"), Type.Array(Type.Ref("reg"))])),

			/**
			 * Indicates restoration of material to an earlier state by cancellation of an editorial or authorial marking or instruction.
			 * @see https://music-encoding.org/guidelines/v5/elements/restore.html
			 */
			restore: Type.Optional(
				Type.Union([Type.Ref("restore"), Type.Array(Type.Ref("restore"))]),
			),

			/**
			 * Contains apparently incorrect or inaccurate material.
			 * @see https://music-encoding.org/guidelines/v5/elements/sic.html
			 */
			sic: Type.Optional(Type.Union([Type.Ref("sic"), Type.Array(Type.Ref("sic"))])),

			/**
			 * Groups transcriptional elements when the combination is to be regarded as a single intervention in the text.
			 * @see https://music-encoding.org/guidelines/v5/elements/subst.html
			 */
			subst: Type.Optional(Type.Union([Type.Ref("subst"), Type.Array(Type.Ref("subst"))])),

			// model.transcriptionLike elements
			/**
			 * Indicates a point where material has been omitted in a transcription, whether as part of sampling practice or for editorial reasons described in the MEI header.
			 * @see https://music-encoding.org/guidelines/v5/elements/gap.html
			 */
			gap: Type.Optional(Type.Union([Type.Ref("gap"), Type.Array(Type.Ref("gap"))])),

			/**
			 * Contains material supplied by the transcriber or editor for any reason.
			 * @see https://music-encoding.org/guidelines/v5/elements/supplied.html
			 */
			supplied: Type.Optional(
				Type.Union([Type.Ref("supplied"), Type.Array(Type.Ref("supplied"))]),
			),

			/**
			 * Contains material that cannot be transcribed with certainty because it is illegible or inaudible in the source.
			 * @see https://music-encoding.org/guidelines/v5/elements/unclear.html
			 */
			unclear: Type.Optional(
				Type.Union([Type.Ref("unclear"), Type.Array(Type.Ref("unclear"))]),
			),
		},
		{ additionalProperties: false },
	),
]);
