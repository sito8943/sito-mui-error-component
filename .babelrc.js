const plugins = [
  [
    "babel-plugin-direct-import",
    { modules: ["@mui/material", "@mui/icons-material"] },
  ],
];
const presets = [
  [
    "@babel/preset-react",
    {
      runtime: "automatic",
    },
  ],
];
const comments = false;
const env = {
  minify: {
    presets: [
      [
        "@babel/preset-react",
        {
          runtime: "automatic",
        },
      ],
      ["babel-preset-minify"],
    ],
  },
};

module.exports = {
  plugins,
  comments,
  env,
  presets,
};
