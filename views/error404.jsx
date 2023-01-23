const React = require('react')
const Def = require('./default')

function error404() {
    return (
      <Def>
          <main>
              <h1>404: PAGE NOT FOUND</h1>
              <div>
                <img src="/images/404-image.jpg" alt="404 Error" />
                <div>
                Photo by <a href="https://unsplash.com/@woodies11?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Romson Preechawit</a> on <a href="https://unsplash.com/photos/Vy2cHqm0mCs?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>
                </div>
              </div>
          </main>
      </Def>
    )
  }
  

module.exports = error404

