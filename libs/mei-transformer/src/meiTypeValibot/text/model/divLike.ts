import * as v from "valibot";
import { AbbrSchema, type AbbrData } from "../../shared/abbr";
import { AddSchema, type AddData } from "../../edittrans/add";
import { BackSchema, type BackData } from "../back";
import { BodySchema, type BodyData } from "../body";
import { CorrSchema, type CorrData } from "../../edittrans/corr";
import { DamageSchema, type DamageData } from "../../edittrans/damage";
import { DelSchema, type DelData } from "../../edittrans/del";
import { DivSchema, type DivData } from "../div";
import { ExpanSchema, type ExpanData } from "../../edittrans/expan";
import { FrontSchema, type FrontData } from "../front";
import { HistorySchema, type HistoryData } from "../../header/history";
import { LemSchema, type LemData } from "../../critapp/lem";
import { OrigSchema, type OrigData } from "../../edittrans/orig";
import { PartSchema, type PartData } from "../part";
import { RdgSchema, type RdgData } from "../../critapp/rdg";
import { RegSchema, type RegData } from "../../edittrans/reg";
import { RestoreSchema, type RestoreData } from "../../edittrans/restore";
import { ScoreSchema, type ScoreData } from "../score";
import { SectionSchema, type SectionData } from "../section";
import { SicSchema, type SicData } from "../../edittrans/sic";
import { SuppliedSchema, type SuppliedData } from "../../edittrans/supplied";
import { SyllableSchema, type SyllableData } from "../syllable";
import { UnclearSchema, type UnclearData } from "../../edittrans/unclear";

/**
 * Groups elements used to represent generic structural divisions of text.
 * @see https://music-encoding.org/guidelines/v5/model-classes/model.divLike.html
 */
