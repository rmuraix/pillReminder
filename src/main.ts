const _Properties = PropertiesService.getScriptProperties();

function getEnv(name: string): string {
  return _Properties.getProperty(name) || "";
}

function doPost(e: any) {
  const eventObj: any = JSON.parse(e.postData.contents);
}

// Send reminder to LINE
function reminder(): void {
  deleteReminderTrigger();

  // [daysPassed, progressDay, pillColor, message]
  const v: [string, number, string, string] = createCardVariables();

  const card = createCard(v[0], v[1], v[2], v[3]);

  const token: string = getEnv("TOKEN");
  const id: string = getEnv("USER_ID");

  postToLine(token, id, "flex", "お薬の時間です", card);

  // Recorded as unrecorded in E1 cell
  setValue(getCell(1, 5), "1");
}

function alert() {
  deleteAlertTrigger();

  const status: number = getCell(1, 5).getValue();

  const token: string = getEnv("TOKEN");
  const id: string = getEnv("USER_ID");

  let card: object;
  if (status === 1) {
    card = createAlertCard();
    postToLine(token, id, "flex", "⚠飲み忘れていませんか？⚠", card);
  } else false;
}
