import { type Static, Type } from "@sinclair/typebox";

/**
 * Attributes that specify the intended meaning when a participant in a relationship is itself a pointer.
 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.targetEval.html
 */
export const AttrTargetEvalSchema = Type.Object({
	/**
	 * Specifies the intended meaning when a participant in a relationship is itself a pointer.
	 * Allowed values are:
	 *   - `all` (If an element pointed to is itself a pointer, then the target of that pointer will be taken, and so on, until an element is found which is not a pointer.),
	 *   - `one` (If an element pointed to is itself a pointer, then its target (whether a pointer or not) is taken as the target of this pointer.),
	 *   - `none` (No further evaluation of targets is carried out beyond that needed to find the element(s) specified in plist or target attribute.)
	 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.targetEval.html
	 */
	"@evaluate": Type.Optional(
		Type.Union([
			Type.Literal("all"),
			Type.Literal("one"),
			Type.Literal("none"),
		]),
	),
});

export type AttrTargetEval = Static<typeof AttrTargetEvalSchema>;
