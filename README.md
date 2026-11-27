# Souhayl Hersi Portfolio

A static professional portfolio for Souhayl Hersi, a Software Engineering student based in Ottawa, Ontario. The site presents four web projects and interactive prototypes.

## Run locally

Serve the repository root with any static HTTP server, then open `index.html`. The dashboard uses JavaScript modules and should be tested over HTTP rather than opened directly with `file://`.

For example, with Python installed:

```powershell
py -m http.server 8000
```

Then visit `http://localhost:8000/`.

## Projects

- **ClipZ**: `clipz-booking-demo.html` is a barbershop website concept with a local-only appointment flow. Business details, prices, and availability are illustrative.
- **FlipZ**: `flipz-memory-game.html` is a memory game with difficulty and theme selection, a timer, move tracking, and local audio effects.
- **Linnea**: `linnea-storefront-demo.html` is a storefront interaction prototype with search, filters, cart controls, and a simulated checkout. Catalog details are illustrative; no orders or payments are processed.
- **Canadian Food Price Watch**: English-French React dashboard for exploring grocery price data. The interface credits Statistics Canada Table 18-10-0245-01.

The project pages are demonstrations; sample business details are not real services. The repository contains the dashboard's built assets in `assets/`.
