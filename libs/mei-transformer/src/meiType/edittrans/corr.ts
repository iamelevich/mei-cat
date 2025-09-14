import { type Static, Type } from "@sinclair/typebox";
import { NotImplementedTagSchema, StandardTagSchema } from "../common";
// Import child element schemas
import { AbbrSchema } from "../shared/abbr";
import { AddressSchema } from "../shared/address";
import { AnnotSchema } from "../shared/annot";
import { AttrCommonSchema } from "../shared/attr/common";
import { AttrLangSchema } from "../shared/attr/lang";
import { BiblSchema } from "../shared/bibl";
import { BiblStructSchema } from "../shared/biblStruct";
import { DateSchema } from "../shared/date";
import { DedicateeSchema } from "../shared/dedicatee";
import { DepthSchema } from "../shared/depth";
import { DimSchema } from "../shared/dim";
import { DimensionsSchema } from "../shared/dimensions";
import { ExtentSchema } from "../shared/extent";
import { HeightSchema } from "../shared/height";
import { IdentifierSchema } from "../shared/identifier";
import { LbSchema } from "../shared/lb";
import { ListSchema } from "../shared/list";
import { NameSchema } from "../shared/name";
import { NumSchema } from "../shared/num";
import { PtrSchema } from "../shared/ptr";
import { QuoteSchema } from "../shared/quote";
import { RefSchema } from "../shared/ref";
import { RelationSchema } from "../shared/relation";
import { RelationListSchema } from "../shared/relationList";
import { RendSchema } from "../shared/rend";
import { RepositorySchema } from "../shared/repository";
import { StackSchema } from "../shared/stack";
import { SymbolSchema } from "../shared/symbol";
import { TermSchema } from "../shared/term";
import { TitleSchema } from "../shared/title";
import { WidthSchema } from "../shared/width";
import { AttrEditSchema } from "./attr/edit";
import { AttrTransSchema } from "./attr/trans";
import { DamageSchema } from "./damage";
import { ExpanSchema } from "./expan";
import { GapSchema } from "./gap";
import { HandShiftSchema } from "./handShift";
import { OrigSchema } from "./orig";
import { RegSchema } from "./reg";
import { RestoreSchema } from "./restore";
import { SicSchema } from "./sic";
import { SubstSchema } from "./subst";
import { SuppliedSchema } from "./supplied";
import { UnclearSchema } from "./unclear";

/**
 * Contains the correct form of an apparent erroneous passage.
 * @see https://music-encoding.org/guidelines/v5/elements/corr.html
 */
