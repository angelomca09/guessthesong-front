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
            trackId = track["id"]
            trackAlbum = track["album"]
            trackAlbum = trackAlbum["cover_medium"]
            trackName = track["title"]
            preview_url = track["preview"]
            if(preview_url!="" and not(preview_url in previewUrls)):
                previewUrls.append(preview_url)
                preview.append((trackId,trackName,trackAlbum,preview_url))
    # Print the previews
    return preview

if __name__ == '__main__':
    # Call the main function with a default playlist ID (optional)
    main(5206929684)