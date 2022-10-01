function card_json(
  postDate,
  menstruation_days,
  diff,
  pill_color,
  progress,
  private_message
) {
  const json = {
    type: "flex",
    altText: "お薬の時間です",
    contents: {
      type: "bubble",
      body: {
        type: "box",
        layout: "vertical",
        contents: [
          {
            type: "text",
            text: "ALERT",
            weight: "bold",
            color: "#204969",
            size: "sm",
          },
          {
            type: "text",
            text: `${progress}日目`,
            weight: "bold",
            size: "xxl",
            margin: "md",
          },
          {
            type: "separator",
            margin: "xxl",
          },
          {
            type: "box",
            layout: "vertical",
            margin: "xxl",
            spacing: "sm",
            contents: [
              {
                type: "box",
                layout: "horizontal",
                contents: [
                  {
                    type: "text",
                    text: "通算",
                    size: "sm",
                    color: "#555555",
                    flex: 0,
                  },
                  {
                    type: "text",
                    text: `${diff}日目`,
                    size: "sm",
                    color: "#111111",
                    align: "end",
                  },
                ],
              },
              {
                type: "box",
                layout: "horizontal",
                contents: [
                  {
                    type: "text",
                    text: "薬の色",
                    size: "sm",
                    color: "#555555",
                    flex: 0,
                  },
                  {
                    type: "text",
                    text: pill_color,
                    size: "sm",
                    color: "#111111",
                    align: "end",
                  },
                ],
              },
              {
                type: "box",
                layout: "horizontal",
                contents: [
                  {
                    type: "text",
                    text: "生理開始から",
                    size: "sm",
                    color: "#555555",
                    flex: 0,
                  },
                  {
                    type: "text",
                    text: menstruation_days,
                    size: "sm",
                    color: "#111111",
                    align: "end",
                  },
                ],
              },
              {
                type: "box",
                layout: "horizontal",
                margin: "xxl",
                contents: [
                  {
                    type: "text",
                    text: private_message,
                    size: "sm",
                    color: "#555555",
                    wrap: true,
                  },
                ],
              },
            ],
          },
          {
            type: "box",
            layout: "horizontal",
            contents: [
              {
                type: "text",
                text: "亮太",
                size: "sm",
              },
            ],
          },
          {
            type: "separator",
            margin: "xxl",
          },
          {
            type: "box",
            layout: "horizontal",
            margin: "md",
            contents: [
              {
                type: "text",
                text: postDate,
                color: "#aaaaaa",
                size: "xs",
                align: "end",
              },
            ],
          },
        ],
      },
      footer: {
        type: "box",
        layout: "vertical",
        contents: [
          {
            type: "button",
            action: {
              type: "postback",
              label: "飲んだ！",
              data: "drug_true",
            },
          },
        ],
      },
      styles: {
        footer: {
          separator: true,
        },
      },
    },
  };
  return json;
}