export const CorrSchema = Type.Recursive((Self) =>
	Type.Intersect([
		StandardTagSchema,
		AttrCommonSchema,
		AttrEditSchema,
		AttrLangSchema,
		AttrTransSchema,
		Type.Object(
			{
				// Child elements - zero or more of each
				/**
				 * Abbreviation or expansion.
				 * @see https://music-encoding.org/guidelines/v5/elements/abbr.html
				 */
				abbr: Type.Optional(Type.Union([AbbrSchema, Type.Array(AbbrSchema)])),

				/**
				 * Addition to the text.
				 * @see https://music-encoding.org/guidelines/v5/elements/add.html
				 */
				add: Type.Optional(NotImplementedTagSchema), // TODO: Not implemented because of circular dependency

				/**
				 * Address.
				 * @see https://music-encoding.org/guidelines/v5/elements/address.html
				 */
				address: Type.Optional(
					Type.Union([AddressSchema, Type.Array(AddressSchema)]),
				),

				/**
				 * Annotation.
				 * @see https://music-encoding.org/guidelines/v5/elements/annot.html
				 */
				annot: Type.Optional(
					Type.Union([AnnotSchema, Type.Array(AnnotSchema)]),
				),

				/**
				 * Bibliographic reference.
				 * @see https://music-encoding.org/guidelines/v5/elements/bibl.html
				 */
				bibl: Type.Optional(Type.Union([BiblSchema, Type.Array(BiblSchema)])),

				/**
				 * Structured bibliographic reference.
				 * @see https://music-encoding.org/guidelines/v5/elements/biblStruct.html
				 */
				biblStruct: Type.Optional(
					Type.Union([BiblStructSchema, Type.Array(BiblStructSchema)]),
				),

				/**
				 * Date.
				 * @see https://music-encoding.org/guidelines/v5/elements/date.html
				 */
				date: Type.Optional(Type.Union([DateSchema, Type.Array(DateSchema)])),

				/**
				 * Dedicatee.
				 * @see https://music-encoding.org/guidelines/v5/elements/dedicatee.html
				 */
				dedicatee: Type.Optional(
					Type.Union([DedicateeSchema, Type.Array(DedicateeSchema)]),
				),

				/**
				 * Depth measurement.
				 * @see https://music-encoding.org/guidelines/v5/elements/depth.html
				 */
				depth: Type.Optional(
					Type.Union([DepthSchema, Type.Array(DepthSchema)]),
				),

				/**
				 * Dimension.
				 * @see https://music-encoding.org/guidelines/v5/elements/dim.html
				 */
				dim: Type.Optional(Type.Union([DimSchema, Type.Array(DimSchema)])),

				/**
				 * Dimensions.
				 * @see https://music-encoding.org/guidelines/v5/elements/dimensions.html
				 */
				dimensions: Type.Optional(
					Type.Union([DimensionsSchema, Type.Array(DimensionsSchema)]),
				),

				/**
				 * Extent.
				 * @see https://music-encoding.org/guidelines/v5/elements/extent.html
				 */
				extent: Type.Optional(
					Type.Union([ExtentSchema, Type.Array(ExtentSchema)]),
				),

				/**
				 * Height measurement.
				 * @see https://music-encoding.org/guidelines/v5/elements/height.html
				 */
				height: Type.Optional(
					Type.Union([HeightSchema, Type.Array(HeightSchema)]),
				),

				/**
				 * Identifier.
				 * @see https://music-encoding.org/guidelines/v5/elements/identifier.html
				 */
				identifier: Type.Optional(
					Type.Union([IdentifierSchema, Type.Array(IdentifierSchema)]),
				),

				/**
				 * Line break.
				 * @see https://music-encoding.org/guidelines/v5/elements/lb.html
				 */
				lb: Type.Optional(Type.Union([LbSchema, Type.Array(LbSchema)])),

				/**
				 * List.
				 * @see https://music-encoding.org/guidelines/v5/elements/list.html
				 */
				list: Type.Optional(Type.Union([ListSchema, Type.Array(ListSchema)])),

				/**
				 * Name.
				 * @see https://music-encoding.org/guidelines/v5/elements/name.html
				 */
				name: Type.Optional(Type.Union([NameSchema, Type.Array(NameSchema)])),

				/**
				 * Number.
				 * @see https://music-encoding.org/guidelines/v5/elements/num.html
				 */
				num: Type.Optional(Type.Union([NumSchema, Type.Array(NumSchema)])),

				/**
				 * Quote.
				 * @see https://music-encoding.org/guidelines/v5/elements/quote.html
				 */
				quote: Type.Optional(
					Type.Union([QuoteSchema, Type.Array(QuoteSchema)]),
				),

				/**
				 * Relation.
				 * @see https://music-encoding.org/guidelines/v5/elements/relation.html
				 */
				relation: Type.Optional(
					Type.Union([RelationSchema, Type.Array(RelationSchema)]),
				),

				/**
				 * Relation list.
				 * @see https://music-encoding.org/guidelines/v5/elements/relationList.html
				 */
				relationList: Type.Optional(
					Type.Union([RelationListSchema, Type.Array(RelationListSchema)]),
				),

				/**
				 * Rendering.
				 * @see https://music-encoding.org/guidelines/v5/elements/rend.html
				 */
				rend: Type.Optional(Type.Union([RendSchema, Type.Array(RendSchema)])),

				/**
				 * Repository.
				 * @see https://music-encoding.org/guidelines/v5/elements/repository.html
				 */
				repository: Type.Optional(
					Type.Union([RepositorySchema, Type.Array(RepositorySchema)]),
				),

				/**
				 * Stack.
				 * @see https://music-encoding.org/guidelines/v5/elements/stack.html
				 */
				stack: Type.Optional(
					Type.Union([StackSchema, Type.Array(StackSchema)]),
				),

				/**
				 * Symbol.
				 * @see https://music-encoding.org/guidelines/v5/elements/symbol.html
				 */
				symbol: Type.Optional(
					Type.Union([SymbolSchema, Type.Array(SymbolSchema)]),
				),

				/**
				 * Term.
				 * @see https://music-encoding.org/guidelines/v5/elements/term.html
				 */
				term: Type.Optional(Type.Union([TermSchema, Type.Array(TermSchema)])),

				/**
				 * Title.
				 * @see https://music-encoding.org/guidelines/v5/elements/title.html
				 */
				title: Type.Optional(
					Type.Union([TitleSchema, Type.Array(TitleSchema)]),
				),

				/**
				 * Width measurement.
				 * @see https://music-encoding.org/guidelines/v5/elements/width.html
				 */
				width: Type.Optional(
					Type.Union([WidthSchema, Type.Array(WidthSchema)]),
				),

				/**
				 * Pointer.
				 * @see https://music-encoding.org/guidelines/v5/elements/ptr.html
				 */
				ptr: Type.Optional(Type.Union([PtrSchema, Type.Array(PtrSchema)])),

				/**
				 * Reference.
				 * @see https://music-encoding.org/guidelines/v5/elements/ref.html
				 */
				ref: Type.Optional(Type.Union([RefSchema, Type.Array(RefSchema)])),

				/**
				 * Choice.
				 * @see https://music-encoding.org/guidelines/v5/elements/choice.html
				 */
				choice: Type.Optional(NotImplementedTagSchema), // TODO: Not implemented because of circular dependency

				/**
				 * Correction.
				 * @see https://music-encoding.org/guidelines/v5/elements/corr.html
				 */
				corr: Type.Optional(Type.Union([Self, Type.Array(Self)])),

				/**
				 * Deletion.
				 * @see https://music-encoding.org/guidelines/v5/elements/del.html
				 */
				del: Type.Optional(NotImplementedTagSchema), // TODO: Not implemented because of circular dependency

				/**
				 * Expansion.
				 * @see https://music-encoding.org/guidelines/v5/elements/expan.html
				 */
				expan: Type.Optional(
					Type.Union([ExpanSchema, Type.Array(ExpanSchema)]),
				),

				/**
				 * Gap.
				 * @see https://music-encoding.org/guidelines/v5/elements/gap.html
				 */
				gap: Type.Optional(Type.Union([GapSchema, Type.Array(GapSchema)])),

				/**
				 * Hand shift.
				 * @see https://music-encoding.org/guidelines/v5/elements/handShift.html
				 */
				handShift: Type.Optional(
					Type.Union([HandShiftSchema, Type.Array(HandShiftSchema)]),
				),

				/**
				 * Original text.
				 * @see https://music-encoding.org/guidelines/v5/elements/orig.html
				 */
				orig: Type.Optional(Type.Union([OrigSchema, Type.Array(OrigSchema)])),

				/**
				 * Regularization.
				 * @see https://music-encoding.org/guidelines/v5/elements/reg.html
				 */
				reg: Type.Optional(Type.Union([RegSchema, Type.Array(RegSchema)])),

				/**
				 * Restoration.
				 * @see https://music-encoding.org/guidelines/v5/elements/restore.html
				 */
				restore: Type.Optional(
					Type.Union([RestoreSchema, Type.Array(RestoreSchema)]),
				),

				/**
				 * Sic.
				 * @see https://music-encoding.org/guidelines/v5/elements/sic.html
				 */
				sic: Type.Optional(Type.Union([SicSchema, Type.Array(SicSchema)])),

				/**
				 * Substitution.
				 * @see https://music-encoding.org/guidelines/v5/elements/subst.html
				 */
				subst: Type.Optional(
					Type.Union([SubstSchema, Type.Array(SubstSchema)]),
				),

				/**
				 * Supplied text.
				 * @see https://music-encoding.org/guidelines/v5/elements/supplied.html
				 */
				supplied: Type.Optional(
					Type.Union([SuppliedSchema, Type.Array(SuppliedSchema)]),
				),

				/**
				 * Unclear text.
				 * @see https://music-encoding.org/guidelines/v5/elements/unclear.html
				 */
				unclear: Type.Optional(
					Type.Union([UnclearSchema, Type.Array(UnclearSchema)]),
				),

				/**
				 * Damage.
				 * @see https://music-encoding.org/guidelines/v5/elements/damage.html
				 */
				damage: Type.Optional(
					Type.Union([DamageSchema, Type.Array(DamageSchema)]),
				),
			},
			{ additionalProperties: false },
		),
	]),
);

export type Corr = Static<typeof CorrSchema>;
