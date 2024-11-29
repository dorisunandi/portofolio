

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  prefix:"",
  theme: {
    
    extend: {
      fontFamily:{
        primay:"var(--font-jetbrainsMono)",
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        primary: "#1c1c22",
        accent:{
          DEFAULT: "#08FF99",
          hover:"#00e187",
        },
      },
      keyframes:{
        'accordion-down':{
          from:{height:"0"},
          to:{height:"var(--radix-accordion-content-height)"},
        },
        'accordion-up':{
          from:{height:"var(--radix-accordion-content-height)"},
          to:{height:"0"},

          },

        },
    animation:{
      'accordion-down':"accordion-down 0.2s ease-out",
      'accordion-up':"accrdion-up 0.2s ease-out"
    },
      },
    
     
    container:{
      center:true,
      padding: '15px',
      screens:{
        sm:'648px',
        md:'768px',
        lg:'968px',
        xl:'1200px',
      },
     
   

      },
    },
    
    
    plugins : [require("tailwindcss-animate")],
    }

