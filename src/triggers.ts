function setTrigger() {
    var triggerDay = new Date();
    triggerDay.setHours(23);
    triggerDay.setMinutes(0);
    ScriptApp.newTrigger("reminder").timeBased().at(triggerDay).create();

    triggerDay.setHours(23);
    triggerDay.setMinutes(59);
    ScriptApp.newTrigger("alert").timeBased().at(triggerDay).create();
  }
  
  function deleteReminderTrigger() {
    var triggers = ScriptApp.getProjectTriggers();
    for (var i = 0; i < triggers.length; i++) {
      if (triggers[i].getHandlerFunction() == "reminder") {
        ScriptApp.deleteTrigger(triggers[i]);
      }
    }
  }
    
  function deleteAlertTrigger() {
    var triggers = ScriptApp.getProjectTriggers();
    for (var i = 0; i < triggers.length; i++) {
      if (triggers[i].getHandlerFunction() == "alert") {
        ScriptApp.deleteTrigger(triggers[i]);
      }
    }
  }