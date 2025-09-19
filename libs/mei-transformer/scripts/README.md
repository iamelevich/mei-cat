# MEI Schema Generation Scripts

This directory contains scripts for managing and generating MEI (Music Encoding Initiative) schema files.

## Scripts Overview

### 1. Module Management Script (`manage-modules.ts`)

This script automates the management of MEI modules in the meiTypeValibot directory.

### 2. JSON Definition Generator (`generate-json-def.ts`)

This script generates JSON definition files from MEI components in a custom format used by other scripts.

### 3. Valibot Schema Generator (`generate-valibot.ts`)

This script generates Valibot schema files from MEI component definitions. It creates:
- Element schemas with proper attribute and content model handling
- Model schemas for MEI model classes
- Macro schemas for reusable content models
- Attribute schemas for attribute classes
- Common schema for standard tag handling
- Global index file for easy imports

## Module Management Script

1. **Scans existing modules**: Gets all current subfolders in the `meiTypeValibot/` directory
2. **Fetches MEI modules**: Retrieves the complete list of MEI modules from the official documentation (excluding the main MEI module)
3. **Creates missing folders**: Ensures all module directories exist
4. **Scrapes module details**: For each module, fetches the module page and extracts:
   - Elements
   - Macros
   - Attributes
   - Models
5. **Checks file existence**: Verifies if corresponding `.ts` files exist for each item
6. **Reports missing items**: Outputs which elements, macros, attributes, and models are missing
7. **Creates missing files**: Automatically generates template files for missing MEI components
8. **Identifies and deletes extra files**: Finds and automatically removes files that are not part of the official MEI specification
9. **Updates index.ts files**: Automatically generates/updates the index.ts file for each module with all available exports

## Usage

```bash
# Run the module management script
bun run manage-modules

# Or run directly
bun run scripts/manage-modules.ts

# Generate JSON definition files
bun run generate-json-def

# Or run directly
bun run scripts/generate-json-def.ts

# Generate Valibot schema files
bun run generate-valibot

# Or run directly
bun run scripts/generate-valibot.ts
```

## Module Management Output

The module management script will:
- Create missing module directories
- Report missing schemas and automatically create/delete files:
  - Missing elements, macros, attributes, and models (automatically created with templates)
  - Extra files not in MEI specification (automatically deleted)
- Update index.ts files with all available exports

## JSON Definition Output

The JSON definition generator will:
- Generate JSON definition files for all MEI components in a custom format
- Create definition files for each component type (elements, macros, attributes, models)
- Include component metadata like descriptions, URLs, and relationships
- Generate files that are used as input by other scripts (like the Valibot generator)

## Valibot Schema Output

The Valibot schema generator will:
- Generate TypeScript files with Valibot schemas for all MEI components
- Create properly structured schemas with:
  - Base schemas for attributes
  - Content model handling
  - Proper type definitions
  - Circular dependency resolution
- Generate index files for each module
- Generate a global index file for easy imports
- Format and lint all generated files

## File Structure

The scripts expect and generate files organized according to MEI conventions:

- **Elements**: Direct files in module directory (e.g., `mordent.ts`)
- **Models**: In `model/` subdirectory without `model.` prefix (e.g., `model/ornamentLike.cmn.ts`)
- **Macros**: In `macro/` subdirectory without `macro.` prefix (e.g., `macro/availabilityPart.ts`)
- **Attributes**: In `attr/` subdirectory without `att.` prefix (e.g., `attr/mordent.log.ts`)
- **Common**: Root-level `common.ts` with standard tag schema
- **Global Index**: Root-level `index.ts` exporting all modules

## Requirements

- Bun runtime
- Internet connection (to fetch MEI documentation)
- Write permissions to the output directories

## Notes

- The scripts use regex parsing to extract information from MEI documentation HTML
- They handle URL generation automatically based on MEI's documentation structure
- Generated files include:
  - Proper imports and exports
  - JSDoc comments with MEI documentation links
  - Type definitions and schema validations
  - Proper handling of circular dependencies
  - Formatted and linted code
- Index files are automatically generated with:
  - Exports organized by sections (Elements, Macros, Attributes, Models)
  - Alphabetically sorted exports
  - Proper relative paths for subdirectories

