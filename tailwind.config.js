/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        heading: ['Poppins', 'system-ui', 'sans-serif'],
        body: ['Inter', 'system-ui', 'sans-serif'],
      },
      colors: {
        primary: '#0F0F0F',
        secondary: '#6B7280',
        accent: '#6366F1',
        'accent-violet': '#8B5CF6',
        mint: '#22D3A5',
        border: '#E5E7EB',
        surface: '#FAFAFA',
      },
      backgroundImage: {
        'gradient-accent': 'linear-gradient(135deg, #6366F1, #8B5CF6)',
        'gradient-accent-h': 'linear-gradient(90deg, #6366F1, #8B5CF6)',
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'float-slow': 'float 9s ease-in-out infinite',
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'spin-slow': 'spin 12s linear infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
      },
      boxShadow: {
        'accent': '0 0 30px rgba(99, 102, 241, 0.25)',
        'accent-lg': '0 0 60px rgba(99, 102, 241, 0.35)',
        'card': '0 4px 24px rgba(0,0,0,0.07)',
        'card-hover': '0 16px 48px rgba(0,0,0,0.12)',
      },
    },
  },
  plugins: [],
}
