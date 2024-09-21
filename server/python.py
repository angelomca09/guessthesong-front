import requests
import random

def main(playlist_id):
    # Step 1: Retrieve the tracks in the playlist
    numSongs = 4
    tam = 70
    url = f"https://api.deezer.com/playlist/{playlist_id}/tracks?limit={tam}"
    response = requests.get(url)
    tracks = response.json()["data"]
    preview=[]
    previewUrls=[]
    while(len(preview)<numSongs):
        diff = numSongs-len(preview)
        Aux = random.choices(tracks,k=diff)
        # Step 2: Retrieve the preview URL for each track
        for track in Aux:
            preview_track = {}
            preview_track["title"] = track["title"]
            preview_track["album"] = track["album"]["title"]
            preview_track["cover"] = track["album"]["cover_medium"]
            preview_track["artist"] = track["artist"]["name"]

            if(track["preview"] !="" and not(track["preview"] in previewUrls)):
                previewUrls.append(track["preview"])
                preview.append(preview_track)
    Aux = random.choice(previewUrls)
    preview.append(Aux)
    preview.append(previewUrls.index(Aux))
    # Print the previews
    return preview

if __name__ == '__main__':
    # Call the main function with a default playlist ID (optional)
    main(5206929684)