export const DivLikeSchema = v.object({
  /**
   * A generic element for 1) a shortened form of a word, including an acronym or 2) a shorthand notation.
   * @see https://music-encoding.org/guidelines/v5/elements/abbr.html
   */
  abbr: v.optional(
    v.union([v.lazy(() => AbbrSchema), v.array(v.lazy(() => AbbrSchema))]),
  ),

  /**
   * Marks an addition to the text.
   * @see https://music-encoding.org/guidelines/v5/elements/add.html
   */
  add: v.optional(
    v.union([v.lazy(() => AddSchema), v.array(v.lazy(() => AddSchema))]),
  ),

  /**
   * Contains any appendixes, advertisements, indexes, etc. following the main body of a musical text.
   * @see https://music-encoding.org/guidelines/v5/elements/back.html
   */
  back: v.optional(
    v.union([v.lazy(() => BackSchema), v.array(v.lazy(() => BackSchema))]),
  ),

  /**
   * Contains the whole of a single musical text, excluding any front or back matter.
   * @see https://music-encoding.org/guidelines/v5/elements/body.html
   */
  body: v.optional(
    v.union([v.lazy(() => BodySchema), v.array(v.lazy(() => BodySchema))]),
  ),

  /**
   * Contains the correct form of an apparent erroneous passage.
   * @see https://music-encoding.org/guidelines/v5/elements/corr.html
   */
  corr: v.optional(
    v.union([v.lazy(() => CorrSchema), v.array(v.lazy(() => CorrSchema))]),
  ),

  /**
   * Contains an area of damage to the physical medium.
   * @see https://music-encoding.org/guidelines/v5/elements/damage.html
   */
  damage: v.optional(
    v.union([v.lazy(() => DamageSchema), v.array(v.lazy(() => DamageSchema))]),
  ),

  /**
   * Contains information deleted, marked as deleted, or otherwise indicated as superfluous or spurious in the copy text by an author, scribe, annotator, or corrector.
   * @see https://music-encoding.org/guidelines/v5/elements/del.html
   */
  del: v.optional(
    v.union([v.lazy(() => DelSchema), v.array(v.lazy(() => DelSchema))]),
  ),

  /**
   * Major structural division of text, such as a preface, chapter or section.
   * @see https://music-encoding.org/guidelines/v5/elements/div.html
   */
  div: v.optional(
    v.union([v.lazy(() => DivSchema), v.array(v.lazy(() => DivSchema))]),
  ),

  /**
   * Contains the expansion of an abbreviation.
   * @see https://music-encoding.org/guidelines/v5/elements/expan.html
   */
  expan: v.optional(
    v.union([v.lazy(() => ExpanSchema), v.array(v.lazy(() => ExpanSchema))]),
  ),

  /**
   * Bundles prefatory text found before the start of the musical text.
   * @see https://music-encoding.org/guidelines/v5/elements/front.html
   */
  front: v.optional(
    v.union([v.lazy(() => FrontSchema), v.array(v.lazy(() => FrontSchema))]),
  ),

  /**
   * Provides a container for information about the history of a resource other than the circumstances of its creation.
   * @see https://music-encoding.org/guidelines/v5/elements/history.html
   */
  history: v.optional(
    v.union([v.lazy(() => HistorySchema), v.array(v.lazy(() => HistorySchema))]),
  ),

  /**
   * Contains the lemma, or base text, of a textual variation.
   * @see https://music-encoding.org/guidelines/v5/elements/lem.html
   */
  lem: v.optional(
    v.union([v.lazy(() => LemSchema), v.array(v.lazy(() => LemSchema))]),
  ),

  /**
   * Contains material which is marked as following the original, rather than being normalized or corrected.
   * @see https://music-encoding.org/guidelines/v5/elements/orig.html
   */
  orig: v.optional(
    v.union([v.lazy(() => OrigSchema), v.array(v.lazy(() => OrigSchema))]),
  ),

  /**
   * An alternative visual rendition of the score from the point of view of a particular performer (or group of performers).
   * @see https://music-encoding.org/guidelines/v5/elements/part.html
   */
  part: v.optional(
    v.union([v.lazy(() => PartSchema), v.array(v.lazy(() => PartSchema))]),
  ),

  /**
   * Contains a single reading within a textual variation.
   * @see https://music-encoding.org/guidelines/v5/elements/rdg.html
   */
  rdg: v.optional(
    v.union([v.lazy(() => RdgSchema), v.array(v.lazy(() => RdgSchema))]),
  ),

  /**
   * Contains material which has been regularized or normalized in some sense.
   * @see https://music-encoding.org/guidelines/v5/elements/reg.html
   */
  reg: v.optional(
    v.union([v.lazy(() => RegSchema), v.array(v.lazy(() => RegSchema))]),
  ),

  /**
   * Indicates restoration of material to an earlier state by cancellation of an editorial or authorial marking or instruction.
   * @see https://music-encoding.org/guidelines/v5/elements/restore.html
   */
  restore: v.optional(
    v.union([v.lazy(() => RestoreSchema), v.array(v.lazy(() => RestoreSchema))]),
  ),

  /**
   * Full score view of the musical content.
   * @see https://music-encoding.org/guidelines/v5/elements/score.html
   */
  score: v.optional(
    v.union([v.lazy(() => ScoreSchema), v.array(v.lazy(() => ScoreSchema))]),
  ),

  /**
   * Segment of music data.
   * @see https://music-encoding.org/guidelines/v5/elements/section.html
   */
  section: v.optional(
    v.union([v.lazy(() => SectionSchema), v.array(v.lazy(() => SectionSchema))]),
  ),

  /**
   * Contains apparently incorrect or inaccurate material.
   * @see https://music-encoding.org/guidelines/v5/elements/sic.html
   */
  sic: v.optional(
    v.union([v.lazy(() => SicSchema), v.array(v.lazy(() => SicSchema))]),
  ),

  /**
   * Contains material supplied by the transcriber or editor for any reason.
   * @see https://music-encoding.org/guidelines/v5/elements/supplied.html
   */
  supplied: v.optional(
    v.union([v.lazy(() => SuppliedSchema), v.array(v.lazy(() => SuppliedSchema))]),
  ),

  /**
   * Neume notation can be thought of as "neumed text". Therefore, the syllable element provides high-level organization in this repertoire.
   * @see https://music-encoding.org/guidelines/v5/elements/syllable.html
   */
  syllable: v.optional(
    v.union([v.lazy(() => SyllableSchema), v.array(v.lazy(() => SyllableSchema))]),
  ),

  /**
   * Contains material that cannot be transcribed with certainty because it is illegible or inaudible in the source.
   * @see https://music-encoding.org/guidelines/v5/elements/unclear.html
   */
  unclear: v.optional(
    v.union([v.lazy(() => UnclearSchema), v.array(v.lazy(() => UnclearSchema))]),
  ),
});

// Due to circular references, we need to define the DivLikeData type here and can't infer it from the schema
export type DivLikeData = {
  abbr?: AbbrData | AbbrData[];
  add?: AddData | AddData[];
  back?: BackData | BackData[];
  body?: BodyData | BodyData[];
  corr?: CorrData | CorrData[];
  damage?: DamageData | DamageData[];
  del?: DelData | DelData[];
  div?: DivData | DivData[];
  expan?: ExpanData | ExpanData[];
  front?: FrontData | FrontData[];
  history?: HistoryData | HistoryData[];
  lem?: LemData | LemData[];
  orig?: OrigData | OrigData[];
  part?: PartData | PartData[];
  rdg?: RdgData | RdgData[];
  reg?: RegData | RegData[];
  restore?: RestoreData | RestoreData[];
  score?: ScoreData | ScoreData[];
  section?: SectionData | SectionData[];
  sic?: SicData | SicData[];
  supplied?: SuppliedData | SuppliedData[];
  syllable?: SyllableData | SyllableData[];
  unclear?: UnclearData | UnclearData[];
};