# El Parlamento - Frontend

A responsive frontend application for El Parlamento restaurant/café management system built with Next.js, React, and Tailwind CSS.

## Project Overview

El Parlamento is a unique café and cultural house in La Paz, Bolivia, that celebrates Bolivian history, culture, and gastronomy. This frontend application provides a complete digital experience for customers to explore menus, book events, and connect with the establishment.

## Technology Stack

- **Framework**: Next.js 14+ (App Router)
- **UI Library**: React 18+
- **Styling**: Tailwind CSS
- **UI Components**: shadcn/ui
- **Language**: TypeScript
- **Package Manager**: pnpm
- **Build Tool**: Next.js built-in bundler
- **State Management**: Zustand
- **Forms**: React Hook Form + Zod validation
- **Icons**: Lucide React
- **Animations**: Framer Motion, Motion One

## Project Structure

```
frontend_p/
├── app/                    # Next.js app router pages
│   ├── about/             # About page
│   ├── contact/           # Contact page
│   ├── events/            # Events and booking system
│   ├── gallery/           # Gallery page
│   ├── menu/              # Menu display
│   ├── layout.tsx         # Root layout
│   └── page.tsx           # Home page
├── components/            # Reusable React components
│   ├── ui/               # shadcn/ui components
│   ├── header.tsx        # Navigation header
│   ├── footer.tsx        # Footer component
│   └── ...               # Other components
├── hooks/                # Custom React hooks
├── lib/                  # Utility functions and configurations
├── public/               # Static assets
└── styles/               # Global styles
```

## Features

- **Responsive Design**: Mobile-first approach with Tailwind CSS
- **Event Management**: Browse and book events/workshops
- **Menu Display**: Interactive menu with categories and images
- **Contact System**: Contact forms with validation
- **Gallery**: Image showcase of the establishment
- **Dark/Light Mode**: Theme switching capability
- **Performance Optimized**: Next.js optimizations and image handling
- **SEO Friendly**: Proper meta tags and structured data
- **Accessibility**: WCAG compliant components

## Installation & Setup

### Prerequisites

- Node.js 18+ 
- pnpm (recommended) or npm

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/AgredaLem023/frontend_parlamento.git
   cd frontend_parlamento/frontend_p
   ```

2. **Install dependencies**
   ```bash
   pnpm install
   ```

3. **Environment Setup**
   ```bash
   # Create .env.local file (if needed)
   cp .env.example .env.local
   ```

4. **Run development server**
   ```bash
   pnpm dev
   ```

5. **Open in browser**
   ```
   http://localhost:3000
   ```

## Development Commands

```bash
# Development server
pnpm dev

# Production build
pnpm build

# Start production server
pnpm start

# Lint code
pnpm lint

# Type checking
pnpm type-check
```

## UI Components

This project uses [shadcn/ui](https://ui.shadcn.com/) components for a consistent and accessible design system:

- Buttons, Cards, Forms, Dialogs
- Navigation, Dropdowns, Tooltips
- Calendar, Carousel, Charts
- Toast notifications and more

## Configuration

- **Tailwind CSS**: `tailwind.config.ts`
- **Next.js**: `next.config.mjs`
- **TypeScript**: `tsconfig.json`
- **Component Library**: `components.json`

## Pages & Routes

- **Home** (`/`) - Landing page with hero section and features
- **About** (`/about`) - Information about El Parlamento
- **Menu** (`/menu`) - Food and beverage menu
- **Events** (`/events`) - Event listings and booking
- **Gallery** (`/gallery`) - Photo gallery
- **Contact** (`/contact`) - Contact information and forms

## Deployment

The application is optimized for deployment on:
- Vercel (recommended for Next.js)
- Netlify
- Static hosting providers

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is proprietary software. All rights reserved.

## Author

**Sergio Agreda**
- Email: sergioagreda21@outlook.com
- GitHub: [@AgredaLem023](https://github.com/AgredaLem023)
- Role: Original developer and frontend architect

## Contact

For questions about this project or El Parlamento:

- **Email**: info@elparlamento.bo
- **Phone**: +591 78516505
- **Address**: Calle Comercio, esquina Colón #1280, La Paz, Bolivia
- **Instagram**: [@elparlamento.bo](https://www.instagram.com/elparlamento.bo/)
- **Facebook**: [El Parlamento](https://www.facebook.com/profile.php?id=61566976663843)

## Acknowledgments

- Built with modern React ecosystem
- UI components from shadcn/ui
- Icons from Lucide React
- Fonts: Jost and Junicode
- Image optimization with Next.js

---

**© 2025 Sergio Agreda. All rights reserved.** 