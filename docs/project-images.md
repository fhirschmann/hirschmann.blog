# Project images

The active project list on the home page and /projects uses responsive 480 px and
960 px WebP assets from `public/projects/`. All originals are clean colour images;
the CRT tint and scanlines are applied in CSS and removed on hover, keyboard focus,
or the image button's touch/click toggle. The image frame sits above the global CRT
overlay so the revealed original has no scanlines from the rest of the page.

- `leo-ac1-{480,960}.webp`: AI studio render based on the project's public CAD
  assembly and front-logo views.
- `leoino-{480,960}.webp`: AI studio render based on the project's public finished
  AT-1 photographs (current white OLED front, raised carrying handle).
- `unraid-passkey-{480,960}.webp`: browser screenshot of the original Unraid login
  template and the actual plugin's `passkey.js`, rendered locally with the synthetic
  server name "Tower", a generic "Unraid server" description, empty fields, and a
  stubbed configuration response. No live server identity or account data is shown.

The two device renders were created using the built-in Imagegen tool on 2026-09-22.
The source device geometry was not changed. The prompts below document the generated
illustrations; small details in an AI rendering can differ from the physical build.

## Leo AC-1 prompt

```text
Use case: product-mockup
Asset type: landscape 4:3 project thumbnail for a personal CRT-terminal themed portfolio.
Primary request: Create a polished photorealistic studio product render of the exact LEO INDUSTRIES AC-1 battery-powered miniature air-conditioner-shaped desk fan in the reference images. The images are geometry and branding references, not a request to redesign the object.
Subject: preserve the compact wide rectangular white PETG enclosure, large grey concentric circular fan grille on the LEFT of the front face, small grey block-letter logo on upper RIGHT, shallow horizontal lines under the logo, vented left side, dark-grey folded carrying bail and pivots along the top back, and small feet. Keep the proportions, location and geometry faithful to the assembly reference. No vendor fan logo.
Text on the device exactly: "LEO" / "INDUSTRIES" / "AC-1".
Composition: one complete device centered, front-left three-quarter view slightly from above, entire silhouette and feet visible, device fills roughly 78% of canvas width with generous breathing room. Landscape 4:3.
Scene: seamless near-black charcoal studio floor and background, restrained soft contact shadow, no props.
Lighting: large soft neutral key light reveals the white and grey printed material, delicate cyan rim from one side and faint magenta rim from the other, tasteful realistic product photography. Fine subtle 3D-printed layer texture.
Constraints: this is the clean full-colour original that will receive CRT effects in CSS later. NO scanlines, NO green monochrome, NO pixelation, NO grain filter, NO CRT distortion, NO background text, NO watermark, NO extra device or cables. Preserve real device design.
```

## leoino prompt

```text
Use case: product-mockup
Asset type: landscape 4:3 project thumbnail for a personal CRT-terminal themed portfolio.
Primary request: Create a polished photorealistic studio product render of the exact LEO INDUSTRIES AT-1 (leoino) RFID audio player in these reference photographs, preserving the handmade CAD enclosure design. Photo 1 is the definitive current front panel with OLED and WHITE front. Photo 2 provides the carrying handle silhouette; use photo 1's white front, not photo 2's older dark front.
Subject: squat wide rectangular portable audio terminal with bevelled charcoal-grey 3D-printed case, WHITE modular front plates and visible silver fasteners, copper-brown round horizontal-slatted speaker grille on LEFT, small square black OLED screen on RIGHT with cyan outline, L-shaped row of softly illuminated cream status LEDs under and to the right of screen, thin turquoise decorative inlays and turquoise "LEO INDUSTRIES" at lower front. Top deck: SIX black mechanical keys in a 2-by-3 grid at left with turquoise playback symbols and copper trim, inset RFID symbol and "AT-1" at right. Dark-grey angular folding carry handle above and behind. No extra features. On OLED show a few simple cyan audio-level bars only, no IP addresses or technical metadata.
Composition: one complete device, centered front-left three-quarter view slightly from above so top controls and front are both visible; full handle visible; device takes 78% of canvas width, with breathing room on every side. Landscape 4:3.
Scene: seamless near-black charcoal studio floor and background, restrained soft contact shadow, no props.
Lighting: large soft neutral key, delicate cyan rim from one side and faint magenta rim from the other. Finely detailed PETG print layers, copper and cyan inlays, realistic restrained reflections. High-end product rendering, faithful and not sci-fi redesign.
Constraints: clean full-colour original that will receive CRT effects in CSS later. NO scanlines, NO monochrome filter, NO pixelation, NO film grain filter, NO CRT distortion, NO background text, NO watermark, NO extra objects or cables, NO people.
```
