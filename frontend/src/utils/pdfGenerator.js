import jsPDF from "jspdf";

export function generatePDF(evaluations) {
  const doc = new jsPDF();

  const pageWidth = doc.internal.pageSize.getWidth();
  const margin = 20;
  const maxWidth = pageWidth - margin * 2;

  let y = 20;

  // ---------- HEADER ----------
  doc.setFillColor(33, 150, 243);
  doc.rect(0, 0, pageWidth, 30, "F");

  doc.setTextColor(255,255,255);
  doc.setFontSize(22);
  doc.text("AI INTERVIEW REPORT", pageWidth/2, 18, {
    align:"center"
  });

  doc.setTextColor(0,0,0);

  y = 40;

  doc.setFontSize(12);

  doc.text(
    `Generated on: ${new Date().toLocaleString()}`,
    margin,
    y
  );

  y += 15;

  //----------------------------------------

  evaluations.forEach((item,index)=>{

    if(y>240){
      doc.addPage();
      y=20;
    }

    doc.setFillColor(240,240,240);
    doc.roundedRect(margin,y,maxWidth,10,2,2,"F");

    doc.setFontSize(16);

    doc.text(
      `Question ${index+1}`,
      margin+5,
      y+7
    );

    y+=18;

    //-----------------------

    doc.setFontSize(12);

    doc.setFont(undefined,"bold");
    doc.text("Question:",margin,y);

    doc.setFont(undefined,"normal");

    y+=6;

    const question = doc.splitTextToSize(
      item.question,
      maxWidth
    );

    doc.text(question,margin,y);

    y += question.length*6 +5;

    //-----------------------

    doc.setFont(undefined,"bold");
    doc.text("Your Answer:",margin,y);

    doc.setFont(undefined,"normal");

    y+=6;

    const answer = doc.splitTextToSize(
      item.answer,
      maxWidth
    );

    doc.text(answer,margin,y);

    y += answer.length*6 +5;

    //-----------------------

    doc.setFont(undefined,"bold");
    doc.text(
      `Technical Score : ${item.technical_score}/10`,
      margin,
      y
    );

    y+=8;

    doc.text(
      `Communication Score : ${item.communication_score}/10`,
      margin,
      y
    );

    y+=8;

    doc.text(
      `Overall Score : ${item.overall_score}/10`,
      margin,
      y
    );

    y+=10;

    //-----------------------

    doc.setFont(undefined,"bold");

    doc.text(
      "AI Feedback:",
      margin,
      y
    );

    doc.setFont(undefined,"normal");

    y+=6;

    const feedback = doc.splitTextToSize(
      item.feedback,
      maxWidth
    );

    doc.text(feedback,margin,y);

    y += feedback.length*6 +15;

  });

  doc.save("AI_Interview_Report.pdf");
}