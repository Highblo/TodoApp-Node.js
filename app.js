//expressを使うときの定型文
const express = require("express");
const app = express();

//cssや画像ファイルを置くフォルダを指定
app.use(express.static("public"));

//ルーティングの処理
app.get("/", (req, res) => {
  res.render("top.ejs");
});

app.get("/index", (req, res) => {
  res.render("index.ejs");
});

//サーバーの起動
app.listen(3000);