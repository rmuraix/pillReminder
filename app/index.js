function make_record_card() {
  const nowyesr = new Date().getFullYear();
  const nowmonth = new Date().getMonth() + 1;
  const nowday = new Date().getDate();
  const postDate = `${nowyesr}-${nowmonth}-${nowday}`;

  const start_date = new Date('2022-01-30');
  const diff = Math.floor((nowDate.getTime() - start_date.getTime()) / (1000 * 60 * 60 * 24)) + 1; // days between now and start_date

  // Define words to be set on the card
  let progress = 0; // Number of days elapsed per sheet of pills

  if (diff >= 29) {
    progress = (diff % (28 * Math.floor(days / 28))) + 1; // Number of days elapsed since the break(28)
  }
  else {
    progress = diff;
  }

  let pill_color = "";
  // The color of the three-phase pill "Tricular28"
  if (progress <= 6){
    pill_color = "赤"; // red
  }
  else if (progress <= 11){
    pill_color = "白"; // white
  }
  else if (progress <= 21){
    pill_color = "オレンジ"; // orange
  }
  else{
    pill_color = "白"; // white
  }

  const private_message = demand_pill(); // Private message to be sent to the user

  const postData = card_json(postDate, pill_color, progress, private_message); // Make a card JSON

}

function doPost(e) {
  const json = JSON.parse(e.postData.contents);
  const reply_token = json.events[0].replyToken; // get replyToken
  const event_type = json.events[0].type; // get event type

  let reply_contents = "";

  try {
    if (event_type === "postback") {
      if (json.events[0].postback.data === "drug_true") {
        reply_contents = make_record_card();
      }
    }
  } catch (err) {
    console.log(err);
  }

  reply(reply_token, reply_contents);
}
