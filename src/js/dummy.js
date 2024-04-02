import React, { useState } from "react";

const initialData = {
  svgs: ["html.svg", "css.svg", "js.svg", "ts.svg", "java.svg", "react.svg"],
  names: [
    "kosta",
    "코스타",
    "더미",
    "DeveloperBlog",
    "Dummy",
    "세은",
    "태헌",
    "효정",
  ],
  items: [
    {
      pid: "1",
      title: "1번이미지",
      writer: "kosta",
      date: "2024-03-27",
      imagePath: "img/Image0.jpg",
      profileImg: "img/Image1.jpg",
      lang: "css.svg",
      publicPrivate: true,
      content: "abcdefghijklmnopqrstuvwxyz",
    },
  ],
};

function generateRandomAlphabets() {
  const alphabets = "abcdefghijklmnopqrstuvwxyz";
  let result = "";
  for (let i = 0; i < 500; i++) {
    const randomIndex = Math.floor(Math.random() * alphabets.length);
    result += alphabets[randomIndex];
  }
  return result;
}

for (let pid = 2; pid <= 55; pid++) {
  const newItem = {
    pid: `${pid}`,
    title: `${pid}번이미지`,
    writer:
      initialData.names[Math.floor(Math.random() * initialData.names.length)],
    date: "2024-03-27",
    imagePath: "img/Image0.jpg",
    profileImg: `img/Image${Math.floor(Math.random() * 7) + 1}.jpg`,
    lang: initialData.svgs[Math.floor(Math.random() * initialData.svgs.length)],
    publicPrivate: Math.round(Math.random()) > 0.5 ? true : false,
    contents: generateRandomAlphabets(),
  };
  initialData.items.push(newItem);
}

export const DynamicContent = () => {
  const [content, setContent] = useState("");

  const handleClick = () => {
    setContent(JSON.stringify(initialData));
  };

  return (
    <div>
      <button onClick={handleClick}>JSON만들기</button>
      <textarea
        value={content}
        readOnly
        rows="5"
        style={{ width: "100%" }}
      ></textarea>
    </div>
  );
};
