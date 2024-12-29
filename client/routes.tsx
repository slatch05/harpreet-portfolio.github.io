import { createRoutesFromElements, Route } from 'react-router-dom'
import Layout from './components/Layout'
import { HomePage } from './Pages/HomePage/HomePage'
import { Projects } from './Pages/Projects/Projects'
import { About } from './Pages/About/About'
import { Contact } from './Pages/Contact/Contact'
import { GameHub } from './Pages/Projects/GameHub'
import { BiteShare } from './Pages/Projects/BiteShare'
import { FoodRecipe } from './Pages/Projects/FoodRecipe'

export default createRoutesFromElements(
  <Route path="/" element={<Layout />}>
    <Route index element={<HomePage />} />
    <Route path="projects" element={<Projects />} />
    <Route path="about" element={<About />} />
    <Route path="contact" element={<Contact />} />
    <Route path="Gamehub" element={<GameHub />} />
    <Route path="biteshare" element={<BiteShare />} />
    <Route path="foodrecipe" element={<FoodRecipe />} />
  </Route>,
)
