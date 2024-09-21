import requests
import random

def main(playlist_id):
    # Step 1: Retrieve the tracks in the playlist
    numSongs = 4
    tam = 70
    url = f"https://api.deezer.com/playlist/{playlist_id}/tracks?limit={tam}"
    response = requests.get(url)
    playlist_tracks = response.json()["data"]
    tracks=[]
    previews=[]

    # Step 2: Fill the track list with random songs from the Playlist
    while(len(tracks)<numSongs):
        diff = numSongs-len(tracks)
        random_tracks = random.choices(playlist_tracks,k=diff)
        # Step 2.1: Retrieve information for each track
        for track in random_tracks:
            new_track = {}
            new_track["title"] = track["title"]
            new_track["album"] = track["album"]["title"]
            new_track["cover"] = track["album"]["cover_medium"]
            new_track["artist"] = track["artist"]["name"]

            # Step 2.2: Save track if not repeated and store it preview separately for later
            if(track["preview"] !="" and not(track["preview"] in previews)):
                previews.append(track["preview"])
                tracks.append(new_track)

    # Step 3: Select a random preview
    selected_preview = random.choice(previews)

    # Step 4: Build the final object

    obj = {}

    obj["answer"] = previews.index(selected_preview)
    obj["preview"] = selected_preview
    obj["tracks"] = tracks

    return obj

if __name__ == '__main__':
    # Call the main function with a default playlist ID (optional)
    main(5206929684)