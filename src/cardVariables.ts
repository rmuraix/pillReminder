function createCardVariables(): [string, number, string, string] {
  const i1Value: Date | string = getCell(1, 9).getValue();

  const nowDate: Date = new Date();

  // Number of days elapsed since the start of menstruation
  let daysPassed: string;

  // Create the number of days since the start of menstruation to be displayed in the "生理開始から" column of the card
  if (!i1Value) {
    daysPassed = "登録無し";
  } else {
    const menstruationDays: number = dateDiff(new Date(i1Value), nowDate) + 1;
    daysPassed = "" + menstruationDays + "日目";
  }

  // Start date of taking the pill
  const pillStartDate: string =
    PropertiesService.getScriptProperties().getProperty("PILL_STRAT") || "";
  const diffDays: number = dateDiff(new Date(pillStartDate), nowDate) + 1;

  // Calculate how many days in a term
  const progressDay: number = calcProgressDay(diffDays);

  // Pill color(tricurar)
  const pillColor: string = calcPillColor(progressDay);

  // Create message for main section of card
  // createMessage() is return random string
  const message: string = createMessage();

  return [daysPassed, progressDay, pillColor, message];
}
