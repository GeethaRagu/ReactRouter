import React from 'react';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import All from './Pages/All';
import FullStackDevelopment from './Pages/FullStackDevelopment';
import DataScience from './Pages/DataScience';
import CyberSecurity from './Pages/CyberSecurity';
import Career from './Pages/Career';
import PageNotFound from './Pages/PageNotFound';
import Navigation from './Components/Navigation/Navigation';
import Guvi from './Pages/Guvi';

const App = () => {

  const data = [
    {
      id:1,
      category:"fullstackdevelopment",
      image:"https://www.guvi.in/blog/wp-content/uploads/2023/07/how-long-it-would-it-take-to-learn-full-stack-development_-2048x1072.webp",
      content:"Best Full-Stack Development Project Ideas in 2024",
      author:"By Isha Sharma",
      date:"25 Mar, 2024"
    },
    {
      id:2,
      category:"fullstackdevelopment",
      image:"https://www.guvi.in/blog/wp-content/uploads/2023/07/how-long-it-would-it-take-to-learn-full-stack-development_-2048x1072.webp",
      content:"How Long Would It Take to Be a Full Stack Developer?",
      author:"By Meghana D",
      date:"26 Mar, 2024"
    },
    {
      id:3,
      category:"fullstackdevelopment",
      image:"https://www.guvi.in/blog/wp-content/uploads/2023/07/how-long-it-would-it-take-to-learn-full-stack-development_-2048x1072.webp",
      content:"6 Essential Prerequisites For Learning ReactJS",
      author:"By Ramkumar",
      date:"25 Mar, 2024"
    },
    {
      id:4,
      category:"fullstackdevelopment",
      image:"https://www.guvi.in/blog/wp-content/uploads/2023/08/Feature-image-Best-Full-Stack-Development-Online-Courses.webp",
      content:"7 Best Full-Stack Development Online Courses [2024]",
      author:"By Srinithi Sankar",
      date:"25 Mar, 2024"
    },
    {
      id:5,
      category:"fullstackdevelopment",
      image:"https://www.guvi.in/blog/wp-content/uploads/2023/08/Feature-image-Best-Full-Stack-Development-Online-Courses.webp",
      content:"The Future & Scope of Full-Stack Developers in India",
      author:"By Meghana D",
      date:"16 Apr, 2024"
    },
    {
      id:6,
      category:"fullstackdevelopment",
      image:"https://www.guvi.in/blog/wp-content/uploads/2023/08/Feature-image-Best-Full-Stack-Development-Online-Courses.webp",
      content:"Now Become A Full Stack Developer In 90 Days!",
      author:"By Archana",
      date:"21 Mar, 2024"
    },
    {
      id:7,
      category:"datascience",
      image:"https://www.guvi.in/blog/wp-content/uploads/2023/11/Feature-image-Top-High-Paying-Non-Coding-Jobs-in-Data-Science.webp",
      content:"Top 10 High Paying Non-Coding Jobs in Data Science in 2024",
      author:"By Isha Sharma",
      date:"16 Apr, 2024"
    },
    {
      id:8,
      category:"datascience",
      image:"https://www.guvi.in/blog/wp-content/uploads/2023/07/Real-World-Data-Science-Examples-2048x1072.webp",
      content:"12 Real-World Data Science Examples: Power Of Data Science",
      author:"By Lukesh S",
      date:"25 Mar, 2024"
    },
    {
      id:9,
      category:"datascience",
      image:"https://www.guvi.in/blog/wp-content/uploads/2023/11/Feature-image-Top-High-Paying-Non-Coding-Jobs-in-Data-Science.webp",
      content:"Can A Commerce Student Do Data Science?",
      author:"By Saakshi Priyadarshini",
      date:"16 Apr, 2024"
    },
    {
      id:10,
      category:"datascience",
      image:"https://www.guvi.in/blog/wp-content/uploads/2023/07/Real-World-Data-Science-Examples-2048x1072.webp",
      content:"Roles and Responsibilities of a Data Scientist",
      author:"By Jaishree Tomar",
      date:"16 Apr, 2024"
    },
    {
      id:11,
      category:"datascience",
      image:"https://www.guvi.in/blog/wp-content/uploads/2023/09/Feature-image-Top-Product-Based-Companies-for-Data-Scientists.webp",
      content:"Top Product-Based Companies for Data Scientists in 2024",
      author:"By Jaishree Tomar",
      date:"26 Mar, 2024"
    },
    {
      id:12,
      category:"datascience",
      image:"https://www.guvi.in/blog/wp-content/uploads/2023/09/Feature-image-Top-Product-Based-Companies-for-Data-Scientists.webp",
      content:"How Long Would It Take to Learn Data Science?",
      author:"By Meghana D",
      date:"16 Apr, 2024"
    },{
      id:13,
      category:"cybersecurity",
      image:"https://www.guvi.in/blog/wp-content/uploads/2023/12/Feature-image-Non-Coding-Jobs-in-Cybersecurity.webp",
      content:"Cybersecurity Vs Ethical Hacking: Top 10 Differences",
      author:"By Tushar Vinocha",
      date:"16 Apr, 2024"
    },
    {
      id:14,
      category:"cybersecurity",
      image:"https://www.guvi.in/blog/wp-content/uploads/2023/12/Feature-image-Non-Coding-Jobs-in-Cybersecurity.webp",
      content:"Non-Coding Jobs in Cybersecurity: A Comprehensive Guide",
      author:"By Jaishree Tomar",
      date:"26 Mar, 2024"
    },
    {
      id:15,
      category:"cybersecurity",
      image:"https://www.guvi.in/blog/wp-content/uploads/2023/09/Feature-image-What-Is-Hacking_-Types-of-Hacking-More.webp",
      content:"What Is Hacking? Types of Hacking & More",
      author:"By Meghana D",
      date:"25 Mar, 2024"
    },
    {
      id:16,
      category:"cybersecurity",
      image:"https://www.guvi.in/blog/wp-content/uploads/2023/12/Feature-image-Non-Coding-Jobs-in-Cybersecurity.webp",
      content:"8 Different Types of Cybersecurity and Threats Involved",
      author:"By Tushar Vinocha",
      date:"08 Sep, 2023"
    },
    {
      id:17,
      category:"cybersecurity",
      image:"https://www.guvi.in/blog/wp-content/uploads/2023/09/Feature-image-What-Is-Hacking_-Types-of-Hacking-More.webp",
      content:"What is Cybersecurity? Importance and its uses & the growing challenge",
      author:"By Tushar Vinocha",
      date:"04 Oct, 2023"
    },
    {
      id:18,
      category:"cybersecurity",
      image:"https://www.guvi.in/blog/wp-content/uploads/2023/09/Feature-image-What-Is-Hacking_-Types-of-Hacking-More.webp",
      content:"Is coding required for cybersecurity? If yes, how crucial is coding for cybersecurity",
      author:"By Tushar Vinocha",
      date:"25 Mar, 2024"
    },
    {
      id:19,
      category:"career",
      image:"https://static.guvi.in/course-thumbnail/webps/javascript.webp",
      content:"Javascript",
      author:"",
      date:"10h"
    },
    {
      id:20,
      category:"career",
      image:"https://static.guvi.in/course-thumbnail/webps/power-bi.webp",
      content:"PowerBI",
      author:"",
      date:"3h"
    },
    {
      id:21,
      category:"career",
      image:"https://static.guvi.in/course-thumbnail/webps/functional.webp",
      content:"Python Zero to Hero",
      author:"",
      date:"6h"
    },
    {
      id:22,
      category:"career",
      image:"https://static.guvi.in/course-thumbnail/webps/selenium.webp",
      content:"Selenium Automation",
      author:"",
      date:"10h"
    }
    
  ]

  return (
    <>
      <BrowserRouter>
         <div>
            <Navigation/>
         </div>
          <Routes>
              <Route path='/all' element={<All data={data}/>}/>
              <Route path='/fullstackdevelopment' element={<FullStackDevelopment data={data}/>}/>
              <Route path='/datascience' element={<DataScience data={data}/>}/>
              <Route path='/cybersecurity' element={<CyberSecurity data={data}/>}/>
              <Route path='/career' element={<Career data={data}/>}/>
              <Route path='/guvi' element={<Guvi/>}/>
              <Route path='*' element={<PageNotFound/>}/>
              <Route path='/' element={<All data={data}/>}/>
          </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;