import { convertHtmlToPdf } from "./mod.ts";

// Example HTML certificate
const html = `
<!DOCTYPE html>
<html lang="de">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>SafetyForYou Zertifikat</title>
</head>
<body style="font-family: Arial, sans-serif; margin: 0; padding: 10px; display: flex; justify-content: center; align-items: center; min-height: 100vh; background-color: #f5f5f5;">
    <div style="width: 100%; max-width: 1200px; height: 600px; background-color: white; box-shadow: 0 4px 8px rgba(0,0,0,0.1); position: relative; margin: 0 auto; display: flex;">
        <div style="width: 25%; background-color: #8C1D24; color: white; padding: 20px; display: flex; flex-direction: column; justify-content: center;">
            <div style="font-size: 24px;">SafetyForYou</div>
            <div style="font-size: 42px; font-weight: 700; margin-top: 10px;">Zertifikat</div>
        </div>
        <div style="flex: 1; padding: 30px; display: flex; flex-direction: column; justify-content: center;">
            <div style="padding: 0;">
                <p style="font-size: 18px; margin: 5px 0;">Dieses Dokument bescheinigt, dass</p>
                <h1 style="font-size: 42px; color: #8C1D24; margin: 10px 0; font-weight: 700;">Sophie Richter</h1>
                <hr style="width: 30%; border: 2px solid #8C1D24; margin: 10px 0;">
                <p style="font-size: 22px; margin: 5px 0;">Hat den Test Kurs abgeschlossen</p>
                <p style="font-size: 18px; margin: 15px 0 5px;">mit Prüfungsergebnis:</p>
                <p style="font-size: 32px; color: #8C1D24; font-weight: bold; margin: 5px 0;">65.00%</p>
            </div>
            <div style="position: absolute; bottom: 30px; right: 30px; text-align: right;">
                <img src="" alt="" style="width: 150px; height: auto;">
                <p style="font-size: 14px; margin: 5px 0;">Erdem Günay | Kursleiter</p>
            </div>
        </div>
    </div>
</body>
</html>
`;

// Convert HTML to PDF
await convertHtmlToPdf(html, "certificate.pdf");
