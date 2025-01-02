import { useState } from 'react'
import reactLogo from './assets/react.svg'
import CourseCard from './CourseCard'
import Header from './Header'
import Footer from './Footer'

export default function App() {
  const [size, setSize] = useState(1);

  const handleClick = () => {
    setSize(size + 0.1);
  }

  return (
    <>
      <Header/>
      <main>
        <div className='course__cover'>
          <img 
            src={reactLogo} 
            style={{ transform: `scale(${size})` }}
            onClick={handleClick}
            className='react__svg' 
            alt='react logo'
          />
          <h1 className='course__title'>Ready to React</h1>
          <p className='course__desc'>The UWCS course on the ultimate web dev library</p>
          <div className='course__links'>
            <a className='course__link course__link__clr' href='https://discord.gg/5v35Sjds'>UWCS Discord</a>
            <a className='course__link course__link__alt' href='https://www.youtube.com/@warwickcomputing'>YouTube Channel</a>
          </div>
        </div>
        <div className='cards__container'>
          <CourseCard 
            title={"Session 1"}
            desc={"Learn about the fundamentals of components, JSX, and state. You'll build your first React app by combining these core concepts and get an introduction to React fibre, the powerful rendering engine that enables rapid UI updates."}
            keywords={["Components", "JSX", "State", "React Fibre"]}
          />
          <CourseCard 
            title={"Session 2"}
            desc={"Learn how to render dyanmic lists, manage and understand keys, and use controlled forms in React. Build a flashcard app to put these concepts to practice and gain more experience on state management by creating interactive components."}
            keywords={["Lists", "Keys", "Handlers", "Controlled Forms"]}
          />
          <CourseCard 
            title={"Session 3"}
            desc={"Learn how to handle side effects and data fetching in React during this two-part session. In part 1, you will gain a clear understanding of side effects, the dependency array, and how it relates to data fetching. We begin building the Wordle clone to apply these concepts."}
            keywords={["Side effects", "Dependencies", "Data fetching"]}
          />
          <CourseCard 
            title={"Session 4"}
            desc={"Learn about conditional rendering, referencing DOM elements, and web hosting with Cloudflare. In part 2, you will continue building on these concepts, complete the Wordle clone, and deploy it to the web."}
            keywords={["Conditional rendering", "References", "Hosting"]}
          />
          <CourseCard 
            title={"Session 5"}
            desc={"In the final session you will learn about routing, global state management, and be given a brief introduction to advanced React concepts and libraries, such as custom hooks, memoisation, and Redux. You will also learn where to go next to continue advancing your React skills."}
            keywords={["Routing", "Global state", "Advanced React"]}
          />
        </div>
      </main>
      <Footer/>
    </>
  )
}