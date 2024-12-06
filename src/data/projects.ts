import { ProjectItem } from "../types";

export const projectsData: ProjectItem[] = [
  {
    title: "Tourism Application",
    description:
      "A modern web application that helps users explore destinations, plan itineraries, and book experiences for seamless adventures",
    image: "tourism.png",
    tech: ["React", "TypeScript", "Tailwind Css", "framer motion"],
    github: "https://github.com/Rajeshk47",
    live: "https://tourisamapp.netlify.app/",
    details: {
      problem:
        "Traditional job boards lack modern features and user experience",
      solution:
        "Built a streamlined job portal with real-time updates and intelligent matching",
      features: [
        "Discover popular tourist spots",
        "Create personalized travel itineraries tailored to your interests, dates, and preferences",
      ],
      impact: "Helping thousands of job seekers find their dream positions",
    },
  },
  {
    title: "Shopping Website",
    description: "It's a seamless shopping app for browsing, buying",
    image: "shopping.png",
    tech: ["React", "TypeScript", "Tailwind Css", "framer motion"],
    github: "https://github.com/Rajeshk47",
    live: "https://shoppingapplication3.netlify.app",
    details: {
      problem: "Complex meeting scheduling across time zones",
      solution:
        "Created an intuitive scheduling platform with automated time zone handling",
      features: [
        "Browse a curated selection of products.",
        "Enjoy an interactive and user-friendly interface.",
        "Experience a seamless shopping journey on any device",
      ],
      impact: "Reduced meeting scheduling time by 80% for users",
    },
  },
  {
    title: "IMDB Clone",
    description:
      "An IMDb clone that lets users browse, search, and discover movies, TV shows, and actors, with detailed information, ratings, and reviews.",
    image: "IMDB clone.png",
    tech: ["React", "Javascript", "npm"],
    github: "https://github.com/Rajeshk47",
    live: "https://imdbmoviereviewsite.netlify.app",
    details: {
      problem: "Need for a simplified project management tool for small teams",
      solution:
        "Developed a streamlined alternative to complex enterprise tools",
      features: [
        "Search and explore movies, TV shows, and actors",
        "View ratings, reviews, and detailed information",
        "Enjoy a smooth, user-friendly interface for easy navigation.",
      ],
      impact: "Helping teams increase productivity by 40%",
    },
  },
  // {
  //   title: "Reflct",
  //   description: "A minimalist journaling application",
  //   image: "reflct.png",
  //   tech: ["Next.js", "Tailwind CSS", "Supabase"],
  //   github: "https://github.com/Rajeshk47",
  //   live: "https://youtu.be/R5dBYINNouY?si=9x7lSDuqwJ0ojtIg",
  //   details: {
  //     problem: "Digital journaling apps are often cluttered and complex",
  //     solution:
  //       "Created a clean, focused writing experience with powerful features",
  //     features: [
  //       "Markdown support",
  //       "Daily prompts",
  //       "Mood tracking",
  //       "Privacy-focused design",
  //     ],
  //     impact: "Helping users maintain consistent journaling habits",
  //   },
  // },
];
