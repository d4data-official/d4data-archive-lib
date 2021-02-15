# Examples

## Basic examples

### Get archive normalized data (profile)

Example of **profile** retrieval from an archive with the library

```typescript
import { ArchiveFactory } from 'd4data-archive-lib'

// Instantiate factory with absolute archive path
new ArchiveFactory('<archive_path>')
  // Identify, extract and return correct standardizer
  .getStandardizer()
  // Retrieved profile from archive thanks to the standardizer
  .then(standardizer => standardizer.getProfile())
  // Print profile retrieved from archive
  .then(profile => console.log(profile))
  // Catch any error during the process
  .catch(error => console.error(error))
```

Same example as above with `async/await`:
```typescript
import { ArchiveFactory } from 'd4data-archive-lib'

async function process() {
  // Instantiate factory with absolute archive path
  const standardizer = await new ArchiveFactory('<archive_path>')
    // Identify, extract and return correct standardizer
    .getStandardizer()

  // Retrieved profile from archive thanks to the standardizer
  // Print profile retrieved from archive
  console.log(await standardizer.getProfile())
}

process()
  // Catch any error during the process
  .catch(error => console.error(error))
```

⚠ `<archive_path>` must be replaced with an absolute archive path

## Advanced examples
*maybe one day*
