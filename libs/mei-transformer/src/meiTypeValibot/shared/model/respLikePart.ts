import * as v from "valibot";
import { type ArrangerData, ArrangerSchema } from "../element/arranger";
import { type AuthorData, AuthorSchema } from "../element/author";
import { type ComposerData, ComposerSchema } from "../element/composer";
import {
	type ContributorData,
	ContributorSchema,
} from "../element/contributor";
import { type EditorData, EditorSchema } from "../element/editor";
import { type FunderData, FunderSchema } from "../element/funder";
import { type LibrettistData, LibrettistSchema } from "../element/librettist";
import { type LyricistData, LyricistSchema } from "../element/lyricist";
import { type SponsorData, SponsorSchema } from "../element/sponsor";

/**
 * Groups elements that delineate particular responsibilities as opposed to the respStmt element that provides for generic statements of responsibility.
 * @see https://music-encoding.org/guidelines/v5/model-classes/model.respLikePart.html
 */
export const ModelRespLikePartSchema: v.GenericSchema<ModelRespLikePartData> =
	v.lazy(() =>
		v.object({
			/**
			 * A person or organization who transcribes a musical composition, usually for a different medium from that of the original; in an arrangement the musical substance remains essentially unchanged.
			 * @see https://music-encoding.org/guidelines/v5/elements/arranger.html
			 */
			arranger: v.optional(v.union([ArrangerSchema, v.array(ArrangerSchema)])),
			/**
			 * The name of the creator of the intellectual content of a non-musical, literary work.
			 * @see https://music-encoding.org/guidelines/v5/elements/author.html
			 */
			author: v.optional(v.union([AuthorSchema, v.array(AuthorSchema)])),
			/**
			 * The name of the creator of the intellectual content of a musical work.
			 * @see https://music-encoding.org/guidelines/v5/elements/composer.html
			 */
			composer: v.optional(v.union([ComposerSchema, v.array(ComposerSchema)])),
			/**
			 * Names of individuals, institutions, or organizations responsible for contributions to the intellectual content of a work, where the specialized elements for authors, editors, etc. do not suffice or do not apply.
			 * @see https://music-encoding.org/guidelines/v5/elements/contributor.html
			 */
			contributor: v.optional(
				v.union([ContributorSchema, v.array(ContributorSchema)]),
			),
			/**
			 * The name of the individual(s), institution(s) or organization(s) acting in an editorial capacity.
			 * @see https://music-encoding.org/guidelines/v5/elements/editor.html
			 */
			editor: v.optional(v.union([EditorSchema, v.array(EditorSchema)])),
			/**
			 * Names of individuals, institutions, or organizations responsible for funding. Funders provide financial support for a project; they are distinct from sponsors, who provide intellectual support and authority.
			 * @see https://music-encoding.org/guidelines/v5/elements/funder.html
			 */
			funder: v.optional(v.union([FunderSchema, v.array(FunderSchema)])),
			/**
			 * Person or organization who is a writer of the text of an opera, oratorio, etc.
			 * @see https://music-encoding.org/guidelines/v5/elements/librettist.html
			 */
			librettist: v.optional(
				v.union([LibrettistSchema, v.array(LibrettistSchema)]),
			),
			/**
			 * Person or organization who is a writer of the text of a song.
			 * @see https://music-encoding.org/guidelines/v5/elements/lyricist.html
			 */
			lyricist: v.optional(v.union([LyricistSchema, v.array(LyricistSchema)])),
			/**
			 * Names of sponsoring individuals, organizations or institutions. Sponsors give their intellectual authority to a project; they are to be distinguished from funders, who provide the funding but do not necessarily take intellectual responsibility.
			 * @see https://music-encoding.org/guidelines/v5/elements/sponsor.html
			 */
			sponsor: v.optional(v.union([SponsorSchema, v.array(SponsorSchema)])),
		}),
	);

export type ModelRespLikePartData = {
	arranger?: ArrangerData | ArrangerData[];
	author?: AuthorData | AuthorData[];
	composer?: ComposerData | ComposerData[];
	contributor?: ContributorData | ContributorData[];
	editor?: EditorData | EditorData[];
	funder?: FunderData | FunderData[];
	librettist?: LibrettistData | LibrettistData[];
	lyricist?: LyricistData | LyricistData[];
	sponsor?: SponsorData | SponsorData[];
};
