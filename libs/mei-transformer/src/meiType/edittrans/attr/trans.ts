import { Type } from "typebox";

/**
 * Transcription attributes for genetic and editorial information.
 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.trans.html
 */
export const AttrTransSchema = Type.Object({
	/**
	 * Identifies one or more metadata elements (other than classification terms) within the header, which are understood to apply to the element bearing this attribute and its content.
	 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.trans.html#decls
	 */
	"@decls": Type.Optional(Type.String()),
	/**
	 * Signifies the hand responsible for an action. The value must be the ID of a hand element declared in the header.
	 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.trans.html#hand
	 */
	"@hand": Type.Optional(Type.String()),
	/**
	 * The @instant attribute is syntactic sugar for classifying a scribal intervention as an ad-hoc modification; that is, one which does not interrupt the writing process.
	 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.trans.html#instant
	 */
	"@instant": Type.Optional(
		Type.Union([Type.Boolean(), Type.Literal("unknown")]),
	),
	/**
	 * Used to assign a sequence number related to the order in which the encoded features carrying this attribute are believed to have occurred.
	 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.trans.html#seq
	 */
	"@seq": Type.Optional(Type.Number()),
	/**
	 * Points to the genetic state that results from this modification.
	 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.trans.html#state
	 */
	"@state": Type.Optional(Type.String()),
});
