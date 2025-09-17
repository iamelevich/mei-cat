import * as v from "valibot";
import { StandardTagSchema } from "../common";
import { AttrCommonSchema } from "../shared/attr/common";
import { AttrEditSchema } from "./attr/edit";
import { AttrFacsimileSchema } from "../shared/attr/facsimile";
import { AttrLangSchema } from "../shared/attr/lang";
import { AttrTransSchema } from "./attr/trans";
import { AbbrSchema } from "../shared/abbr";
import { AddressSchema } from "../shared/address";
import { AnnotSchema } from "../shared/annot";
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
import { QuoteSchema } from "../shared/quote";
import { RelationSchema } from "../shared/relation";
import { RelationListSchema } from "../shared/relationList";
import { RendSchema } from "../shared/rend";
import { RepositorySchema } from "../shared/repository";
import { StackSchema } from "../shared/stack";
import { SymbolSchema } from "../shared/symbol";
import { TermSchema } from "../shared/term";
import { TitleSchema } from "../shared/title";
import { WidthSchema } from "../shared/width";
import { PtrSchema } from "../ptrref/ptr";
import { RefSchema } from "../ptrref/ref";
import { ExpanSchema } from "./expan";
import { ChoiceSchema } from "./choice";
import { CorrSchema } from "./corr";
import { DelSchema } from "./del";
import { SuppliedSchema } from "./supplied";
import { UnclearSchema } from "./unclear";
import { RestoreSchema } from "./restore";
import { OrigSchema } from "./orig";
import { RegSchema } from "./reg";
import { SicSchema } from "./sic";
import { SubstSchema } from "./subst";
import { GapSchema } from "./gap";
import { HandShiftSchema } from "./handShift";
import { DamageSchema } from "./damage";

/**
 * Marks an addition to the text.
 * @see https://music-encoding.org/guidelines/v5/elements/add.html
 */
