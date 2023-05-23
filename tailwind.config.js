/** @type {import('tailwindcss').Config} */
export default {
  content: [ 
    "./index.html", 
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}

// The stuff in the content brackets is different in the video than on Tailwind's install page. They have: ["./src/**/*.{html,js}"],

// There was also another begining step in the documentation that was not in the class video. I tried this step but it didnt work. 

//  Also for the last step, the documentation has it being added in src/index.html , which doesnt exist for me. 
//  Brandon added it to app.tsx, which did work for me. 

