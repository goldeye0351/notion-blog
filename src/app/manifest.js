export default function manifest() {
    return {
        "name": "51xMI.com",
        "short_name": "51xMI",
        "description": "51xMI.com",
        "start_url": "/?standalone=true",
        "display": "standalone",
        "theme_color": "#000000",
        "background_color": "#ffffff",
        "scope": "/",
        "icons": [
            {
                "src": "/icon-192x192.png",
                "sizes": "192x192",
                "type": "image/png"
            },
            {
                "src": "/icon-256x256.png",
                "sizes": "256x256",
                "type": "image/png"
            },
            {
                "src": "/icon-384x384.png",
                "sizes": "384x384",
                "type": "image/png"
            },
            {
                "src": "/icon-512x512.png",
                "sizes": "512x512",
                "type": "image/png"
            }
        ]
    }
  }