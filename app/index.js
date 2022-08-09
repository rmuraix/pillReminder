function make_record_card() {
  const contents = "WIP";
}

function doPost(e) {
  const json = JSON.parse(e.postData.contents);
  const reply_token = json.events[0].replyToken; // get replyToken
  const event_type = json.events[0].type; // get event type

  let reply_contents;

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
