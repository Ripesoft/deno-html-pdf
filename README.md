# deno-html-pdf

A simple Deno module to convert HTML content to PDF files using the system's default browser.

## Features

- Convert HTML strings to PDF files
- Uses system's default browser for high-quality PDF generation
- No external dependencies required
- Cross-platform support (Windows, Linux, macOS)
- Works on Replit!

## Prerequisites

- [Deno](https://deno.land/) installed on your system, or
- A Replit account (no installation needed)

## Installation

You can install this module using JSR:

```typescript
import { convertHtmlToPdf } from "@ripesoft/html-pdf";
```

Or use it directly via JSR's CDN:

```typescript
import { convertHtmlToPdf } from "jsr:@ripesoft/html-pdf";
```

## Usage

```typescript
// Import the module
import { convertHtmlToPdf } from "@ripesoft/html-pdf";

// Your HTML content
const html = `
<!DOCTYPE html>
<html>
<head>
    <title>Example</title>
</head>
<body>
    <h1>Hello World!</h1>
</body>
</html>
`;

// Convert to PDF
await convertHtmlToPdf(html, "output.pdf");
```

### Required Permissions

The module requires the following permissions:
- `--allow-read`: To read temporary HTML files
- `--allow-write`: To write temporary HTML and output PDF files
- `--allow-run`: To open the system's default browser

Run your script with:

```bash
deno run --allow-read --allow-write --allow-run your_script.ts
```

## Examples

Check out these example files:
- `example.ts`: Complete example of generating a certificate as PDF
- `replit_example.ts`: Simple example optimized for Replit

## Contributing

1. Fork it
2. Create your feature branch (`git checkout -b feature/fooBar`)
3. Commit your changes (`git commit -am 'Add some fooBar'`)
4. Push to the branch (`git push origin feature/fooBar`)
5. Create a new Pull Request

## Versioning

This package follows semantic versioning. To release a new version:

1. Update the version in `jsr.json`
2. Commit your changes
3. Create a new tag:
   ```bash
   git tag v1.0.0  # Replace with your version
   git push origin v1.0.0
   ```

The package will be automatically published to JSR via GitHub Actions when you push a new tag.

## License

MIT License