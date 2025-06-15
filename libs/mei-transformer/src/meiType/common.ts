export type StandardTag =
	| {
			"#text"?: string;
	  }
	| string;

export type AnythingObject = Record<string, any>;

export type NotImplementedTag =
	| (StandardTag & AnythingObject)
	| (StandardTag & AnythingObject)[];
