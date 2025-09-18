# MEI Module Management Script

This script automates the management of MEI (Music Encoding Initiative) modules in the meiTypeValibot directory.

## What it does

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
# Run the script
bun run manage-modules

# Or run directly
bun run scripts/manage-modules.ts
```

## Output

The script will:
- Create missing module directories
- Report missing schemas and automatically create/delete files:
  - Missing elements, macros, attributes, and models (automatically created with templates)
  - Extra files not in MEI specification (automatically deleted)
- Update index.ts files with all available exports

## Example Output

```
📋 Processing module: MEI.cmnOrnaments
✓ Directory created/verified: /path/to/cmnornaments
Fetching module info for MEI.cmnOrnaments...
  Found 3 elements, 0 macros, 5 attributes, 1 models
  ⚠ Issues found for MEI.cmnOrnaments:
    Missing 9 files:
      Elements: mordent, trill, turn
      Attributes: att.mordent.log, att.trill.log, att.turn.log, att.ornam, att.ornamentaccid
      Models: model.ornamentLike.cmn
    Extra files (not in MEI spec): unknownFile.ts, model/wrongModel.ts
      🗑️  Deleted: unknownFile.ts
      🗑️  Deleted: model/wrongModel.ts
      📄 Created element: mordent.ts
      📄 Created element: trill.ts
      📄 Created element: turn.ts
      📄 Created attribute: mordent.log.ts
      📄 Created attribute: trill.log.ts
      📄 Created attribute: turn.log.ts
      📄 Created attribute: ornam.ts
      📄 Created attribute: ornamentaccid.ts
      📄 Created model: ornamentLike.cmn.ts
      📝 Updated index.ts with 10 exports
```

## File Structure

The script expects files to be organized according to MEI conventions:

- **Elements**: Direct files in module directory (e.g., `mordent.ts`)
- **Models**: In `model/` subdirectory without `model.` prefix (e.g., `model/ornamentLike.cmn.ts`)
- **Macros**: In `macro/` subdirectory without `macro.` prefix (e.g., `macro/availabilityPart.ts`)
- **Attributes**: In `attr/` subdirectory without `att.` prefix (e.g., `attr/mordent.log.ts`)

## Requirements

- Bun runtime
- Internet connection (to fetch MEI documentation)
- Write permissions to the meiTypeValibot directory

## Notes

- The script uses regex parsing to extract information from MEI documentation HTML
- It handles URL generation automatically based on MEI's documentation structure
- The script respects existing files and only reports missing ones
- Missing items are listed by category (elements, macros, attributes, models) for easy identification
- Extra files that don't belong to the MEI specification are identified and automatically deleted
- Common files like `index.ts` and `common.ts` are automatically excluded from extra file checks
- The `index.ts` file is automatically generated/updated with exports for all available elements, macros, attributes, and models
- Exports are organized by sections (Elements, Macros, Attributes, Models) and sorted alphabetically within each section
- Includes proper relative paths for subdirectories
- Missing files are automatically created with appropriate Valibot template schemas
- Template files include proper imports, JSDoc comments with MEI documentation links, and TODO comments for implementation
