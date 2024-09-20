
const tracksList = document.querySelector("#track-list")

fetch(`http://localhost:5000/get_playlist/12645052643`)
  .then((response) => response.json())
  .then((json) => {
    json.forEach(json => {
      const newListItem = document.createElement("AUDIO")
      const divItem = document.createElement("div")
      const imgItem = document.createElement("img")
      divItem.textContent= json[1]
      imgItem.src=json[2]
      newListItem.src=json[3]
      divItem.appendChild(imgItem)
      divItem.onclick = () =>{if(newListItem.paused){newListItem.play()} else{newListItem.pause(); newListItem.load()}}
      tracksList.appendChild(divItem)
    });
  });


