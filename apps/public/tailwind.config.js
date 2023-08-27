const plugin = require('tailwindcss/plugin');

/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ['class'],
  content: ['app/**/*.{ts,tsx,mdx}', 'src/**/*.{ts,tsx,mdx}'],
  theme: {
    container: {
      center: true,
      padding: '2rem',
      screens: {
        '2xl': '1400px'
      }
    },
    extend: {
      screens: {
        'touch-device': { raw: '(hover: none)' },
        'touch-no-animation': { raw: '(prefers-reduced-motion)' }
      },
      colors: {
        border: 'hsl(var(--border))',
        input: 'hsl(var(--input))',
        ring: 'hsl(var(--ring))',
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        primary: {
          DEFAULT: 'hsl(var(--primary))',
          foreground: 'hsl(var(--primary-foreground))'
        },
        secondary: {
          DEFAULT: 'hsl(var(--secondary))',
          foreground: 'hsl(var(--secondary-foreground))'
        },
        destructive: {
          DEFAULT: 'hsl(var(--destructive))',
          foreground: 'hsl(var(--destructive-foreground))'
        },
        muted: {
          DEFAULT: 'hsl(var(--muted))',
          foreground: 'hsl(var(--muted-foreground))'
        },
        accent: {
          DEFAULT: 'hsl(var(--accent))',
          foreground: 'hsl(var(--accent-foreground))'
        },
        popover: {
          DEFAULT: 'hsl(var(--popover))',
          foreground: 'hsl(var(--popover-foreground))'
        },
        card: {
          DEFAULT: 'hsl(var(--card))',
          foreground: 'hsl(var(--card-foreground))'
        }
      },
      backgroundImage: {
        'hero-right-side':
          'radial-gradient(farthest-corner circle at 0% 0%, rgba(0, 58, 117, 0.3) 0%, #101418 100%)',
        'navigation-blog':
          'linear-gradient(-225deg, #65379B 0%, #886AEA 53%, #6457C6 100%)',
        'navigation-works':
          'linear-gradient(-225deg, #7742B2 0%, #F180FF 52%, #FD8BD9 100%)',
        'navigation-insights':
          'linear-gradient(-225deg, #77FFD2 0%, #6297DB 48%, #1EECFF 100%)',
        'showcase-container-light':
          'linear-gradient(-225deg, #69EACB 0%, #EACCF8 48%, #6654F1 100%)',
        'showcase-container-dark':
          'linear-gradient(to bottom, #323232 0%, #3F3F3F 40%, #1C1C1C 150%), linear-gradient(to top, rgba(255,255,255,0.40) 0%, rgba(0,0,0,0.25) 200%)'
      },
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)'
      },
      keyframes: {
        'accordion-down': {
          from: { height: 0 },
          to: { height: 'var(--radix-accordion-content-height)' }
        },
        'accordion-up': {
          from: { height: 'var(--radix-accordion-content-height)' },
          to: { height: 0 }
        },
        'feature-work-up': {
          '0%': {
            transform: 'translateY(150px)'
          },
          '100%': {
            transform: 'translateY(-20px)'
          }
        },
        'feature-work-down': {
          '0%': {
            transform: 'translateY(-300px)'
          },
          '100%': {
            transform: 'translateY(-60px)'
          }
        },
        'feature-journey-up': {
          '0%': {
            transform: 'translateY(-300px)'
          },
          '100%': {
            transform: 'translateY(-20px)'
          }
        },
        'feature-journey-down': {
          '0%': {
            transform: 'translateY(150px)'
          },
          '100%': {
            transform: 'translateY(-80px)'
          }
        }
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
        'work-slide-up':
          '30s ease-out 0s 1 normal forwards running feature-work-up',
        'work-slide-down':
          '30s ease-out 0s 1 normal forwards running feature-work-down',
        'journey-slide-up':
          '30s ease-out 0s 1 normal forwards running feature-journey-up',
        'journey-slide-down':
          '30s ease-out 0s 1 normal forwards running feature-journey-down'
      }
    }
  },
  plugins: [
    plugin(function ({ addVariant }) {
      addVariant('hocus', ['&:hover', '&:focus']);
    }),
    require('tailwindcss-animate')
  ]
};
