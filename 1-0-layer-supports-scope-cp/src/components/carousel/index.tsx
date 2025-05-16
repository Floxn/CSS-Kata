import "./index.css"
function Carousel() {
    return (
        <ul className="carousel">
            <li><img className="image" src={`https://picsum.photos/300/200?v=${Math.random() * 100}`} alt=""/></li>
            <li><img className="image" src={`https://picsum.photos/300/200?v=${Math.random() * 100}`} alt=""/></li>
            <li><img className="image" src={`https://picsum.photos/300/200?v=${Math.random() * 100}`} alt=""/></li>
            <li><img className="image" src={`https://picsum.photos/300/200?v=${Math.random() * 100}`} alt=""/></li>
            <li><img className="image" src={`https://picsum.photos/300/200?v=${Math.random() * 100}`} alt=""/></li>
            <li><img className="image" src={`https://picsum.photos/300/200?v=${Math.random() * 100}`} alt=""/></li>
            <li><img className="image" src={`https://picsum.photos/300/200?v=${Math.random() * 100}`} alt=""/></li>
            <li><img className="image" src={`https://picsum.photos/300/200?v=${Math.random() * 100}`} alt=""/></li>
            <li><img className="image" src={`https://picsum.photos/300/200?v=${Math.random() * 100}`} alt=""/></li>
            <li><img className="image" src={`https://picsum.photos/300/200?v=${Math.random() * 100}`} alt=""/></li>
            <li><img className="image" src={`https://picsum.photos/300/200?v=${Math.random() * 100}`} alt=""/></li>
            <li><img className="image" src={`https://picsum.photos/300/200?v=${Math.random() * 100}`} alt=""/></li>
            <li><img className="image" src={`https://picsum.photos/300/200?v=${Math.random() * 100}`} alt=""/></li>
        </ul>
    )
}

export default Carousel