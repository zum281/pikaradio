# Pikaradio | Pokemon Radio Player

## 🎯 Project Overview

A cozy, pixel-art Pokemon-themed web radio player that streams internet radio stations with a retro aesthetic.

## 🎵 Core Functionality

### Audio Features

- **Stream internet radio stations** using Radio Browser API
- **Play/Pause controls** with immediate response
- **Volume control** (0-100%)
- **Station switching** (previous/next)
- **Audio buffering/loading** handling

### Station Management

- **Default to Italian radio stations**
- **Genre filtering**: Pop, Lo-fi (expandable)
- **Station browsing** via sidebar menu
- **Quick station selection** (numbered 1-9)
- **Currently playing info** display

## 🎮 User Interface

### Visual Design

- **Pixel art aesthetic** - cozy Stardew Valley vibes
- **Main radio unit** - retro radio design with controls
- **Always-visible sidebar** for station browsing
- **Station info display** on main unit
- **Simple loading states** ("Tuning in...")

### Future Pokemon Elements (V2)

- Pokeball as play/pause button
- Pikachu ears on radio design
- Pokemon-themed loading animations

## ⌨️ Keyboard Controls

- **Space** - Play/Pause
- **↑/↓ Arrow Keys** - Volume up/down
- **←/→ Arrow Keys** - Previous/Next station
- **Number Keys 1-9** - Quick station select
- **M** - Mute toggle (bonus)

## 🏗️ **Technical Architecture**

### **Component Structure**

```
src/
├── components/
│   ├── Radio/
│   │   ├── RadioPlayer.tsx      // Main container
│   │   ├── RadioControls.tsx    // Play/pause/volume
│   │   ├── RadioDisplay.tsx     // Station info screen
│   │   └── RadioDesign.tsx      // Pixel art radio shell
│   └── Sidebar/
│       ├── StationSidebar.tsx   // Main sidebar
│       ├── StationList.tsx      // Station list per genre
│       └── StationItem.tsx      // Individual station
├── hooks/
│   ├── useAudioPlayer.ts        // Audio control logic
│   ├── useKeyboardControls.ts   // Keyboard shortcuts
│   └── useStations.ts           // Station data management
├── services/
│   └── radioBrowserApi.ts       // API calls
├── types/
│   ├── station.ts               // Station interface definitions
│   └── audio.ts                 // Audio player types
└── styles/
    └── pixel-art.css           // Custom retro styling
```

### **TypeScript Considerations**

```typescript
// Core types to implement
type RadioStation = {
  stationuuid: string;
  name: string;
  url_resolved: string;
  homepage: string;
  favicon: string;
  tags: string;
  country: string;
  language: string;
  bitrate: number;
  codec: string;
};

type AudioPlayerState = {
  isPlaying: boolean;
  volume: number;
  currentStation: RadioStation | null;
  isLoading: boolean;
  error: string | null;
};
```

### **Key Technical Considerations**

| Risk                           | Impact | Mitigation                                 |
| ------------------------------ | ------ | ------------------------------------------ |
| CORS issues with radio streams | High   | Test multiple stations, have fallback list |
| Audio autoplay restrictions    | Medium | User-initiated play, clear play button     |
| Stream loading timeouts        | Medium | 10s timeout, error handling, skip to next  |
| Mobile keyboard controls       | Low    | Touch controls as fallback                 |

## 📅 **Development**

### **Setup & Infrastructure (30 mins)**

- [x] Create Vite + React + TypeScript app
- [x] Setup pnpm and install dependencies
- [x] Configure Tailwind CSS
- [x] Setup TypeScript path aliases (`@/components/*`, etc.)
- [ ] Create basic TypeScript interfaces (`RadioStation`, `AudioPlayerState`)
- [ ] Deploy empty app to Vercel
- [ ] Test Radio Browser API in browser console
- [ ] Create project folder structure

### **Core Audio Engine (45 mins)**

- [ ] Create `useAudioPlayer` custom hook
- [ ] Implement play/pause functionality
- [ ] Add volume control (0-100%)
- [ ] Handle stream loading states
- [ ] Error handling for failed streams
- [ ] Test with 2-3 Italian stations manually

### **Data Layer (30 mins)**

- [ ] Create Radio Browser API service (`radioBrowserApi.js`)
- [ ] Fetch Italian Pop stations
- [ ] Fetch Lo-fi stations
- [ ] Create station data types/interfaces
- [ ] Implement station filtering logic

### **Basic UI (45 mins)**

