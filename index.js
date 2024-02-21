require("dotenv").config();
const express = require("express");

const app = express();
const port = process.env.PORT;
const data = {
  login: "adarsharma02",
  id: 98862737,
  node_id: "U_kgDOBeSGkQ",
  avatar_url: "https://avatars.githubusercontent.com/u/98862737?v=4",
  gravatar_id: "",
  url: "https://api.github.com/users/adarsharma02",
  html_url: "https://github.com/adarsharma02",
  followers_url: "https://api.github.com/users/adarsharma02/followers",
  following_url:
    "https://api.github.com/users/adarsharma02/following{/other_user}",
  gists_url: "https://api.github.com/users/adarsharma02/gists{/gist_id}",
  starred_url:
    "https://api.github.com/users/adarsharma02/starred{/owner}{/repo}",
  subscriptions_url: "https://api.github.com/users/adarsharma02/subscriptions",
  organizations_url: "https://api.github.com/users/adarsharma02/orgs",
  repos_url: "https://api.github.com/users/adarsharma02/repos",
  events_url: "https://api.github.com/users/adarsharma02/events{/privacy}",
  received_events_url:
    "https://api.github.com/users/adarsharma02/received_events",
  type: "User",
  site_admin: false,
  name: null,
  company: null,
  blog: "",
  location: null,
  email: null,
  hireable: null,
  bio: null,
  twitter_username: null,
  public_repos: 38,
  public_gists: 0,
  followers: 5,
  following: 5,
  created_at: "2022-02-02T02:55:56Z",
  updated_at: "2024-02-19T05:42:04Z",
};

app.get("/", (req, res) => {
  res.send("Hello World!");
});
app.get("/twitter", (req, res) => {
  res.send("Twitter");
});
app.get("/login", (req, res) => {
  res.send("<h1>Login</h1>");
});
app.get("/adarsh", (req, res) => {
  res.json(data);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
