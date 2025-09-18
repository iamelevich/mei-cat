import * as v from "valibot";
import { MeasureLikeSchema } from "../../cmn";
import { FigureLikeSchema } from "../../figtable";
import { MsInlineSchema } from "../../msDesc";
import { AddressPartSchema, NameLikeLabelSchema } from "../../namesdates";
import { LocrefLikeSchema } from "../../ptrref";
import { QLikeSchema, SegSchema } from "../../text";
import { DedicateeSchema } from "../dedicatee";
import { DimensionsSchema } from "../dimensions";
import { ExtentSchema } from "../extent";
import { SymbolSchema } from "../symbol";
import { TermSchema } from "../term";
import { AddressLikeSchema } from "./addressLike";
import { AnnotLikeSchema } from "./annotLike";
import { BiblLikeSchema } from "./biblLike";
import { DateLikeSchema } from "./dateLike";
import { DimLikeSchema } from "./dimLike";
import { EditorialLikeSchema } from "./editorialLike";
import { IdentifierLikeSchema } from "./identifierLike";
import { LbLikeSchema } from "./lbLike";
import { NameLikeSchema } from "./nameLike";
import { RelationLikeSchema } from "./relationLike";
import { RendLikeSchema } from "./rendLike";
import { TitleLikeSchema } from "./titleLike";

/**
 * Groups elements that represent limited text phrases.
 * @see https://music-encoding.org/guidelines/v5/model-classes/model.textPhraseLike.limited.html
 */
export const TextPhraseLikeLimitedSchema = v.intersect([
	v.object({
		/**
		 * Entity to whom a creative work is formally offered.
		 * @see https://music-encoding.org/guidelines/v5/elements/dedicatee.html
		 */
		dedicatee: v.optional(
			v.union([
				v.lazy(() => DedicateeSchema),
				v.array(v.lazy(() => DedicateeSchema)),
			]),
		),

		/**
		 * Information about the physical size of an entity; usually includes numerical data.
		 * @see https://music-encoding.org/guidelines/v5/elements/dimensions.html
		 */
		dimensions: v.optional(
			v.union([
				v.lazy(() => DimensionsSchema),
				v.array(v.lazy(() => DimensionsSchema)),
			]),
		),

		/**
		 * Used to express size in terms other than physical dimensions, such as number of pages, records, bytes, physical components, etc.
		 * @see https://music-encoding.org/guidelines/v5/elements/extent.html
		 */
		extent: v.optional(
			v.union([
				v.lazy(() => ExtentSchema),
				v.array(v.lazy(() => ExtentSchema)),
			]),
		),

		/**
		 * A reference to a previously defined symbol.
		 * @see https://music-encoding.org/guidelines/v5/elements/symbol.html
		 */
		symbol: v.optional(
			v.union([
				v.lazy(() => SymbolSchema),
				v.array(v.lazy(() => SymbolSchema)),
			]),
		),

		/**
		 * Keyword or phrase which describes a resource.
		 * @see https://music-encoding.org/guidelines/v5/elements/term.html
		 */
		term: v.optional(
			v.union([v.lazy(() => TermSchema), v.array(v.lazy(() => TermSchema))]),
		),

		/**
		 * represents any segmentation of text below the "text component" level.
		 * @see https://music-encoding.org/guidelines/v5/elements/seg.html
		 */
		seg: v.optional(
			v.union([v.lazy(() => SegSchema), v.array(v.lazy(() => SegSchema))]),
		),
	}),
	FigureLikeSchema,
	MsInlineSchema,
	AddressPartSchema,
	NameLikeLabelSchema,
	LocrefLikeSchema,
	AddressLikeSchema,
	AnnotLikeSchema,
	BiblLikeSchema,
	DateLikeSchema,
	DimLikeSchema,
	EditorialLikeSchema,
	IdentifierLikeSchema,
	LbLikeSchema,
	MeasureLikeSchema,
	NameLikeSchema,
	RelationLikeSchema,
	RendLikeSchema,
	TitleLikeSchema,
	QLikeSchema,
]);

export type TextPhraseLikeLimitedData = v.InferOutput<
	typeof TextPhraseLikeLimitedSchema
>;
