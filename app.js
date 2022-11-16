const wpisy = [
  {
    title: "wpis 1",
    subTitle: "podtytuł - wpis 1",
    paragraph: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim odit
    quidem repellat quam officia facere.`,
  },
  {
    title: "wpis 2",
    subTitle: "podtytuł - wpis 2",
    paragraph: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim odit
    quidem repellat quam officia facere.`,
  },
  {
    title: "wpis 3",
    subTitle: "podtytuł - wpis 3",
    paragraph: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim odit
    quidem repellat quam officia facere.`,
  },
];

const renderPost = (post) => {
  const html = `
    <section>
    <h2>${post.title}</h2>
    <h3>${post.subTitle}</h3>

    <p>
       ${post.paragraph}
    </p>
    <a role="a">Czytaj dalej...</a>

    <hr />
  </section>
    `;

  const div = document.createElement("div");

  div.innerHTML = html;

  document.body.appendChild(div);
};

wpisy.forEach((wpis) => {
  renderPost(wpis);
});
