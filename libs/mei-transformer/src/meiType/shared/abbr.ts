import { Type } from "typebox";
import { StandardTagSchema } from "../common";
import { AttrCommonSchema } from "./attr/common";
import { AttrEditSchema } from "../edittrans/attr/edit";
import { AttrTransSchema } from "../edittrans/attr/trans";
import { AttrFacsimileSchema } from "./attr/facsimile";
import { AttrLangSchema } from "./attr/lang";

/**
 * A generic element for 1) a shortened form of a word, including an acronym or 2) a shorthand notation.
 * @see https://music-encoding.org/guidelines/v5/elements/abbr.html
 */
export const AbbrSchema = Type.Intersect([
  StandardTagSchema,
  AttrCommonSchema,
  AttrEditSchema,
  AttrFacsimileSchema,
  AttrLangSchema,
  AttrTransSchema,
  Type.Object(
    {
      /**
       * Records the expansion of a text abbreviation.
       * @see https://music-encoding.org/guidelines/v5/elements/abbr.html
       */
      "@expan": Type.Optional(Type.String()),

      // Content model according to MEI spec:
      // rng:zeroOrMore - choice of text OR model.divLike OR model.editLike OR model.editTransPart OR model.fLike OR model.graphicPrimitiveLike OR model.layerPart OR model.milestoneLike.music OR model.neumeComponentModifierLike OR model.neumeModifierLike OR model.neumePart OR model.sectionPart OR model.staffGrpLike OR model.transcriptionLike
      // Text content is handled by Type.String() in the schema

      // model.editLike elements
      /**
       * Groups a number of alternative encodings for the same point in a text.
       * @see https://music-encoding.org/guidelines/v5/elements/choice.html
       */
      choice: Type.Optional(
        Type.Union([
          Type.Ref("choice"),
          Type.Array(Type.Ref("choice")),
        ]),
      ),

      /**
       * Groups transcriptional elements when the combination is to be regarded as a single intervention in the text.
       * @see https://music-encoding.org/guidelines/v5/elements/subst.html
       */
      subst: Type.Optional(Type.Union([Type.Ref("subst"), Type.Array(Type.Ref("subst"))])),

      // model.transcriptionLike elements
      /**
       * Marks an addition to the text.
       * @see https://music-encoding.org/guidelines/v5/elements/add.html
       */
      add: Type.Optional(Type.Union([Type.Ref("add"), Type.Array(Type.Ref("add"))])),

      /**
       * Contains the correct form of an apparent erroneous passage.
       * @see https://music-encoding.org/guidelines/v5/elements/corr.html
       */
      corr: Type.Optional(Type.Union([Type.Ref("corr"), Type.Array(Type.Ref("corr"))])),

      /**
       * Contains an area of damage to the physical medium.
       * @see https://music-encoding.org/guidelines/v5/elements/damage.html
       */
      damage: Type.Optional(
      	Type.Union([Type.Ref("damage"), Type.Array(Type.Ref("damage"))]),
      ),

      /**
       * Contains information deleted, marked as deleted, or otherwise indicated as superfluous or spurious in the copy text by an author, scribe, annotator, or corrector.
       * @see https://music-encoding.org/guidelines/v5/elements/del.html
       */
      del: Type.Optional(Type.Union([Type.Ref("del"), Type.Array(Type.Ref("del"))])),

      /**
       * Indicates a point where material has been omitted in a transcription, whether as part of sampling practice or for editorial reasons described in the MEI header.
       * @see https://music-encoding.org/guidelines/v5/elements/gap.html
       */
      gap: Type.Optional(Type.Union([Type.Ref("gap"), Type.Array(Type.Ref("gap"))])),

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
])