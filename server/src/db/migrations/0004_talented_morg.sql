CREATE TABLE "person" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"pub_stmt_id" uuid,
	"name" text NOT NULL,
	"role" text DEFAULT 'unknown' NOT NULL,
	"created_at" timestamp DEFAULT now() NOT NULL,
	"updated_at" timestamp DEFAULT now() NOT NULL
);
--> statement-breakpoint
CREATE TABLE "pub_stmt" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"file_desc_id" uuid,
	"date" text,
	"company" json NOT NULL,
	"created_at" timestamp DEFAULT now() NOT NULL,
	"updated_at" timestamp DEFAULT now() NOT NULL
);
--> statement-breakpoint
ALTER TABLE "person" ADD CONSTRAINT "person_pub_stmt_id_pub_stmt_id_fk" FOREIGN KEY ("pub_stmt_id") REFERENCES "public"."pub_stmt"("id") ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "pub_stmt" ADD CONSTRAINT "pub_stmt_file_desc_id_file_desc_id_fk" FOREIGN KEY ("file_desc_id") REFERENCES "public"."file_desc"("id") ON DELETE cascade ON UPDATE no action;