# The WayLight Companion

**A private, personal productivity utility for organizing life, work, and order**

## 📖 Overview

The WayLight Companion is a single-page web application (SPA) designed as a personal dashboard and organizational system. It serves as a unified interface for managing various aspects of life including personal tasks, work, civic engagement, creative projects, and system organization. The application combines productivity management with spiritual elements (Catholic prayers in Irish/Gaeilge) and follows a vintage aesthetic inspired by mid-20th century design.

## 🎯 Purpose

This is a **private utility** created by Alan Gallagher as part of the "WayLight Atlantic Family" of tools. It functions as:

- **Personal Dashboard**: Central hub for accessing different life domains
- **Link Organizer**: Custom bookmark management system for frequently used tools and resources
- **Productivity Framework**: Structured approach to life management across multiple domains
- **Spiritual Companion**: Incorporates Catholic prayers and references (JMJ - Jesus, Mary, Joseph)

## 🏗️ Technical Architecture

### Technology Stack
- **Frontend**: Pure HTML5, CSS3, and Vanilla JavaScript (no frameworks)
- **Styling**: Custom CSS with vintage/retro "Bakelite" design aesthetic
- **Fonts**: Google Fonts (Libre Baskerville for headings, Source Sans 3 for body)
- **Storage**: Browser LocalStorage for themes, language preferences, and user-added links
- **Accessibility**: ARIA labels, semantic HTML, keyboard navigation support

### Core Features

1. **Access Control**
   - Password-protected entry (hardcoded in JavaScript)
   - Landing page with authentication overlay
   - Session-based access to main console

2. **Multi-Theme System**
   - 5 color themes: Atlantic Navy, Deep Sea, Sea Green, Bottle Green, Parchment (default)
   - Theme persistence via LocalStorage
   - CSS custom properties for dynamic theming

3. **Internationalization (i18n)**
   - Bilingual support: English and Irish (Gaeilge)
   - Language toggle with localStorage persistence
   - Translated labels for all major UI elements

4. **Live Clock**
   - 24-hour format time display
   - Full date with ordinal suffixes (English) or plain format (Irish)
   - Updates in real-time
   - Language-aware date formatting

5. **Drag-and-Drop Interface**
   - Reorderable cards in main console
   - Draggable tool rows in Tool Shed
   - Visual feedback during drag operations

6. **Custom Link Management**
   - Add custom links to each category panel
   - Links stored in LocalStorage by category key
   - CRUD operations: Add, Remove, Clear all
   - Modal dialog interface for link management

## 📁 File Structure

```
waylightcompanion/
├── index.html              # Landing page with access control
├── waylight.html          # Main console with category cards
├── assets/
│   ├── wlc.css            # 599 lines - All styling and theme definitions
│   ├── wlc.js             # 303 lines - All JavaScript functionality
│   └── images/
│       └── waylightireland.png  # Hero image for landing page
│
└── Category Pages (sectional views):
    ├── philosophy.html     # Faith, ethics, prayer, first principles
    ├── personal.html      # Health, home, prayer, routines
    ├── work.html          # NHS, Digital, Private work
    ├── civic.html         # WayLight Commonwealth, local missions
    ├── creative.html      # Writing, music, design, experiments
    ├── systems.html       # Data, backups, devices, finances
    ├── calendar.html      # Link to master diary
    ├── toolshed.html      # Quick access to apps (Microsoft, Google, etc.)
    ├── waylight-section.html  # Pipeline, Pending Board, Missions
    └── methods.html       # Life methodologies (Agile, Kaizen, Lean, Benedictine)
```

## 🎨 Design Philosophy

### Visual Aesthetic
- **Vintage Utility Theme**: Inspired by 1940s-1960s design elements
- **Bakelite Dividers**: Retro-styled separators with gradient patterns
- **Parchment Background**: Default warm, paper-like appearance
- **Shimmer Effects**: Subtle animated gradients on interactive elements
- **Card-Based Layout**: Organized information in discrete, clickable panels

### Navigation Structure
```
Landing Page (index.html)
    ↓ [Password Entry]
Main Console (waylight.html)
    ↓ [10 Category Cards]
    ├── Philosophy and Religion
    ├── Personal
    ├── Work
    ├── Civic
    ├── Creative
    ├── Systems Centre
    ├── Calendar
    ├── Tool Shed
    ├── WayLight
    └── Methods
```

## 🔧 Key Components

### Main Console (waylight.html)
- Grid of 10 draggable category cards
- Each card links to a detailed section page
- Back button returns to index.html
- Theme and language selectors in header
- Footer with clock and attribution

### Tool Shed (toolshed.html)
- Special page with extensive quick-access links
- Organized into rows:
  - **Microsoft**: Outlook, Word, Excel, PowerPoint, OneDrive, Teams, To Do
  - **Google**: Gmail, Drive, Docs, Sheets, Calendar, Maps, YouTube, Google Home
  - **Work & NHS**: NHS App, Work folders, Notion, Teams, Email, OneDrive, LibrariesWest
  - **Communication & Social**: Messaging and social platforms
  - **Finance & Banking**: Financial management tools
  - **News & Media**: News sources and media outlets
  - **Creative & Development**: Design and coding tools
  - **Utilities & Admin**: General productivity tools
- Each row is draggable for customization
- "Add link" buttons for custom additions

### JavaScript Modules (wlc.js)

1. **Theme Management** (`initThemeToggle`)
   - Loads saved theme from localStorage
   - Updates CSS custom properties
   - Persists user selection

