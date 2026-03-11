# Design Update Instructions for Google Antigravity

## 1. Technical Stack Section

### Current State
- Tags displayed as pills with text only
- Basic border styling
- Minimal hover interaction

### Required Changes

**Task 1.1: Add Icons to Technology Tags**
- Add appropriate emoji or icon before each technology name:
  - AI tools (Gemini 1 Pro, Claude, GPT-5.2): 🤖
  - Messaging platforms (WhatsApp, RCS, SMS, LiveChat): 💬
  - Logic/Orchestration (n8n.com's HALO Platform, JSON, REST APIs): ⚙️
  - Toolkit items (Postman, HTML/CSS/JS, Notion, Loom): 🛠️
- Icons should have 6px right margin from text

**Task 1.2: Enhance Tag Styling**
Current styling:

Basic border and background
New styling requirements:

Background: rgba(59, 130, 246, 0.1)
Border: 1px solid rgba(59, 130, 246, 0.3)
Border-radius: 6px
Padding: 6px 12px
Font-size: 13px
Transition: all 0.2s ease
Hover state:

Background: rgba(59, 130, 246, 0.2)
Border-color: rgba(59, 130, 246, 0.5)
Transform: translateY(-2px)
Cursor: pointer


---

## 2. Field Notes Section

### Current State
- Terminal-style box with log entries
- Blinking cursor already implemented
- Basic "VIEW ALL LOGS" link at bottom

### Required Changes

**Task 2.1: Add Terminal Header**
- Insert new header element at the top of the Field Notes section
- Header should contain:
  - Three traffic light circles (left side): red, yellow, green
  - Terminal title text (center-left): "field_notes.sh"
Header structure:

Container background: rgba(30, 30, 30, 0.5)
Container padding: 8px 12px
Border-bottom: 1px solid rgba(59, 130, 246, 0.3)
Border-radius: 8px 8px 0 0 (top corners only)
Display: flex, align-items: center, gap: 12px
Traffic lights:

Three circular spans
Width/height: 12px each
Border-radius: 50%
Gap between: 6px
Colors: #ff5f56 (red), #ffbd2e (yellow), #27c93f (green)
Terminal title:

Text: "field_notes.sh"
Font-size: 12px
Color: rgba(255, 255, 255, 0.6)
Font-family: monospace


**Task 2.2: Add Syntax Highlighting to Log Entries**
- Wrap the `>` symbol in a span with class "log-prefix"
  - Color: #34D399 (green)
- Wrap the filename text in a span with class "log-file"
  - Color: #60A5FA (blue)
- Keep "AWAITING_FURTHER_INPUT_" in its own class with existing cursor styling

Example:
Before: > 001_coming_soon.log
After: <span class="log-prefix">></span> <span class="log-file">001_coming_soon.log</span>


**Task 2.3: Enhance "VIEW ALL LOGS" Button**
Change from basic link to styled button:

Display: inline-block
Margin-top: 16px
Padding: 8px 16px
Background: rgba(59, 130, 246, 0.1)
Border: 1px solid rgba(59, 130, 246, 0.4)
Border-radius: 6px
Color: #60A5FA
Font-weight: 500
Text-decoration: none
Transition: all 0.2s ease
Hover state:

Background: rgba(59, 130, 246, 0.2)
Border-color: #60A5FA
Transform: translateX(4px)


---

## 3. Featured Solutions Section

### Current State
- Small thumbnail images (approximately 100-120px wide)
- Side-by-side layout with image and text

### Required Changes

**Task 3.1: Increase Image Size**
- Change image container width from current size to **200px**
- Maintain aspect ratio (height: auto)
- Keep images on the left side of each card
- Increase gap between image and text to 24px

**Task 3.2: Enhance Image Styling**
Image wrapper/container:

Width: 200px
Border-radius: 6px
Border: 1px solid rgba(59, 130, 246, 0.2)
Overflow: hidden
Image element:

Width: 100%
Height: auto
Display: block


**Task 3.3: Adjust Card Grid Layout**
Solution card container:

Display: grid
Grid-template-columns: 200px 1fr
Gap: 24px (increase from current)
Padding: 24px
Background: rgba(20, 20, 20, 0.5)
Border: 1px solid rgba(59, 130, 246, 0.2)
Border-radius: 8px
Transition: border-color 0.2s ease
Hover state:

Border-color: rgba(59, 130, 246, 0.4)

---

## 4. General Polish (Optional but Recommended)

### Task 4.1: Consistent Card Hover Effects
Apply to all card elements across the site:
Base card:

Background: rgba(20, 20, 20, 0.4)
Backdrop-filter: blur(10px)
Border: 1px solid rgba(59, 130, 246, 0.2)
Border-radius: 8px
Transition: all 0.2s ease
Hover state:

Border-color: rgba(59, 130, 246, 0.4)
Box-shadow: 0 4px 20px rgba(59, 130, 246, 0.1)

### Task 4.2: Improve Primary CTA Buttons
Apply to "Let's talk!" and "View Other Projects" buttons:
Padding: 12px 24px (if not already)
Font-weight: 500
Add subtle box-shadow on hover: 0 4px 12px rgba(59, 130, 246, 0.3)
Add transform on hover: translateY(-2px)


---

## 5. Responsive Considerations

### No Changes Required
- Current burger menu and stacking behavior works well
- Ensure new image sizes (200px) scale down appropriately on mobile
- On screens < 768px, Featured Solutions cards should stack (image on top)

---

## Summary Checklist

- [ ] Add icons to all technology tags
- [ ] Update tag styling with new colors and hover effects
- [ ] Add terminal header with traffic lights to Field Notes
- [ ] Apply syntax highlighting to log entries (green > and blue filenames)
- [ ] Convert "VIEW ALL LOGS" to styled button
- [ ] Increase Featured Solutions images to 200px width
- [ ] Update Featured Solutions card grid layout
- [ ] Apply consistent hover effects across all cards
- [ ] Test responsive behavior on mobile devices

---

## Color Reference
Primary Blue: #60A5FA
Blue (transparent backgrounds): rgba(59, 130, 246, 0.1) to rgba(59, 130, 246, 0.5)
Green (syntax): #34D399
Red (traffic light): #ff5f56
Yellow (traffic light): #ffbd2e
Green (traffic light): #27c93f
Dark background: rgba(20, 20, 20, 0.4) to rgba(30, 30, 30, 0.5)