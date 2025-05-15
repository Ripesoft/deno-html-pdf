/**
 * A simple HTML to PDF converter for Deno
 * @module
 */

/**
 * Converts HTML content to PDF by opening it in the default browser
 * @param htmlContent The HTML content to convert
 * @param outputPath The desired output path for the PDF file
 * @returns Promise<void>
 */
export async function convertHtmlToPdf(htmlContent: string, outputPath: string): Promise<void> {
  try {
    // Create a temporary HTML file
    const tempHtmlPath = "temp.html";
    await Deno.writeTextFile(tempHtmlPath, htmlContent);

    // Get the absolute path
    const absolutePath = await Deno.realPath(tempHtmlPath);
    
    console.log("1. Opening HTML file in your default browser...");
    console.log("2. Use Ctrl+P or the print option in your browser");
    console.log("3. Select 'Save as PDF' and save to:", outputPath);
      // Open the HTML file in the browser - platform specific
    const process = Deno.build.os === "windows"
      ? new Deno.Command("powershell", {
          args: ["-Command", `Start-Process '${absolutePath}'`]
        })
      : new Deno.Command("xdg-open", {
          args: [absolutePath]
        });
    
    await process.output();
  } catch (error) {
    console.error("Error opening HTML file:", error);
    throw error;
  }
}