2. **Language Management** (`initLangToggle`)
   - Switches between English and Irish
   - Updates document language attribute
   - Re-renders i18n strings and clock

3. **Access Control** (`initLandingLock`)
   - Password overlay on landing page
   - Validates access code (case-insensitive)
   - Redirects to main console on success

4. **Clock System** (`updateClock`)
   - Real-time updates every interval
   - Ordinal date formatting for English
   - Plain date formatting for Irish
   - 24-hour time format

5. **Internationalization** (`applyI18n`)
   - Key-value translation dictionary
   - Updates all elements with `data-i18n` attributes
   - Supports 10 category cards in both languages

6. **Modal Link Manager** (`initModal`)
   - Add/remove custom links per category
   - LocalStorage-based persistence
   - Prompt-based UI for link creation

## 💾 Data Persistence

All user customizations are stored in browser LocalStorage:
- `wlc-theme`: Selected theme (atlantic|deepsea|seagreen|bottle|parchment)
- `wlc-lang`: Selected language (en|ga)
- `wlc-links`: JSON object mapping category keys to arrays of {label, url} objects

## 🌍 Internationalization Details

### Supported Languages
1. **English (en)** - Default
2. **Irish/Gaeilge (ga)** - Full translation

### Translated Elements
- All 10 category card titles and descriptions
- Navigation labels
- Button text for "Open [Category]" links
- Date/time formatting

### Religious Elements
- Catholic prayers in header comments (Irish)
- "JMJ" notation (Jesus, Mary, Joseph)
- Ecclesiastes 3:1 quote in Irish
- References to Benedictine methodologies

## 🎯 Life Organization Methodology

The system organizes life into **5 primary domains** plus supporting areas:

### Primary Domains
1. **Personal**: Self-care, health, home management, daily routines
2. **Work**: Professional employment (NHS, Digital services, Private practice)
3. **Civic**: Community engagement, WayLight Commonwealth, public service
4. **Creative**: Artistic pursuits (writing, music, design, video production)
5. **Systems**: Technical infrastructure, data management, finances

### Supporting Areas
- **Philosophy & Religion**: Spiritual foundation and ethical principles
- **Calendar**: Time management and scheduling
- **Tool Shed**: Digital tools and applications
- **WayLight**: Project pipeline and mission tracking
- **Methods**: Methodological frameworks (Agile, Kaizen, Lean, Benedictine)

## 🚀 Usage

### First-Time Access
1. Open `index.html` in a web browser
2. Click "Enter Companion" button
3. Enter the access code (found in the source code)
4. Main console opens automatically

### Navigation
- Click any category card to open that section
- Use back button (←) to return to console
- Change theme/language via header dropdowns
- Settings persist across sessions

### Customization
1. **Reorder Cards**: Drag category cards to preferred positions
2. **Add Links**: Click card's "Open" button → "Add link" → Enter label and URL
3. **Change Theme**: Select from 5 color schemes in header
4. **Switch Language**: Toggle between English and Gaeilge

## 🔐 Security Notes

- **Client-Side Only**: No server-side components or external APIs
- **Hardcoded Password**: Access code is stored in plain text in the JavaScript source code
- **LocalStorage Data**: All user data stored in browser (cleared if cache cleared)
- **Private Use**: Designed for personal/private deployment, not public hosting
- **No Server-Side Security**: The password protection is cosmetic only; anyone with access to the source code can view the access code

## 📱 Responsive Design

- Mobile-friendly viewport settings
- Grid layout adapts to screen size
- Touch-friendly button sizes (min 44x44px)
- Flexible card grid system

## 🎨 Color Palette

### Themes
- **Atlantic Navy**: `#1e3446`
- **Deep Sea**: `#0f2b33`
- **Sea Green**: `#355f56`
- **Bottle Green**: `#1f3b2d`
- **Parchment**: `#f3efe4` (default background)

### Accent Colors
- **Ink (text)**: `#1c1f22`
- **Ink Soft**: `#4a4f54`
- **Brass (accents)**: `#b39a5f`
- **Rule (borders)**: `#c8c3b8`

## 🔗 External References

- **WayLight Atlantic Family**: https://www.waylight-atlantic.co.uk
- Part of a larger personal productivity ecosystem
- Version 0.1 (early development)

## 🛠️ Development

### No Build Process
- Static HTML/CSS/JS files
- No compilation, bundling, or transpilation required
- Open directly in browser for development
- No dependencies or package management

### Browser Requirements
- Modern browser with ES6 support
- LocalStorage enabled
- JavaScript enabled

### Modification Guidelines
- Edit HTML files directly for content changes
- Update `wlc.css` for styling modifications
- Modify `wlc.js` for functionality changes
- Add new pages by copying existing section templates

## 📄 License & Attribution

**Private Utility** - Created by Alan Gallagher  
Part of the WayLight Atlantic Family of tools  
Version: 0.1

---

## 🤖 AI Summary

**For AI assistants**: This is a personal productivity web application built with vanilla HTML/CSS/JavaScript. It's a password-protected dashboard that organizes life into categorized sections (Personal, Work, Civic, Creative, Systems, etc.). Key features include bilingual support (English/Irish), five color themes, drag-and-drop customization, custom link management via LocalStorage, and a vintage aesthetic. No frameworks, no build process, no backend - just static files. The spiritual/religious elements (Catholic prayers, JMJ references) are integral to the creator's personal system. Think of it as a customizable personal homepage combined with a life management framework.
