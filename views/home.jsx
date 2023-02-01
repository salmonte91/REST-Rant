const React = require('react')
const Def = require('./default')

function home() {
    return(
        <Def>
            <main>
                <h1>HOME</h1>
                <div>
                    <img src="/images/pizza-image.jpg" alt="Pizza Pie" width = "750" height = "750" />
                    <div>
                    Photo by <a href="https://unsplash.com/ja/@saahilkhatkhate?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Saahil Khatkhate</a> on <a href="https://unsplash.com/images/food/pizza?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>
                    </div>
                </div>
                <a href="/places">
                    <button className='btnPrimary'>Places Page</button>
                </a>
            </main>
        </Def>
    )
}

module.exports = home