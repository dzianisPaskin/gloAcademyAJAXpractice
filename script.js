fetch("./dbHeroes.json")
  .then((response) => {
    if (!response.ok) {
      throw new Error(`HTTP error: ${response.status}`);
    }
    return response.json();
  })
  .then((json) => initialize(json))
  .catch((err) => console.error(`Fetch problem: ${err.message}`));

function initialize(heroes) {
  const category = document.querySelector(".category");
  const main = document.querySelector("main");

  let statusHero = category.value;

  let categoryGroup;
  let finalGroup;

  finalGroup = heroes;
  updateDisplay();

  categoryGroup = [];
  finalGroup = [];

  category.addEventListener("change", selectCategory);

  function selectCategory(e) {
    e.preventDefault();
    categoryGroup = [];
    finalGroup = [];

    statusHero = category.value;

    categoryGroup = heroes.filter((hero) => hero.movies);

    statusMovie();
  }

  function statusMovie() {
    if (category.value === "Movies") {
      finalGroup = heroes;
    } else if (category.value === "Avengers") {
      finalGroup = categoryGroup.filter((hero) =>
        hero.movies.join(" ").includes("Avengers")
      );
      console.log(finalGroup);
    } else if(category.value === "Doctor Strange") {
      finalGroup = categoryGroup.filter((hero) =>
        hero.movies.join(" ").includes("Doctor Strange")
      );
      console.log(finalGroup);
    } else if(category.value === "Ant-Man") {
      finalGroup = categoryGroup.filter((hero) =>
        hero.movies.join(" ").includes("Ant-Man")
      );
      console.log(finalGroup);
    }
     else if(category.value === "Captain America") {
      finalGroup = categoryGroup.filter((hero) =>
        hero.movies.join(" ").includes("Captain America")
      );
      console.log(finalGroup);
    }
     else if (category.value === "Guardians of the Galaxy") {
      finalGroup = categoryGroup.filter((hero) =>
        hero.movies.join(" ").includes("Guardians of the Galaxy")
      );

      console.log(finalGroup);
    }
     else if (category.value === "Black Panther") {
      finalGroup = categoryGroup.filter((hero) =>
        hero.movies.join(" ").includes("Black Panther")
      );

      console.log(finalGroup);
    }
     else if (category.value === "Iron Man") {
      finalGroup = categoryGroup.filter((hero) =>
        hero.movies.join(" ").includes("Iron Man")
      );

      console.log(finalGroup);
    }
     else if (category.value === "Captain Marvel") {
      finalGroup = categoryGroup.filter((hero) =>
        hero.movies.join(" ").includes("Captain Marvel")
      );

      console.log(finalGroup);
    }
     else if (category.value === "Thor") {
      finalGroup = categoryGroup.filter((hero) =>
        hero.movies.join(" ").includes("Thor")
      );

      console.log(finalGroup);
    }
     else if (category.value === "Spider-Man") {
      finalGroup = categoryGroup.filter((hero) =>
        hero.movies.join(" ").includes("Spider-Man")
      );

      console.log(finalGroup);
    }

    updateDisplay();
  }

  function updateDisplay() {
    while (main.firstChild) {
      main.removeChild(main.firstChild);
    }
    for (const hero of finalGroup) {
      fetchBlob(hero);
    }
  }

  function fetchBlob(hero) {
    const url = `${hero.photo}`;

    fetch(url)
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error: ${response.status}`);
        }
        return response.blob();
      })
      .then((blob) => showHeroes(blob, hero))
      .catch((err) => console.error(`Fetch problem: ${err.message}`));
  }

  function showHeroes(blob, hero) {
    const objectURL = URL.createObjectURL(blob);
    const figureWrap = document.createElement("div");
    const figure = document.createElement("figure");
    const image = document.createElement("img");
    const imageWrap = document.createElement("div");
    const figcaption = document.createElement("figcaption");
    const nickname = document.createElement("h1");
    const moreInfo = document.createElement("ul")
    const realName = document.createElement("li");
    const species = document.createElement("li");
    const citizenship = document.createElement("li");
    const gender = document.createElement("li");
    const status = document.createElement("li");
    const actors = document.createElement("li");
    const movies = document.createElement("li");

    figureWrap.classList.add('card-wrap')
    figure.classList.add('card')
    image.classList.add('img-hero')
    imageWrap.classList.add('img-wrap')
    figcaption.classList.add('figcaption')

    nickname.textContent = hero.name;
    moreInfo.textContent = 'More Info:'
    realName.textContent = hero.realName ? 'Real Name: ' + hero.realName: 'Real Name: None';
    species.textContent = 'Species: ' + hero.species;
    citizenship.textContent = 'Citizenship: ' + hero.citizenship;
    gender.textContent = 'Gender: ' + hero.gender;
    status.textContent = 'Status: ' + hero.status;
    actors.textContent = 'Actors: ' + hero.actors;
    movies.textContent = 'Movies: ' + hero.movies;

    image.src = objectURL;
    image.alt = hero.name;

    main.appendChild(figureWrap);
    figureWrap.appendChild(figure);
    figure.appendChild(imageWrap);
    imageWrap.appendChild(image);
    figure.appendChild(nickname);
    figure.appendChild(figcaption);
    figcaption.appendChild(nickname);
    figcaption.appendChild(moreInfo);
    moreInfo.appendChild(realName);
    moreInfo.appendChild(species);
    moreInfo.appendChild(citizenship);
    moreInfo.appendChild(gender);
    moreInfo.appendChild(status);
    moreInfo.appendChild(actors);
    moreInfo.appendChild(movies);
  }
}
