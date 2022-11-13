function postToLine(
  token: string,
  userId: string,
  type: string,
  alt: string | null,
  contents: object
): void {
  const headers = {
    "Content-Type": "application/json; charset=UTF-8",
    Authorization: "Bearer " + token,
  };

  let postData;
  if (type == "text") {
    postData = {
      to: userId,
      messages: [
        {
          type: "text",
          text: contents,
        },
      ],
    };
  } else if (type == "flex") {
    postData = {
      to: userId,
      messages: [
        {
          type: type,
          altText: alt,
          contents: contents,
        },
      ],
    };
  }

  const options: any = {
    method: "post",
    headers: headers,
    payload: JSON.stringify(postData),
  };

  UrlFetchApp.fetch("https://api.line.me/v2/bot/message/push", options);
}
