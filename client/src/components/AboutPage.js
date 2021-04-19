import React from 'react'

const AboutPage = () => {
  return (
    <>
      <div className="work-feature-block row">
        <div className="columns medium-7">
          <img className="work-feature-block-image" src="https://placehold.it/600x400"/>
        </div>
        <div className="columns medium-5">
          <h2 className="work-feature-block-header text-center">About the creator</h2>
            <p>Ben MartinMooney is a private climbing coach, amateur competitive climber, and aspiring software developer. Drawn to climbing by the combination of iterative, mental, and physiological problem solving, Ben fell in love with the sport in 2016 and never looked back. Through the community at his local climbing gym, Ben found a segment of the population who had taken their love of problem solving into not just their hobbies, but their professional lives as well: software engineers. After innumerable conversations, Ben began the process of learning the basics of CSS and HTML before enrolling at Launch Academy to jump start his career in software engineering and</p>
          <h2 className="text-center">Scend It</h2>
            <p>Scend It is the final (and ongoing) project of a full-stack bootcamp. The idea for the app came from a passion for climbing combined with a love of data. Much like software and web development, rock climbing is a process of continuous learning and improvement - a process that is bolstered by the ability to review previous work for specific takeaways and learning opportunities. Scend It provides more than just the basic information regarding the climb you did. It provides the context necessary to fully evaluate your performance on the wall, from season to season, year to year, and (potentially) decade to decade.</p>
        </div>
      </div>
      <div className="grid-container">
        <div className="grid-x grid-margin-x small-up-2 medium-up-3">
          <div className="cell">
            <div className="card">
              <div className="card-section">
                <h4>Database Features</h4>
                <ul>
                  <li>List of climbing crags</li>
                  <li>List of associated climbs</li>
                  <li>Comments section</li>
                </ul>
              </div>
            </div>
          </div>
          <div className="cell">
            <div className="card">
              <div className="card-section">
                <h4>Future features:</h4>
                <ul>
                  <li>Ability to "tick" the climbs you've sent</li>
                  <li>Favorite crags/climbs</li>
                  <li>Climb wishlist</li>
                  <li>Weather data - temp/humidity/etc, tied to the date of an attempt</li>
                  <li>User profile with relevant data</li>
                </ul>
              </div>
            </div>
          </div>
          <div className="cell">
            <div className="card">
              <div className="card-section">
                <h4>Feature wishlist:</h4>
                <ul>
                  <li>Photo gallery for each crag and climb via AWS hosting</li>
                  <li>Section for tracking indoor climbs and/or training sessions</li>
                  <li>Free basic training session guides</li>
                  <li>Hub for clients to sign up, pay for, and receive, custom training plans</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default AboutPage
