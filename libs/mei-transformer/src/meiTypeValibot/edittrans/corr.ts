import * as v from "valibot";
import { StandardTagSchema, type StandardTagData } from "../common";
import { AttrCommonSchema, type AttrCommonData } from "../shared/attr/common";
import { AttrLangSchema, type AttrLangData } from "../shared/attr/lang";
import { AttrEditSchema, type AttrEditData } from "./attr/edit";
import { AttrTransSchema, type AttrTransData } from "./attr/trans";
import { AbbrSchema, type AbbrData } from "../shared/abbr";
import { AddSchema, type AddData } from "./add";
import { AddressSchema, type AddressData } from "../shared/address";
import { AnnotSchema, type AnnotData } from "../shared/annot";
import { BiblSchema, type BiblData } from "../shared/bibl";
import { BiblStructSchema, type BiblStructData } from "../shared/biblStruct";
import { DateSchema, type DateData } from "../shared/date";
import { DedicateeSchema, type DedicateeData } from "../shared/dedicatee";
import { DepthSchema, type DepthData } from "../shared/depth";
import { DimSchema, type DimData } from "../shared/dim";
import { DimensionsSchema, type DimensionsData } from "../shared/dimensions";
import { ExtentSchema, type ExtentData } from "../shared/extent";
import { HeightSchema, type HeightData } from "../shared/height";
import { IdentifierSchema, type IdentifierData } from "../shared/identifier";
import { LbSchema, type LbData } from "../shared/lb";
import { ListSchema, type ListData } from "../shared/list";
import { NameSchema, type NameData } from "../shared/name";
import { NumSchema, type NumData } from "../shared/num";
import { QuoteSchema, type QuoteData } from "../shared/quote";
import { RelationSchema, type RelationData } from "../shared/relation";
import { RelationListSchema, type RelationListData } from "../shared/relationList";
import { RendSchema, type RendData } from "../shared/rend";
import { RepositorySchema, type RepositoryData } from "../shared/repository";
import { StackSchema, type StackData } from "../shared/stack";
import { SymbolSchema, type SymbolData } from "../shared/symbol";
import { TermSchema, type TermData } from "../shared/term";
import { TitleSchema, type TitleData } from "../shared/title";
import { WidthSchema, type WidthData } from "../shared/width";
import { PtrSchema, type PtrData } from "../ptrref/ptr";
import { RefSchema, type RefData } from "../ptrref/ref";
import { ChoiceSchema, type ChoiceData } from "./choice";
import { DelSchema, type DelData } from "./del";
import { ExpanSchema, type ExpanData } from "./expan";
import { GapSchema, type GapData } from "./gap";
import { HandShiftSchema, type HandShiftData } from "./handShift";
import { OrigSchema, type OrigData } from "./orig";
import { RegSchema, type RegData } from "./reg";
import { RestoreSchema, type RestoreData } from "./restore";
import { SicSchema, type SicData } from "./sic";
import { SubstSchema, type SubstData } from "./subst";
import { SuppliedSchema, type SuppliedData } from "./supplied";
import { UnclearSchema, type UnclearData } from "./unclear";
import { DamageSchema, type DamageData } from "./damage";

// Due to circular references, we need to define the CorrData type here and cant infer it from the schema
export type CorrData = StandardTagData & AttrCommonData & AttrEditData & AttrLangData & AttrTransData & {
  abbr?: AbbrData | AbbrData[];
  add?: AddData | AddData[];
  address?: AddressData | AddressData[];
  annot?: AnnotData | AnnotData[];
  bibl?: BiblData | BiblData[];
  biblStruct?: BiblStructData | BiblStructData[];
  date?: DateData | DateData[];
  dedicatee?: DedicateeData | DedicateeData[];
  depth?: DepthData | DepthData[];
  dim?: DimData | DimData[];
  dimensions?: DimensionsData | DimensionsData[];
  extent?: ExtentData | ExtentData[];
  height?: HeightData | HeightData[];
  identifier?: IdentifierData | IdentifierData[];
  lb?: LbData | LbData[];
  list?: ListData | ListData[];
  name?: NameData | NameData[];
  num?: NumData | NumData[];
  quote?: QuoteData | QuoteData[];
  relation?: RelationData | RelationData[];
  relationList?: RelationListData | RelationListData[];
  rend?: RendData | RendData[];
  repository?: RepositoryData | RepositoryData[];
  stack?: StackData | StackData[];
  symbol?: SymbolData | SymbolData[];
  term?: TermData | TermData[];
  title?: TitleData | TitleData[];
  width?: WidthData | WidthData[];
  ptr?: PtrData | PtrData[];
  ref?: RefData | RefData[];
  choice?: ChoiceData | ChoiceData[];
  corr?: CorrData | CorrData[];
  del?: DelData | DelData[];
  expan?: ExpanData | ExpanData[];
  gap?: GapData | GapData[];
  handShift?: HandShiftData | HandShiftData[];
  orig?: OrigData | OrigData[];
  reg?: RegData | RegData[];
  restore?: RestoreData | RestoreData[];
  sic?: SicData | SicData[];
  subst?: SubstData | SubstData[];
  supplied?: SuppliedData | SuppliedData[];
  unclear?: UnclearData | UnclearData[];
  damage?: DamageData | DamageData[];
};

/**
 * Contains the correct form of an apparent erroneous passage.
 * @see https://music-encoding.org/guidelines/v5/elements/corr.html
 */
export const CorrSchema: v.GenericSchema<CorrData> = v.object({
	...StandardTagSchema.entries,
	...AttrCommonSchema.entries,
	...AttrEditSchema.entries,
	...AttrLangSchema.entries,
	...AttrTransSchema.entries,

	// Child elements - zero or more of each
	/**
	 * Abbreviation or expansion.
	 * @see https://music-encoding.org/guidelines/v5/elements/abbr.html
	 */
	abbr: v.optional(
		v.union([v.lazy(() => AbbrSchema), v.array(v.lazy(() => AbbrSchema))]),
	),

	/**
	 * Addition to the text.
	 * @see https://music-encoding.org/guidelines/v5/elements/add.html
	 */
	add: v.optional(
		v.union([v.lazy(() => AddSchema), v.array(v.lazy(() => AddSchema))]),
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
	 * Choice.
	 * @see https://music-encoding.org/guidelines/v5/elements/choice.html
	 */
	choice: v.optional(
		v.union([v.lazy(() => ChoiceSchema), v.array(v.lazy(() => ChoiceSchema))]),
	),

	/**
	 * Correction (self-reference for recursive structure).
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
	 * Expansion.
	 * @see https://music-encoding.org/guidelines/v5/elements/expan.html
	 */
	expan: v.optional(
		v.union([v.lazy(() => ExpanSchema), v.array(v.lazy(() => ExpanSchema))]),
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
	 * Restoration.
	 * @see https://music-encoding.org/guidelines/v5/elements/restore.html
	 */
	restore: v.optional(
		v.union([v.lazy(() => RestoreSchema), v.array(v.lazy(() => RestoreSchema))]),
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
	 * Damage.
	 * @see https://music-encoding.org/guidelines/v5/elements/damage.html
	 */
	damage: v.optional(
		v.union([v.lazy(() => DamageSchema), v.array(v.lazy(() => DamageSchema))]),
	),
});
