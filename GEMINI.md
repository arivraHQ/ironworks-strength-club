# IRONWORKS Strength Club — Design & Code Governance Rules

## Project Context
- **Brand**: IRONWORKS Strength Club, Kanpur
- **Personality**: Raw, disciplined, no-nonsense (brutalist athletic editorial)
- **Tech Stack**: Next.js (App Router) + Tailwind CSS + Framer Motion (Mobile-first)
- **Primary Goal**: Free trial bookings and membership enquiries via WhatsApp (+91 90000 00000)

---

## DESIGN SYSTEM (Strict Tokens — Overrides All Conflicts)

### 1. Colors (Tokens, Never Hardcode)
- `bg`: `#0C0C0B` (Deep brutalist black/charcoal)
- `surface`: `#161614` (Off-black card/panel surface)
- `text`: `#F1EEE6` (Raw chalk bone white)
- `primary`: `#D4FF3A` (Volt Lime)
- `accent`: `#FF5A1F` (Industrial blaze orange)
- `muted`: `#8B8B84` (Worn concrete grey)
- *Hairline / Border*: `rgba(241, 238, 230, 0.15)` or `#262624`

### 2. Typography
- **Headings**: `Big Shoulders Display` (Uppercase, huge, tight letter-spacing, condensed punch)
- **Body**: `Archivo` (Clean, technical, high-legibility sans-serif)
- **Scale**:
  - Hero Display: 120px - 160px desktop / 56px mobile
  - H2 Section Title: 72px desktop / 40px mobile
  - H3 / Subheadings: 28px - 36px
  - Body: 16px (1.5 line-height)
  - Small / Monospace: 12px - 14px

### 3. Shape & Geometry
- **Radius**: `0` everywhere (Strict sharp 90-degree brutalist corners, zero rounded corners)
- **Borders**: `2px solid` crisp architectural lines
- **Shadows**: Hard offset shadows (`6px 6px 0px #D4FF3A`) on key buttons and active elements only. No diffuse box-shadows.
- **Texture**: Subtle film-grain overlay at 6% opacity across the viewport.

### 4. Layout
- Edge-to-edge full-bleed sections.
- Oversized typography cropped intentionally by the viewport edges.
- Strict grid structure with visible hairlines / separator borders.
- Every section must feature a distinct layout architecture (no repetitive card grids).

### 5. Motion
- **Easing**: `[0.76, 0, 0.24, 1]` (custom bezier, snappy industrial mechanical feel)
- **Duration**: `500ms - 700ms`
- **Effects**:
  - Hero text slides up in masked lines.
  - Marquee text scrubs with scroll velocity.
  - Cards / rows invert colors on hover (surface -> primary / text invert).
  - Strict compliance with `prefers-reduced-motion`.

---

## BANNED LIST (Zero Tolerance)
- ❌ NO purple/blue generic gradients, glassmorphism, blur-heavy backdrop filters, neon glow effects, or gradient blobs.
- ❌ NO banned fonts: Inter, Roboto, Poppins, Montserrat, Bebas Neue.
- ❌ NO emoji or icon-in-circle decoration.
- ❌ NO 3-equal-cards grids or centered-everything layouts.
- ❌ NO generic fitness buzzwords: "unleash", "beast mode", "transform your body", "fitness journey", "revolutionize", "elevate".
- ❌ NO stock-style flexing poses and fake before/after extremes.

---

## Quality & Verification Gates
- Every section tested at mobile (375px) and desktop (1440px).
- Zero fake passes: real buttons, working WhatsApp links with pre-filled text, real timetable filters.
- Real believable Indian athletic copy with honest notes.
