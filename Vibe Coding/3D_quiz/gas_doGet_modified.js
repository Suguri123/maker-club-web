function doGet(e) { // e parameter contains request parameters
  const ss = SpreadsheetApp.getActiveSpreadsheet();
  // 요청 매개변수에서 시트 이름을 가져오고, 없으면 "Sheet1"을 기본값으로 사용합니다.
  const sheetName = e.parameter.sheetName || "Sheet1";
  const sheet = ss.getSheetByName(sheetName);

  if (!sheet) {
    // 시트를 찾을 수 없으면 오류 메시지를 반환합니다.
    return ContentService.createTextOutput(JSON.stringify({ error: "Sheet not found: " + sheetName }))
      .setMimeType(ContentService.MimeType.JSON);
  }
  
  // 시트의 모든 데이터를 가져옵니다.
  const data = sheet.getDataRange().getValues();
  
  const questions = [];
  
  // 1행은 제목이므로 i=1 (2행)부터 반복합니다.
  for (let i = 1; i < data.length; i++) {
    let row = data[i];
    
    // 빈 줄이 있으면 건너뜀 (첫 번째 열 기준)
    if (!row[0]) continue; 
    
    let q = {
      question: row[0],
      options: [row[1], row[2], row[3], row[4]],
      answer: row[5]
    };
    questions.push(q);
  }
  
  // 데이터를 JSON 형태로 변환하여 내보냅니다.
  return ContentService.createTextOutput(JSON.stringify(questions))
    .setMimeType(ContentService.MimeType.JSON);
}