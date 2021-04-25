import React from 'react'
import {Link} from 'react-router-dom'

const About = () => {
    return (
        <div class="jumbotron">
             <h1 class="display-4">Додаток React Версія 1.0.42</h1>
             <p class="lead">Це мій додаток списку завдань</p>
              <hr class="my-4"></hr>
              <p class="lead">
              <button>
             <Link className="link-button" to="/">Попередня сторінка</Link>
            </button>
              </p>
         </div>
             
    )
}

export default About

