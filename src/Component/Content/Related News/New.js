import React from 'react'
import './relatednews.css'
export default function New() {
    return (
        <div className="col l-4 m-4 c-12 new-item">
            <div className="new-image">
                <a href="/"> <img src="./assets/picture/slide2.jpg" alt="" /></a>
            </div>
            <a href="/" className="new-title">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quidem molestias enim quod similique, exercitationem corrupti, asperiores suscipit laudantium esse autem vel quo maiores iusto. Quae laborum eius debitis deleniti doloremque.
                </a>
            <a href="/" className="new-content">
               Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum possimus dicta pariatur tenetur debitis quod sunt voluptate corrupti praesentium quo. Officia sint provident illum laborum cum atque itaque placeat? Hic?			            </a>
        </div>
    )
}
