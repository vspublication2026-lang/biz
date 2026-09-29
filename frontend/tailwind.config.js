/** @type {import('tailwindcss').Config} */
module.exports = {
    // `overline` is a Tailwind utility; without this an app's own eyebrow-label class draws a line above the text.
    blocklist: ["overline"],
    darkMode: ["class"],
    content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./public/index.html"
  ],
  theme: {
    extend: {
      fontFamily: {
        display: ['"Cabinet Grotesk"', 'sans-serif'],
        body: ['"Plus Jakarta Sans"', 'sans-serif'],
      },
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)'
      },
      colors: {
        // ——— Site palette: PINK · PURPLE · GRAY ———
        // pinks
        'biz-pink': '#FF3E8E',
        'biz-magenta': '#D81B74',
        'biz-rose': '#FF6FA5',
        'biz-blush': '#FFE1EF',
        // purples
        'biz-purple': '#8B5CF6',
        'biz-violet': '#6D28D9',
        'biz-lilac': '#C4B5FD',
        'biz-lavender': '#EAE4FF',
        // supporting blue (cards)
        'biz-azure': '#71A6D2',
        'biz-ice': '#DCEAF5',
        'biz-mistblue': '#C7DDEE',
        'biz-steel': '#5C86B6',
        'biz-teal': '#629BB6',
        // greys
        'biz-ink': '#111111',
        'biz-charcoal': '#2A2A2A',
        'biz-slate': '#6B7280',
        'biz-grey': '#A7A9AB',
        'biz-silver': '#D1D3D8',
        'biz-stone': '#ECECEA',
        'biz-mist': '#F1F1F3',
        'biz-paper': '#FAFAFA',
        // legacy names kept so existing classes keep working, remapped to the new palette
        'biz-blue': '#6D28D9',
        'biz-orange': '#D81B74',
        'biz-yellow': '#FFC2DC',
        'biz-green': '#A7A9AB',
        'biz-red': '#D81B74',
        'biz-coral': '#FF6FA5',
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        card: {
          DEFAULT: 'hsl(var(--card))',
          foreground: 'hsl(var(--card-foreground))'
        },
        popover: {
          DEFAULT: 'hsl(var(--popover))',
          foreground: 'hsl(var(--popover-foreground))'
        },
        primary: {
          DEFAULT: 'hsl(var(--primary))',
          foreground: 'hsl(var(--primary-foreground))'
        },
        secondary: {
          DEFAULT: 'hsl(var(--secondary))',
          foreground: 'hsl(var(--secondary-foreground))'
        },
        muted: {
          DEFAULT: 'hsl(var(--muted))',
          foreground: 'hsl(var(--muted-foreground))'
        },
        accent: {
          DEFAULT: 'hsl(var(--accent))',
          foreground: 'hsl(var(--accent-foreground))'
        },
        destructive: {
          DEFAULT: 'hsl(var(--destructive))',
          foreground: 'hsl(var(--destructive-foreground))'
        },
        border: 'hsl(var(--border))',
        input: 'hsl(var(--input))',
        ring: 'hsl(var(--ring))',
        chart: {
          '1': 'hsl(var(--chart-1))',
          '2': 'hsl(var(--chart-2))',
          '3': 'hsl(var(--chart-3))',
          '4': 'hsl(var(--chart-4))',
          '5': 'hsl(var(--chart-5))'
        }
      },
      keyframes: {
        'accordion-down': {
          from: {
            height: '0'
          },
          to: {
            height: 'var(--radix-accordion-content-height)'
          }
        },
        'accordion-up': {
          from: {
            height: 'var(--radix-accordion-content-height)'
          },
          to: {
            height: '0'
          }
        }
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out'
      }
    }
  },
  plugins: [require("tailwindcss-animate")],
};
