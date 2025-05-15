// Replit example for HTML to PDF converter
import { convertHtmlToPdf } from "./mod.ts";

// Simple example HTML
const html = `
<!DOCTYPE html>
<html>
<head>
    <title>Simple Document</title>
    <style>
        body { 
            font-family: Arial, sans-serif;
            margin: 40px;
            line-height: 1.6;
        }
        h1 { color: #2196F3; }
    </style>
</head>
<body>
    <h1>Hello from Replit!</h1>
    <p>This is a simple HTML to PDF conversion example.</p>
    <p>Click the preview button in Replit to see this page, then use your browser's print function (Ctrl/Cmd + P) to save as PDF.</p>
</body>
</html>
`;

// Convert HTML to PDF
await convertHtmlToPdf(html, "output.pdf");
