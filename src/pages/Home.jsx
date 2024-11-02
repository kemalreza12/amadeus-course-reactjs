import React from 'react'
import Navbar from '../component/Navbar'
import Footer from '../component/Footer'
import Tutors from '../component/Tutors'
import Partners from '../component/Partners'
import Contact from '../component/Contact'
import { homeSection } from '../data/HomeSection'
import { courseSection } from '../data/CourseSection'
import { tutorsSection, tutorList } from '../data/TutorsSection'
import { partnersSection } from '../data/PartnersSection'

import parse from 'html-react-parser'
import '../styles/Home.css'

function Home() {
  return (
    <div>
      <Navbar />
      {/* home */}
      <div className='wrapper'>
      <section id="home">
            <img src={homeSection.image} />
            <div className="kolom">
                {parse(homeSection.content)}
            </div>
        </section>

        {/* online course */}
        <section id="courses">
            <div className="kolom">
                {parse(courseSection.content)}               
            </div>
            <img src={courseSection.image}/>
        </section>

        {/* tutors */}
        <section id="tutors">
            <div className="tengah">
                <div className="kolom">
                  {parse(tutorsSection.content)}
                </div>
                <Tutors tutorList={tutorList}/>
            </div>
        </section>

        {/* Partners */}
        <section id="partners">
            <div className="tengah">
                <div className="kolom">
                  {parse(partnersSection.content)}
                 </div>
                 <Partners />
              </div>
        </section>
      <Contact />
      </div>

      {/* contact */}
      <Footer />
    </div>
  )
}

export default Home
