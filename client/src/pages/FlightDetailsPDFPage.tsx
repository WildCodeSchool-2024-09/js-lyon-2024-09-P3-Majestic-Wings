import { PDFDocument, StandardFonts, rgb } from "pdf-lib";

async function PdfPage() {
  // Créer le document PDF
  const pdfDoc = await PDFDocument.create();
  const timesRomanFont = await pdfDoc.embedFont(StandardFonts.TimesRoman);

  // mettre fetch pour recuperer les données
  // pour mail node mailer a installer dans le back

  // Créer une nouvelle page

  const page = pdfDoc.addPage();
  const { width, height } = page.getSize();
  const fontSize = 30;

  // Titre du document
  page.drawText("Marco PDF Generé !", {
    x: width - 50,
    y: height - 4 * fontSize,
    size: fontSize,
    font: timesRomanFont,
    color: rgb(0, 0.53, 0.71),
  });

  // Ajouter les données au PDF

  // Exemple de parcours et d'affichage des données

  // Générer et télécharger le PDF

  const pdfBytes = await pdfDoc.save();
  const blob = new Blob([pdfBytes], { type: "application/pdf" });
  const link = document.createElement("a");
  link.href = URL.createObjectURL(blob);
  link.download = "generated.pdf";
  link.click();
}

export default PdfPage;
