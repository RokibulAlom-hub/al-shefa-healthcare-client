// tailwind.config.js
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Custom color palette
        'navbar-bg': '#FDF6F0', // Cream
        'navbar-text': '#2D3748', // Deep Gray
        'primary-btn': '#F56565', // Coral
        'secondary-btn': '#A78BFA', // Soft Purple
        'btn-text': '#FFFFFF', // White
        'section-bg': '#FFF9F5', // Off-Cream
        'card-bg': '#FFFFFF', // White
        'primary-text': '#1A202C', // Dark Slate
        'secondary-text': '#718096', // Warm Gray
        'link': '#F56565', // Coral
        'success': '#48BB78', // Mint Green
        'error': '#C53030', // Deep Red
        'border': '#EDF2F7', // Light Gray
        'hover': '#E53E3E', // Darker Coral
      },
    },
  },
  plugins: [],
}
