import React from 'react'
import Sidebar from '../components/sidebar'
import Home from '../components/home'
import About from '../components/about'
import Experience from '../components/experience'
import Education from '../components/education'
import Skills from '../components/skills'
import Projects from '../components/projects'
import Achievements from '../components/achievements'
import Responsibility from '../components/responsibility'
import Certifications from '../components/certifications'


function Main() {
    return(
        <div id = "template-page">
            <div id = "container-wrap">
                <Sidebar></Sidebar>
                <div id = "template-main">
                <Home></Home>
                <About></About>
                <Experience></Experience>
                <Education></Education>
				<Skills></Skills>
				<Projects></Projects>
                <Achievements></Achievements>
				<Responsibility></Responsibility>
				<Certifications></Certifications>
                </div>
            </div>
        </div>
    );
}
export default Main;