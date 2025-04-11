import "./index.css"

const colors = [
    "red",
    "blue",
    "green",
    "yellow",
    "purple",
    "orange",
    "pink",
    "brown",
    "gray",
]


export function Album() {
    return (
        <div className="album">
            <style>
                {` {/* Add some style here */} @scope { h2 { color: ${colors[Math.floor(Math.random() * colors.length)]}; } }`}
            </style>
            <img className="image" src={`https://picsum.photos/300/200?v=${Math.random() * 100}`} alt=""/>
            <a href="#">Ich bin ein Link</a>
            <div className="album__details">
                <h2 className="album__title">Album Title</h2>
                <p className="album__artist">Artist Name</p>
                <p className="album__desc">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum sed sint
                    doloremque
                    repellat, iste debitis.</p>
                <a href="#">Click Me</a>
                <img className="album__image" src={`https://picsum.photos/200/200?v=${Math.random() * 100}`} alt=""/>
            </div>
            <footer>
                <h2>Footer</h2>
                <p> Lorem ipsum dolor.
                </p>
            </footer>
        </div>
    )
}