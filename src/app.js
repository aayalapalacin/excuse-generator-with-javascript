/* eslint-disable */
import "bootstrap";
import "./style.css";

window.onload = () => {
  document.querySelector("#excuseButton").addEventListener("click", () => {
    document.querySelector("#the-excuse").innerHTML = generateExcuse();
  });
};
let generateExcuse = () => {
  let pro = ["A", "The"];
  let subj = ["jogger", "racoon", "driver", "dog", "comedian", "pinecone"];
  let act = ["took my", "threw my", "yelled at my", "stole my", "bit my"];
  let pos = ["toe", "homework", "car", "shoe"];
  let wh = ["on the street", "in my house", "in my driveway"];

  let proIndex = Math.floor(Math.random() * pro.length);
  let subIndex = Math.floor(Math.random() * subj.length);
  let actIndex = Math.floor(Math.random() * act.length);
  let posIndex = Math.floor(Math.random() * pos.length);
  let whIndex = Math.floor(Math.random() * wh.length);
  return (
    pro[proIndex] +
    " " +
    subj[subIndex] +
    " " +
    act[actIndex] +
    " " +
    pos[posIndex] +
    " " +
    wh[whIndex]
  );
};
