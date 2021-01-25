const joke = document.getElementById("joke");
const btn = document.getElementById("jokeBtn");

btn.addEventListener("click", () => {
  generateJoke();
});

async function generateJoke() {
  const config = {
    headers: {
      Accept: "application/json",
    },
  };

  const res = await fetch("https://icanhazdadjoke.com", config);
  const jsonData = await res.json();

  joke.innerHTML = jsonData.joke;
}

// function generateJoke() {
//   const config = {
//     headers: {
//       Accept: "application/json",
//     },
//   };
//   fetch("https://icanhazdadjoke.com", config)
//     .then((res) => {
//       return res.json();
//     })
//     .then((data) => {
//       joke.innerHTML = data.joke;
//     })
//     .catch((error) => console.log(error));
// }
