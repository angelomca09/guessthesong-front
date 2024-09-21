import requests
import random

def main(playlist_id):
    # Step 1: Retrieve the tracks in the playlist
    tam = 70
    url = f"https://api.deezer.com/playlist/{playlist_id}/tracks?limit={tam}"
    response = requests.get(url)
    tracks = response.json()["data"]
    preview=[]
    previewUrls=[]
    while(len(preview)<12):
        diff = 12-len(preview)
        Aux = random.choices(tracks,k=diff)
        # Step 2: Retrieve the preview URL for each track
        for track in Aux:
            preview_track = {}
            preview_track["id"] = track["id"]
            preview_track["album"] = track["album"]["title"]
            preview_track["cover_medium"] = track["album"]["cover_medium"]
            preview_track["title"] = track["title"]
            preview_track["preview"] = track["preview"]

            if(preview_track["preview"] !="" and not(preview_track["preview"] in previewUrls)):
                previewUrls.append(preview_track["preview"])
                preview.append(preview_track)
    # Print the previews
    return preview

if __name__ == '__main__':
    # Call the main function with a default playlist ID (optional)
    main(5206929684)