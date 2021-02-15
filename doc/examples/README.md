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

## Advanced examples
*maybe one day*
