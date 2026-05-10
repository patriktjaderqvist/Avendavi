"""Generate the Avendavi Open Graph share image (1200x630).

Mirrors the layout of the previous Venditio Ventures og-image:
- Warm beige background
- Large faded brand wordmark watermark
- Small upside-down "A" monogram above the wordmark (matches favicon)
- Centered "AVENDAVI" wordmark
- Thin divider
- Subtitle: CONSULTING · VENTURES · ACADEMIC
- Author byline bottom-right
"""

from pathlib import Path
from PIL import Image, ImageDraw, ImageFont

W, H = 1200, 630

BG = (232, 230, 227)          # #e8e6e3 — page beige
INK = (20, 18, 14)             # near-black
GHOST_ALPHA = 18               # very low alpha for watermark text
SOFT_ALPHA = 100               # subtitle / byline
HAIR_ALPHA = 45                # divider

FONT_PATH = Path.home() / "Library/Fonts/CormorantGaramond-VariableFont_wght.ttf"
assert FONT_PATH.exists(), f"Font not found: {FONT_PATH}"

def font(size, weight="Regular"):
    f = ImageFont.truetype(str(FONT_PATH), size)
    try:
        f.set_variation_by_name(weight)
    except (AttributeError, OSError):
        pass
    return f

# Work on an RGBA canvas so alpha blends correctly, then flatten at the end.
canvas = Image.new("RGBA", (W, H), BG + (255,))


def draw_tracked(layer, text, font_obj, fill, tracking, cx, baseline_y):
    """Draw `text` centered around cx with manual letter-spacing in pixels."""
    d = ImageDraw.Draw(layer)
    widths = [d.textlength(c, font=font_obj) for c in text]
    total = sum(widths) + tracking * (len(text) - 1)
    x = cx - total / 2
    for c, cw in zip(text, widths):
        d.text((x, baseline_y), c, font=font_obj, fill=fill)
        x += cw + tracking
    return total


# --- Ghost watermark (huge faint wordmark behind the title) ---
ghost_layer = Image.new("RGBA", (W, H), (0, 0, 0, 0))
ghost_font = font(220, "Light")
draw_tracked(
    ghost_layer, "AVENDAVI", ghost_font,
    fill=INK + (GHOST_ALPHA,),
    tracking=6, cx=W / 2, baseline_y=H / 2 - 160,
)
canvas = Image.alpha_composite(canvas, ghost_layer)

# --- Upside-down "A" monogram above the title (centered) ---
mono_size = 110
mono_font = font(mono_size, "Regular")
tile = Image.new("RGBA", (mono_size + 40, mono_size + 40), (0, 0, 0, 0))
td = ImageDraw.Draw(tile)
mw = td.textlength("A", font=mono_font)
td.text(((tile.width - mw) / 2, 0), "A", font=mono_font, fill=INK + (210,))
tile = tile.rotate(180, resample=Image.BICUBIC)
mono_x = int((W - tile.width) / 2)
mono_y = int(H / 2 - 200)
canvas.alpha_composite(tile, (mono_x, mono_y))

# --- Crisp title wordmark ---
title_layer = Image.new("RGBA", (W, H), (0, 0, 0, 0))
title_font = font(78, "Regular")
title_y = H / 2 - 10
draw_tracked(
    title_layer, "AVENDAVI", title_font,
    fill=INK + (255,), tracking=14, cx=W / 2, baseline_y=title_y,
)
canvas = Image.alpha_composite(canvas, title_layer)

# --- Hairline divider ---
line_w = 90
lx0 = (W - line_w) / 2
ly = title_y + 110
hd = ImageDraw.Draw(canvas)
hd.line([(lx0, ly), (lx0 + line_w, ly)], fill=INK + (HAIR_ALPHA,), width=1)

# --- Subtitle ---
sub_layer = Image.new("RGBA", (W, H), (0, 0, 0, 0))
sub_font = font(28, "Regular")
draw_tracked(
    sub_layer, "CONSULTING  ·  VENTURES  ·  ACADEMIC",
    sub_font, fill=INK + (SOFT_ALPHA,),
    tracking=6, cx=W / 2, baseline_y=ly + 22,
)
canvas = Image.alpha_composite(canvas, sub_layer)

# --- Bottom-right byline ---
byline_layer = Image.new("RGBA", (W, H), (0, 0, 0, 0))
byline_font = font(20, "Regular")
bd = ImageDraw.Draw(byline_layer)
byline = "PATRIK TJÄDERQVIST"
tracking_b = 4
widths_b = [bd.textlength(c, font=byline_font) for c in byline]
total_b = sum(widths_b) + tracking_b * (len(byline) - 1)
x = W - total_b - 60
y3 = H - 60
for c, cw in zip(byline, widths_b):
    bd.text((x, y3), c, font=byline_font, fill=INK + (SOFT_ALPHA,))
    x += cw + tracking_b
canvas = Image.alpha_composite(canvas, byline_layer)

# Flatten and save
out = Path(__file__).resolve().parent.parent / "public" / "og-image.png"
canvas.convert("RGB").save(out, "PNG", optimize=True)
print(f"Wrote {out} ({W}x{H})")
