import { publish } from "gh-pages";

publish(
  "public",
  {
    branch: "gh-pages",
    silent: true,
    repo:
      "https://" +
      process.env.GITHUB_TOKEN +
      "@github.com/NithinKuruba/hacker-feud.git",
    user: {
      name: "Nithin Kuruba",
      email: "nithinshekar.kuruba@gmail.com",
    },
  },
  () => {
    console.log("Deploy Complete!");
  }
);
