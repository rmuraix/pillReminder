const _sheetId =
  PropertiesService.getScriptProperties().getProperty("SHEET_ID") || "";
const _sheet = SpreadsheetApp.openById(_sheetId).getActiveSheet();

function getCell(
  row: number,
  column: number
): GoogleAppsScript.Spreadsheet.Range {
  return _sheet.getRange(row, column);
}

function setValue(
  cell: GoogleAppsScript.Spreadsheet.Range,
  value: string
): void {
  cell.setValue(value);
}