- [ ] Create main radio component layout
- [ ] Build station sidebar list
- [ ] Add play/pause button
- [ ] Volume slider component
- [ ] Station info display
- [ ] Basic responsive layout

### **Keyboard Controls (20 mins)**

- [ ] Implement keyboard event listeners
- [ ] Map all controls (space, arrows, numbers)
- [ ] Add visual feedback for keyboard actions
- [ ] Test all shortcuts

### **Pixel Art Polish (40 mins)**

- [ ] Create retro radio design with CSS
- [ ] Add pixel art borders and shadows
- [ ] Cozy color palette (warm, soft colors)
- [ ] Loading animations ("Tuning in...")
- [ ] Basic hover effects

**Total Estimated Time:** ~3.5 hours + 30min buffer

## 🎯 **Success Metrics (MVP)**

### **Must Have (Definition of Done)**

- [ ] Plays at least 10 Italian radio stations
- [ ] Volume control works (0-100%)
- [ ] All keyboard shortcuts functional
- [ ] Loads within 3 seconds
- [ ] Works on Chrome, Firefox, Safari
- [ ] Responsive on mobile

### **Nice to Have (V1.1)**

- [ ] Station favorites persistence (localStorage)
- [ ] Better error messages
- [ ] More genre categories
- [ ] Enhanced animations

## 📡 Radio Browser API Integration

### Base URL

```
https://de1.api.radio-browser.info/json
```

### Key Endpoints

#### Search by Country (Italy)

```
GET /stations/bycountryexact/Italy
```

#### Search by Genre/Tag

```
GET /stations/bytag/pop
GET /stations/bytag/lofi
GET /stations/bytag/chillout
```

#### Search with Multiple Parameters

```
GET /stations/search?country=Italy&tag=pop&limit=20
```

### Station Object Structure

```javascript
{
  stationuuid: "uuid-here",
  name: "Station Name",
  url_resolved: "http://stream-url.com", // Use this for playback!
  homepage: "http://website.com",
  favicon: "http://logo-url.com",
  tags: "pop,italian,music",
  country: "Italy",
  language: "italian",
  bitrate: 128,
  codec: "MP3"
}
```

### Example API Calls

```javascript
// Get Italian pop stations
const response = await fetch(
  "https://de1.api.radio-browser.info/json/stations/search?country=Italy&tag=pop&limit=10",
);
const stations = await response.json();

// Get lofi stations (any country)
const lofiResponse = await fetch(
  "https://de1.api.radio-browser.info/json/stations/bytag/lofi?limit=10",
);
const lofiStations = await lofiResponse.json();
```

## 🎨 UI Components Breakdown

### Main Radio Unit

- Pixel art radio design
- Play/pause button (center)
- Volume slider/knob
- Station display screen
- "Now Playing" info

### Sidebar Menu

- Genre categories (Pop, Lo-fi)
- Station list per category
- Search/filter options
- Station details (name, country, bitrate)

### Control Elements

- Previous/Next station buttons
- Volume controls
- Mute button
- Loading indicators

## 📋 MVP Checklist

### Phase 1 (One Afternoon)

- [ ] Basic React app setup
- [ ] Radio Browser API integration
- [ ] Simple audio playback functionality
- [ ] Basic pixel art radio design
- [ ] Station sidebar with Italian Pop/Lo-fi
- [ ] Keyboard controls implementation
- [ ] Play/pause/volume controls

### Phase 2 (Future Iterations)

- [ ] Enhanced pixel art design
- [ ] Pokemon character elements
- [ ] Pokeball play button
- [ ] Station favorites/bookmarks
- [ ] More genre categories
- [ ] Advanced animations
- [ ] Responsive mobile design

## 🔗 Useful Resources

### Radio Browser API

- **Main Site**: https://www.radio-browser.info/
- **API Docs**: https://de1.api.radio-browser.info/
- **GitHub**: https://github.com/segler-alex/RadioBrowser

### Additional Genres to Explore

- `chill`, `chillout`, `ambient`, `jazz`, `electronic`, `indie`, `alternative`
- `italian` (for local content)
- `hits`, `top40`, `dance`

### Testing Stations

- Test with multiple stations to ensure stream compatibility
- Some stations may have CORS issues - have fallbacks ready
- Check for both MP3 and AAC codec support

## **Testing Checklist**

- [ ] Test API calls in different browsers
- [ ] Verify audio playback on mobile
- [ ] Check keyboard shortcuts
- [ ] Test with slow internet connection
- [ ] Verify responsive design
