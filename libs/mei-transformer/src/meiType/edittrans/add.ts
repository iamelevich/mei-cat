import { Type } from "typebox";
import { StandardTagSchema } from "../common";
import { AttrCommonSchema } from "../shared/attr/common";
import { AttrFacsimileSchema } from "../shared/attr/facsimile";
import { AttrLangSchema } from "../shared/attr/lang";
import { AttrEditSchema } from "./attr/edit";
import { AttrTransSchema } from "./attr/trans";

/**
 * Marks an addition to the text.
 * @see https://music-encoding.org/guidelines/v5/elements/add.html
 */
export const AddSchema = Type.Intersect([
	StandardTagSchema,
	AttrCommonSchema,
	AttrEditSchema,
	AttrFacsimileSchema,
	AttrLangSchema,
	AttrTransSchema,
	Type.Object(
		{
			/**
			 * Location of the addition.
			 * One or more values from data.PLACEMENT, separated by spaces.
			 * @see https://music-encoding.org/guidelines/v5/elements/add.html#place
			 * @see https://music-encoding.org/guidelines/v5/data-types/data.PLACEMENT.html
			 */
			"@place": Type.Optional(
				Type.Union([Type.String(), Type.Array(Type.String())]),
			),

			// Child elements - zero or more of each
			/**
			 * Abbreviation or expansion.
			 * @see https://music-encoding.org/guidelines/v5/elements/abbr.html
			 */
			abbr: Type.Optional(
				Type.Union([Type.Ref("abbr"), Type.Array(Type.Ref("abbr"))]),
			),

			/**
			 * Address.
			 * @see https://music-encoding.org/guidelines/v5/elements/address.html
			 */
			address: Type.Optional(
				Type.Union([Type.Ref("address"), Type.Array(Type.Ref("address"))]),
			),

			/**
			 * Annotation.
			 * @see https://music-encoding.org/guidelines/v5/elements/annot.html
			 */
			annot: Type.Optional(
				Type.Union([Type.Ref("annot"), Type.Array(Type.Ref("annot"))]),
			),

			/**
			 * Bibliographic reference.
			 * @see https://music-encoding.org/guidelines/v5/elements/bibl.html
			 */
			bibl: Type.Optional(
				Type.Union([Type.Ref("bibl"), Type.Array(Type.Ref("bibl"))]),
			),

			/**
			 * Structured bibliographic reference.
			 * @see https://music-encoding.org/guidelines/v5/elements/biblStruct.html
			 */
			biblStruct: Type.Optional(
				Type.Union([
					Type.Ref("biblStruct"),
					Type.Array(Type.Ref("biblStruct")),
				]),
			),

			/**
			 * Date.
			 * @see https://music-encoding.org/guidelines/v5/elements/date.html
			 */
			date: Type.Optional(
				Type.Union([Type.Ref("date"), Type.Array(Type.Ref("date"))]),
			),

			/**
			 * Dedicatee.
			 * @see https://music-encoding.org/guidelines/v5/elements/dedicatee.html
			 */
			dedicatee: Type.Optional(
				Type.Union([Type.Ref("dedicatee"), Type.Array(Type.Ref("dedicatee"))]),
			),

			/**
			 * Depth measurement.
			 * @see https://music-encoding.org/guidelines/v5/elements/depth.html
			 */
			depth: Type.Optional(
				Type.Union([Type.Ref("depth"), Type.Array(Type.Ref("depth"))]),
			),

			/**
			 * Dimension.
			 * @see https://music-encoding.org/guidelines/v5/elements/dim.html
			 */
			dim: Type.Optional(
				Type.Union([Type.Ref("dim"), Type.Array(Type.Ref("dim"))]),
			),

			/**
			 * Dimensions.
			 * @see https://music-encoding.org/guidelines/v5/elements/dimensions.html
			 */
			dimensions: Type.Optional(
				Type.Union([
					Type.Ref("dimensions"),
					Type.Array(Type.Ref("dimensions")),
				]),
			),

			/**
			 * Extent.
			 * @see https://music-encoding.org/guidelines/v5/elements/extent.html
			 */
			extent: Type.Optional(
				Type.Union([Type.Ref("extent"), Type.Array(Type.Ref("extent"))]),
			),

			/**
			 * Height measurement.
			 * @see https://music-encoding.org/guidelines/v5/elements/height.html
			 */
			height: Type.Optional(
				Type.Union([Type.Ref("height"), Type.Array(Type.Ref("height"))]),
			),

			/**
			 * Identifier.
			 * @see https://music-encoding.org/guidelines/v5/elements/identifier.html
			 */
			identifier: Type.Optional(
				Type.Union([
					Type.Ref("identifier"),
					Type.Array(Type.Ref("identifier")),
				]),
			),

			/**
			 * Line break.
			 * @see https://music-encoding.org/guidelines/v5/elements/lb.html
			 */
			lb: Type.Optional(
				Type.Union([Type.Ref("lb"), Type.Array(Type.Ref("lb"))]),
			),

			/**
			 * List.
			 * @see https://music-encoding.org/guidelines/v5/elements/list.html
			 */
			list: Type.Optional(
				Type.Union([Type.Ref("list"), Type.Array(Type.Ref("list"))]),
			),

			/**
			 * Name.
			 * @see https://music-encoding.org/guidelines/v5/elements/name.html
			 */
			name: Type.Optional(
				Type.Union([Type.Ref("name"), Type.Array(Type.Ref("name"))]),
			),

			/**
			 * Number.
			 * @see https://music-encoding.org/guidelines/v5/elements/num.html
			 */
			num: Type.Optional(
				Type.Union([Type.Ref("num"), Type.Array(Type.Ref("num"))]),
			),

			/**
			 * Quote.
			 * @see https://music-encoding.org/guidelines/v5/elements/quote.html
			 */
			quote: Type.Optional(
				Type.Union([Type.Ref("quote"), Type.Array(Type.Ref("quote"))]),
			),

			/**
			 * Relation.
			 * @see https://music-encoding.org/guidelines/v5/elements/relation.html
			 */
			relation: Type.Optional(
				Type.Union([Type.Ref("relation"), Type.Array(Type.Ref("relation"))]),
			),

			/**
			 * Relation list.
			 * @see https://music-encoding.org/guidelines/v5/elements/relationList.html
			 */
			relationList: Type.Optional(
				Type.Union([
					Type.Ref("relationList"),
					Type.Array(Type.Ref("relationList")),
				]),
			),

			/**
			 * Rendering.
			 * @see https://music-encoding.org/guidelines/v5/elements/rend.html
			 */
			rend: Type.Optional(
				Type.Union([Type.Ref("rend"), Type.Array(Type.Ref("rend"))]),
			),

			/**
			 * Repository.
			 * @see https://music-encoding.org/guidelines/v5/elements/repository.html
			 */
			repository: Type.Optional(
				Type.Union([
					Type.Ref("repository"),
					Type.Array(Type.Ref("repository")),
				]),
			),

			/**
			 * Stack.
			 * @see https://music-encoding.org/guidelines/v5/elements/stack.html
			 */
			stack: Type.Optional(
				Type.Union([Type.Ref("stack"), Type.Array(Type.Ref("stack"))]),
			),

			/**
			 * Symbol.
			 * @see https://music-encoding.org/guidelines/v5/elements/symbol.html
			 */
			symbol: Type.Optional(
				Type.Union([Type.Ref("symbol"), Type.Array(Type.Ref("symbol"))]),
			),

			/**
			 * Term.
			 * @see https://music-encoding.org/guidelines/v5/elements/term.html
			 */
			term: Type.Optional(
				Type.Union([Type.Ref("term"), Type.Array(Type.Ref("term"))]),
			),

			/**
			 * Title.
			 * @see https://music-encoding.org/guidelines/v5/elements/title.html
			 */
			title: Type.Optional(
				Type.Union([Type.Ref("title"), Type.Array(Type.Ref("title"))]),
			),

			/**
			 * Width measurement.
			 * @see https://music-encoding.org/guidelines/v5/elements/width.html
			 */
			width: Type.Optional(
				Type.Union([Type.Ref("width"), Type.Array(Type.Ref("width"))]),
			),

			/**
			 * Pointer.
			 * @see https://music-encoding.org/guidelines/v5/elements/ptr.html
			 */
			ptr: Type.Optional(
				Type.Union([Type.Ref("ptr"), Type.Array(Type.Ref("ptr"))]),
			),

			/**
			 * Reference.
			 * @see https://music-encoding.org/guidelines/v5/elements/ref.html
			 */
			ref: Type.Optional(
				Type.Union([Type.Ref("ref"), Type.Array(Type.Ref("ref"))]),
			),

			/**
			 * Expansion.
			 * @see https://music-encoding.org/guidelines/v5/elements/expan.html
			 */
			expan: Type.Optional(
				Type.Union([Type.Ref("expan"), Type.Array(Type.Ref("expan"))]),
			),

			/**
			 * Choice.
			 * @see https://music-encoding.org/guidelines/v5/elements/choice.html
			 */
			choice: Type.Optional(
				Type.Union([Type.Ref("choice"), Type.Array(Type.Ref("choice"))]),
			),

			/**
			 * Correction.
			 * @see https://music-encoding.org/guidelines/v5/elements/corr.html
			 */
			corr: Type.Optional(
				Type.Union([Type.Ref("corr"), Type.Array(Type.Ref("corr"))]),
			),

			/**
			 * Deletion.
			 * @see https://music-encoding.org/guidelines/v5/elements/del.html
			 */
			del: Type.Optional(
				Type.Union([Type.Ref("del"), Type.Array(Type.Ref("del"))]),
			),

			/**
			 * Supplied text.
			 * @see https://music-encoding.org/guidelines/v5/elements/supplied.html
			 */
			supplied: Type.Optional(
				Type.Union([Type.Ref("supplied"), Type.Array(Type.Ref("supplied"))]),
			),

			/**
			 * Unclear text.
			 * @see https://music-encoding.org/guidelines/v5/elements/unclear.html
			 */
			unclear: Type.Optional(
				Type.Union([Type.Ref("unclear"), Type.Array(Type.Ref("unclear"))]),
			),

			/**
			 * Restoration.
			 * @see https://music-encoding.org/guidelines/v5/elements/restore.html
			 */
			restore: Type.Optional(
				Type.Union([Type.Ref("restore"), Type.Array(Type.Ref("restore"))]),
			),

			/**
			 * Original text.
			 * @see https://music-encoding.org/guidelines/v5/elements/orig.html
			 */
			orig: Type.Optional(
				Type.Union([Type.Ref("orig"), Type.Array(Type.Ref("orig"))]),
			),

			/**
			 * Regularization.
			 * @see https://music-encoding.org/guidelines/v5/elements/reg.html
			 */
			reg: Type.Optional(
				Type.Union([Type.Ref("reg"), Type.Array(Type.Ref("reg"))]),
			),

			/**
			 * Sic.
			 * @see https://music-encoding.org/guidelines/v5/elements/sic.html
			 */
			sic: Type.Optional(
				Type.Union([Type.Ref("sic"), Type.Array(Type.Ref("sic"))]),
			),

			/**
			 * Substitution.
			 * @see https://music-encoding.org/guidelines/v5/elements/subst.html
			 */
			subst: Type.Optional(
				Type.Union([Type.Ref("subst"), Type.Array(Type.Ref("subst"))]),
			),

			/**
			 * Gap.
			 * @see https://music-encoding.org/guidelines/v5/elements/gap.html
			 */
			gap: Type.Optional(
				Type.Union([Type.Ref("gap"), Type.Array(Type.Ref("gap"))]),
			),

			/**
			 * Hand shift.
			 * @see https://music-encoding.org/guidelines/v5/elements/handShift.html
			 */
			handShift: Type.Optional(
				Type.Union([Type.Ref("handShift"), Type.Array(Type.Ref("handShift"))]),
			),

			/**
			 * Contains an area of damage to the physical medium.
			 * @see https://music-encoding.org/guidelines/v5/elements/damage.html
			 */
			damage: Type.Optional(
				Type.Union([Type.Ref("damage"), Type.Array(Type.Ref("damage"))]),
			),
		},
		{ additionalProperties: false },
	),
]);
