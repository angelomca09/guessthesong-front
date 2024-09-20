import requests
import random

def main(playlist_id):
    # Step 1: Retrieve the tracks in the playlist
    url = f"https://api.deezer.com/playlist/{playlist_id}/tracks?limit=70"
    response = requests.get(url)
    tracks = response.json()["data"]
    tracks = random.choices(tracks,k=12)
    preview=[]
    # Step 2: Retrieve the preview URL for each track
    for track in tracks:
        trackId = track["id"]
        trackAlbum = track["album"]
        trackAlbum = trackAlbum["cover_medium"]
        trackName = track["title"]
        preview_url = track["preview"]
        if(preview_url!=""):
            preview.append((trackId,trackName,trackAlbum,preview_url))
    # Print the previews
    return preview

if __name__ == '__main__':
    # Call the main function with a default playlist ID (optional)
    main(5206929684)