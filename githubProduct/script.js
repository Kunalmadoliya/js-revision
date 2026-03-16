const input = document.getElementById("userInput");
const button = document.getElementById("cta");
const userProfile = document.getElementById("userProfile");
const bio = document.getElementById("bio");
const loca = document.getElementById("loca");
const repos = document.querySelectorAll(".repos");
const followers = document.getElementById("followers");
const following = document.getElementById("following");
const avatar = document.getElementById("avatar");
const majorCard = document.getElementById("repo-container");
const repoSearch = document.querySelector(".repo-search");

button.addEventListener("click", async () => {
  const userInput = input.value;
  const actualData = await userName(userInput);
  const reposData = await fetchRepos(userInput);
  const reposMatch = repoSearch.value.toLowerCase();

const filteredRepo = reposData.filter((repo) =>
  repo.name.toLowerCase().includes(reposMatch)
);

  if (actualData) {
    userProfile.innerHTML = actualData.name;
    avatar.src = actualData.avatar_url;
    bio.innerHTML = actualData.bio;
    loca.innerHTML = actualData.location;
    repos.forEach((elem) => {
      return (elem.innerHTML = `Repositories : ${actualData.public_repos}`);
    });
    followers.innerHTML = `Followers : ${actualData.followers}`;
    following.innerHTML = `Following : ${actualData.following}`;
  }

  if (reposData && reposData.length > 0) {
    for (const elem of filteredRepo) {
      const card = document.createElement("div");
      card.className = "repo-card";

      card.innerHTML = `
      <h3>${elem.full_name.split("/")[1]}</h3>
      <p>Description: ${elem.description}</p>
      <p class="repo-meta">
        Stars: ${elem.stargazers_count} | 
        Forks: ${elem.forks_count} | 
        Language: ${elem.language || "N/A"}
      </p>
    `;

      majorCard.append(card);
    }
  }


});

async function userName(name) {
  try {
    const res = await fetch(`https://api.github.com/users/${name}`);

    if (!res.ok) {
      return "Not a valid profile";
    }

    const data = res.json();
    return data;
  } catch (error) {
    console.log(error);
  }
}

async function fetchRepos(name) {
  try {
    const res = await fetch(`https://api.github.com/users/${name}/repos`);

    if (!res.ok) {
      return "Not a valid profile";
    }

    const data = res.json();
    return data;
  } catch (error) {
    console.log(error);
  }
}
