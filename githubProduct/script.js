const input = document.getElementById("userInput");
const button = document.getElementById("cta");
const userProfile = document.getElementById("userProfile")
const bio = document.getElementById("bio")
const loca  = document.getElementById("loca")
const repos  = document.getElementById("repos")
const followers  = document.getElementById("followers")
const following = document.getElementById("following")
const avatar = document.getElementById("avatar")

button.addEventListener("click", async () => {
  const userInput = input.value;
  const actualData = await userName(userInput);

  actualData ? 
   (userProfile.innerHTML = actualData.name , 
    avatar.src = actualData.avatar_url ,
    bio.innerHTML = actualData.bio , 
    loca.innerHTML = actualData.location ,
    repos.innerHTML = actualData.public_repos ,
    followers.innerHTML = actualData.followers ,
   following.innerHTML = actualData.following
   ) : ("n")

   
  
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
