  import MyImage from '../assets/MyImage.png'
  import Note from '../assets/Note.png'
   import News from '../assets/News.png'
    import VirtualR from '../assets/VirtualR.png'
  export const projects = [
    {
      id: 0,
  
      title: "NoteApp",
      description:
        "A full-stack note-taking web app built with the MERN stack—MongoDB, Express.js, React, and Node.js.. It features JWT-based authentication, protected routes, and secure password hashing. Users can search notes, filter by tags, and enjoy a mobile-first responsive UI. The backend follows RESTful API architecture, with a focus on performance optimization and a modular, scalable codebase.",
      image: Note,
      tags: ["HTML", "CSS", "JavaScript", "React JS", "NodeJS","Express","JWT","tailwind","MongoDB",],
      github: "https://github.com/Priyanshsingh1391/NoteApp",
      webapp: "",
    },
   
    {
      id: 1,
      title: "VirtualR",
      description:
        "A visually engaging, animated landing page for a fictional VR company, built using React and Tailwind CSS. It demonstrates modern UI principles like responsive design, component reusability, and smooth transitions, while emphasizing performance, accessibility, and cross-browser compatibility.",
      image: VirtualR,
      tags: ["React JS", "HTML", "CSS", "JavaScript"],
      github: "https://github.com/Priyanshsingh1391/VR",
      webapp: "https://vr-jblh.vercel.app/",
    },
     {
      id: 2,
      title: "Trendy News (A news appliaction)",
      description:
        "A dynamic, real-time news platform built with React.js and Tailwind CSS, integrating a public News API. It features category-based filtering, keyword search, and pagination, delivering a seamless user experience. With robust handling of loading states, errors, and React hooks for state management, the app ensures performance, maintainability, and interactivity.",
        image: News,
      tags: ["React JS",  "API", "HTML", "CSS", "JavaScript"],
      github: "https://github.com/Priyanshsingh1391/Trendy-News",
      webapp: "" ,
    },
   
  ];  