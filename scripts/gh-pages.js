var ghpages = require("gh-pages");

ghpages.publish(
  "public",
  {
    branch: "gh-pages",
    silent: true,
    repo:
      "https://" +
      process.env.GITHUB_TOKEN +
      "@github.com/nithinkuruba/hacker-feud.git",
    user: {
      name: "Nithin Kuruba",
      email: "nithinshekar.kuruba@gmail.com",
    },
  },
  () => {
    console.log("Deploy Complete!");
  }
);
