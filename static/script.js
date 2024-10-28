const links = [
  {
    url: "https://www.linkedin.com/in/abhishekpathak32",
    text: "linkedIn/abhishekpathak32",
  },
  { url: "https://github.com/scorcism", text: "github/scorcism" },
  { url: "https://dev.to/scorcism", text: "dev.to/scor32k" },
  { url: "https://x.com/scor32k", text: "x/scorcism" },
  { url: "https://buymeacoffee.com/scorcism", text: "buymeacoffee.com/scorcism" },
];

const linksContainer = document.getElementById("links");

links.forEach((link) => {
  const linkElement = document.createElement("a");
  linkElement.href = link.url;
  linkElement.className = "link";
  linkElement.target = "_blank";

  const textElement = document.createElement("span");
  textElement.className = "link-text";
  textElement.textContent = link.text;

  linkElement.appendChild(textElement);
  linksContainer.appendChild(linkElement);
});