export const AddSchema = v.object({
	...StandardTagSchema.entries,
	...AttrCommonSchema.entries,
	...AttrEditSchema.entries,
	...AttrFacsimileSchema.entries,
	...AttrLangSchema.entries,
	...AttrTransSchema.entries,

	// Attributes of add
	/**
	 * Location of the addition.
	 * One or more values from data.PLACEMENT, separated by spaces.
	 * @see https://music-encoding.org/guidelines/v5/elements/add.html#place
	 * @see https://music-encoding.org/guidelines/v5/data-types/data.PLACEMENT.html
	 */
	"@place": v.optional(v.union([v.string(), v.array(v.string())])),

	// Child elements - zero or more of each
	/**
	 * Abbreviation or expansion.
	 * @see https://music-encoding.org/guidelines/v5/elements/abbr.html
	 */
	abbr: v.optional(
		v.union([v.lazy(() => AbbrSchema), v.array(v.lazy(() => AbbrSchema))]),
	),

	/**
	 * Address.
	 * @see https://music-encoding.org/guidelines/v5/elements/address.html
	 */
	address: v.optional(
		v.union([v.lazy(() => AddressSchema), v.array(v.lazy(() => AddressSchema))]),
	),

	/**
	 * Annotation.
	 * @see https://music-encoding.org/guidelines/v5/elements/annot.html
	 */
	annot: v.optional(
		v.union([v.lazy(() => AnnotSchema), v.array(v.lazy(() => AnnotSchema))]),
	),

	/**
	 * Bibliographic reference.
	 * @see https://music-encoding.org/guidelines/v5/elements/bibl.html
	 */
	bibl: v.optional(
		v.union([v.lazy(() => BiblSchema), v.array(v.lazy(() => BiblSchema))]),
	),

	/**
	 * Structured bibliographic reference.
	 * @see https://music-encoding.org/guidelines/v5/elements/biblStruct.html
	 */
	biblStruct: v.optional(
		v.union([
			v.lazy(() => BiblStructSchema),
			v.array(v.lazy(() => BiblStructSchema)),
		]),
	),

	/**
	 * Date.
	 * @see https://music-encoding.org/guidelines/v5/elements/date.html
	 */
	date: v.optional(
		v.union([v.lazy(() => DateSchema), v.array(v.lazy(() => DateSchema))]),
	),

	/**
	 * Dedicatee.
	 * @see https://music-encoding.org/guidelines/v5/elements/dedicatee.html
	 */
	dedicatee: v.optional(
		v.union([v.lazy(() => DedicateeSchema), v.array(v.lazy(() => DedicateeSchema))]),
	),

	/**
	 * Depth measurement.
	 * @see https://music-encoding.org/guidelines/v5/elements/depth.html
	 */
	depth: v.optional(
		v.union([v.lazy(() => DepthSchema), v.array(v.lazy(() => DepthSchema))]),
	),

	/**
	 * Dimension.
	 * @see https://music-encoding.org/guidelines/v5/elements/dim.html
	 */
	dim: v.optional(
		v.union([v.lazy(() => DimSchema), v.array(v.lazy(() => DimSchema))]),
	),

	/**
	 * Dimensions.
	 * @see https://music-encoding.org/guidelines/v5/elements/dimensions.html
	 */
	dimensions: v.optional(
		v.union([
			v.lazy(() => DimensionsSchema),
			v.array(v.lazy(() => DimensionsSchema)),
		]),
	),

	/**
	 * Extent.
	 * @see https://music-encoding.org/guidelines/v5/elements/extent.html
	 */
	extent: v.optional(
		v.union([v.lazy(() => ExtentSchema), v.array(v.lazy(() => ExtentSchema))]),
	),

	/**
	 * Height measurement.
	 * @see https://music-encoding.org/guidelines/v5/elements/height.html
	 */
	height: v.optional(
		v.union([v.lazy(() => HeightSchema), v.array(v.lazy(() => HeightSchema))]),
	),

	/**
	 * Identifier.
	 * @see https://music-encoding.org/guidelines/v5/elements/identifier.html
	 */
	identifier: v.optional(
		v.union([
			v.lazy(() => IdentifierSchema),
			v.array(v.lazy(() => IdentifierSchema)),
		]),
	),

	/**
	 * Line break.
	 * @see https://music-encoding.org/guidelines/v5/elements/lb.html
	 */
	lb: v.optional(
		v.union([v.lazy(() => LbSchema), v.array(v.lazy(() => LbSchema))]),
	),

	/**
	 * List.
	 * @see https://music-encoding.org/guidelines/v5/elements/list.html
	 */
	list: v.optional(
		v.union([v.lazy(() => ListSchema), v.array(v.lazy(() => ListSchema))]),
	),

	/**
	 * Name.
	 * @see https://music-encoding.org/guidelines/v5/elements/name.html
	 */
	name: v.optional(
		v.union([v.lazy(() => NameSchema), v.array(v.lazy(() => NameSchema))]),
	),

	/**
	 * Number.
	 * @see https://music-encoding.org/guidelines/v5/elements/num.html
	 */
	num: v.optional(
		v.union([v.lazy(() => NumSchema), v.array(v.lazy(() => NumSchema))]),
	),

	/**
	 * Quote.
	 * @see https://music-encoding.org/guidelines/v5/elements/quote.html
	 */
	quote: v.optional(
		v.union([v.lazy(() => QuoteSchema), v.array(v.lazy(() => QuoteSchema))]),
	),

	/**
	 * Relation.
	 * @see https://music-encoding.org/guidelines/v5/elements/relation.html
	 */
	relation: v.optional(
		v.union([v.lazy(() => RelationSchema), v.array(v.lazy(() => RelationSchema))]),
	),

	/**
	 * Relation list.
	 * @see https://music-encoding.org/guidelines/v5/elements/relationList.html
	 */
	relationList: v.optional(
		v.union([
			v.lazy(() => RelationListSchema),
			v.array(v.lazy(() => RelationListSchema)),
		]),
	),

	/**
	 * Rendering.
	 * @see https://music-encoding.org/guidelines/v5/elements/rend.html
	 */
	rend: v.optional(
		v.union([v.lazy(() => RendSchema), v.array(v.lazy(() => RendSchema))]),
	),

	/**
	 * Repository.
	 * @see https://music-encoding.org/guidelines/v5/elements/repository.html
	 */
	repository: v.optional(
		v.union([
			v.lazy(() => RepositorySchema),
			v.array(v.lazy(() => RepositorySchema)),
		]),
	),

	/**
	 * Stack.
	 * @see https://music-encoding.org/guidelines/v5/elements/stack.html
	 */
	stack: v.optional(
		v.union([v.lazy(() => StackSchema), v.array(v.lazy(() => StackSchema))]),
	),

	/**
	 * Symbol.
	 * @see https://music-encoding.org/guidelines/v5/elements/symbol.html
	 */
	symbol: v.optional(
		v.union([v.lazy(() => SymbolSchema), v.array(v.lazy(() => SymbolSchema))]),
	),

	/**
	 * Term.
	 * @see https://music-encoding.org/guidelines/v5/elements/term.html
	 */
	term: v.optional(
		v.union([v.lazy(() => TermSchema), v.array(v.lazy(() => TermSchema))]),
	),

	/**
	 * Title.
	 * @see https://music-encoding.org/guidelines/v5/elements/title.html
	 */
	title: v.optional(
		v.union([v.lazy(() => TitleSchema), v.array(v.lazy(() => TitleSchema))]),
	),

	/**
	 * Width measurement.
	 * @see https://music-encoding.org/guidelines/v5/elements/width.html
	 */
	width: v.optional(
		v.union([v.lazy(() => WidthSchema), v.array(v.lazy(() => WidthSchema))]),
	),

	/**
	 * Pointer.
	 * @see https://music-encoding.org/guidelines/v5/elements/ptr.html
	 */
	ptr: v.optional(
		v.union([v.lazy(() => PtrSchema), v.array(v.lazy(() => PtrSchema))]),
	),

	/**
	 * Reference.
	 * @see https://music-encoding.org/guidelines/v5/elements/ref.html
	 */
	ref: v.optional(
		v.union([v.lazy(() => RefSchema), v.array(v.lazy(() => RefSchema))]),
	),

	/**
	 * Expansion.
	 * @see https://music-encoding.org/guidelines/v5/elements/expan.html
	 */
	expan: v.optional(
		v.union([v.lazy(() => ExpanSchema), v.array(v.lazy(() => ExpanSchema))]),
	),

	/**
	 * Choice.
	 * @see https://music-encoding.org/guidelines/v5/elements/choice.html
	 */
	choice: v.optional(
		v.union([v.lazy(() => ChoiceSchema), v.array(v.lazy(() => ChoiceSchema))]),
	),

	/**
	 * Correction.
	 * @see https://music-encoding.org/guidelines/v5/elements/corr.html
	 */
	corr: v.optional(
		v.union([v.lazy(() => CorrSchema), v.array(v.lazy(() => CorrSchema))]),
	),

	/**
	 * Deletion.
	 * @see https://music-encoding.org/guidelines/v5/elements/del.html
	 */
	del: v.optional(
		v.union([v.lazy(() => DelSchema), v.array(v.lazy(() => DelSchema))]),
	),

	/**
	 * Supplied text.
	 * @see https://music-encoding.org/guidelines/v5/elements/supplied.html
	 */
	supplied: v.optional(
		v.union([v.lazy(() => SuppliedSchema), v.array(v.lazy(() => SuppliedSchema))]),
	),

	/**
	 * Unclear text.
	 * @see https://music-encoding.org/guidelines/v5/elements/unclear.html
	 */
	unclear: v.optional(
		v.union([v.lazy(() => UnclearSchema), v.array(v.lazy(() => UnclearSchema))]),
	),

	/**
	 * Restoration.
	 * @see https://music-encoding.org/guidelines/v5/elements/restore.html
	 */
	restore: v.optional(
		v.union([v.lazy(() => RestoreSchema), v.array(v.lazy(() => RestoreSchema))]),
	),

	/**
	 * Original text.
	 * @see https://music-encoding.org/guidelines/v5/elements/orig.html
	 */
	orig: v.optional(
		v.union([v.lazy(() => OrigSchema), v.array(v.lazy(() => OrigSchema))]),
	),

	/**
	 * Regularization.
	 * @see https://music-encoding.org/guidelines/v5/elements/reg.html
	 */
	reg: v.optional(
		v.union([v.lazy(() => RegSchema), v.array(v.lazy(() => RegSchema))]),
	),

	/**
	 * Sic.
	 * @see https://music-encoding.org/guidelines/v5/elements/sic.html
	 */
	sic: v.optional(
		v.union([v.lazy(() => SicSchema), v.array(v.lazy(() => SicSchema))]),
	),

	/**
	 * Substitution.
	 * @see https://music-encoding.org/guidelines/v5/elements/subst.html
	 */
	subst: v.optional(
		v.union([v.lazy(() => SubstSchema), v.array(v.lazy(() => SubstSchema))]),
	),

	/**
	 * Gap.
	 * @see https://music-encoding.org/guidelines/v5/elements/gap.html
	 */
	gap: v.optional(
		v.union([v.lazy(() => GapSchema), v.array(v.lazy(() => GapSchema))]),
	),

	/**
	 * Hand shift.
	 * @see https://music-encoding.org/guidelines/v5/elements/handShift.html
	 */
	handShift: v.optional(
		v.union([v.lazy(() => HandShiftSchema), v.array(v.lazy(() => HandShiftSchema))]),
	),

	/**
	 * Contains an area of damage to the physical medium.
	 * @see https://music-encoding.org/guidelines/v5/elements/damage.html
	 */
	damage: v.optional(
		v.union([v.lazy(() => DamageSchema), v.array(v.lazy(() => DamageSchema))]),
	),
});

export type AddData = v.InferOutput<typeof AddSchema>;