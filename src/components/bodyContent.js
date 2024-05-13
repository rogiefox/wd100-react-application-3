import img1 from "./../img/1.jpg";
import img2 from "./../img/2.jpg";
import img3 from "./../img/3.jpg";
import img4 from "./../img/4.jpg";
import img5 from "./../img/5.jpg";
import img6 from "./../img/6.jpg";
import img7 from "./../img/7.jpg";
import img8 from "./../img/8.jpg";
import img9 from "./../img/9.jpg";

import GridCard from "./gridCard.js";

const Bodycontent = () => {
    return (
        <>
            <div className="container-fluid bg-dark">
                <div className="container">
                    <h1 className="text-warning text-center fw-bold">WELCOME TO</h1>
                    <h1 className="text-warning text-center fw-bold">KOREAN RESTAURANTS</h1>
                    <p className="text-start text-light">Our Korean restaurant is a sanctuary for those seeking an authentic and immersive culinary experience. Nestled in the heart of, our establishment invites guests to embark on a gastronomic journey through the vibrant flavors of Korea. As soon as you step through the doors, you're greeted by the inviting aroma of sizzling meats on the grill and the warm hospitality of our staff. Our menu is a celebration of Korean cuisine's rich tapestry, featuring classics like bulgogi, kimchi jjigae, and bibimbap, alongside innovative creations that showcase the versatility and creativity of our chefs. Each dish is crafted with care, using the finest ingredients and traditional cooking techniques to ensure an unforgettable dining experience. Whether you're sharing a barbecue feast with friends, cozying up to a steaming bowl of stew on a chilly evening, or indulging in a colorful spread of banchan, our Korean restaurant offers a taste of Korea's culinary heritage in every bite.</p><br /><br />
                    <h2 className="text-warning text-center">OUR MENU</h2>
                    <p className="text-center text-white">Our menu at the Korean restaurant is a culinary journey through the vibrant flavors of Korea, showcasing traditional favorites and innovative creations. Start your meal with an array of banchan, small side dishes like kimchi and pickled vegetables, before diving into classics like bulgogi, grilled to perfection and bursting with savory goodness. For a comforting option, indulge in our hearty stews like kimchi jjigae or seafood soondubu, each brimming with robust flavors and tender ingredients. Craving something crispy? Try our Korean fried chicken, boasting a crunchy exterior and succulent meat inside, available in a variety of mouthwatering sauces. And don't forget our selection of noodles and rice dishes, from the iconic bibimbap to the refreshing mul naengmyeon, each offering a unique blend of flavors and textures. Finish your meal with a sweet treat like our patbingsu, a shaved ice dessert topped with sweet red beans, fruit, and condensed milk. With something for every palate, our menu promises a delightful and unforgettable dining experience.</p><br />
                    <div className="row g-5">
                        <GridCard img={img1} title="Bulgogi" description="Bulgogi is a traditional Korean dish featuring thinly sliced beef marinated in a flavorful blend of soy sauce, sesame oil, garlic, and other seasonings. Grilled to perfection, it boasts a caramelized exterior and juicy tenderness, offering a delightful harmony of savory and sweet flavors in every bite."></GridCard>
                        <GridCard img={img2} title="Korean Soup" description="Korean soup dishes are known for their hearty broths and diverse ingredients, often including meats, vegetables, and noodles. From classics like kimchi jjigae to comforting favorites like doenjang jjigae, Korean soups offer a flavorful and comforting culinary experience."></GridCard>
                        <GridCard img={img3} title="Bibimbap" description="Bibimbap is a popular Korean dish consisting of mixed rice topped with an assortment of seasoned vegetables, meat (such as beef or tofu), a fried egg, and often spicy gochujang sauce. It offers a delightful combination of colors, flavors, and textures, creating a satisfying and vibrant meal."></GridCard>
                        <GridCard img={img4} title="Kimchi" description="Kimchi is a staple of Korean cuisine, consisting of fermented vegetables, most commonly napa cabbage and Korean radishes, seasoned with chili peppers, garlic, ginger, and other spices. It boasts a pungent and tangy flavor profile, with a satisfying crunch and a depth of umami that adds a unique dimension to any meal."></GridCard>
                        <GridCard img={img5} title="Samgyupsal" description="Samgyupsal is a popular Korean dish featuring thick slices of pork belly grilled at the table and typically served with lettuce leaves, garlic, and ssamjang dipping sauce. It offers a delightful combination of juicy meat, crispy edges, and customizable wraps, creating a delicious and interactive dining experience."></GridCard>
                        <GridCard img={img6} title="Korean BBQ" description="Korean BBQ involves grilling various meats, such as beef, pork, or chicken, at the table, often marinated in flavorful sauces. Diners enjoy the sizzle and aroma of the meat cooking right in front of them, creating a social and delicious dining experience."></GridCard>
                        <GridCard img={img7} title="Fried Chicken" description="Korean fried chicken is renowned for its crispy and crunchy exterior, achieved through double frying and a variety of flavorful coatings like sweet soy garlic or spicy gochujang. It offers a delightful contrast of textures, with juicy and tender meat inside, making it a popular and addictive dish in Korean cuisine."></GridCard>
                        <GridCard img={img8} title="Jajangmyeon" description="Jajangmyeon is a popular Korean-Chinese noodle dish featuring thick, chewy noodles smothered in a savory black bean sauce, typically made with pork, onions, and other vegetables. It offers a rich and satisfying flavor profile, with a hint of sweetness and a comforting, hearty texture, making it a beloved comfort food in Korean cuisine."></GridCard>
                        <GridCard img={img9} title="Mul Naengmyeon" description="Mul Naengmyeon is a refreshing Korean cold noodle dish served in a chilled, tangy broth made from beef or dongchimi (radish water kimchi). The noodles are typically topped with thinly sliced beef or pork, cucumber, Asian pear, and a boiled egg, offering a delightful balance of flavors and textures perfect for hot summer days."></GridCard>
                    </div>
                    <br /><br />
                </div>
            </div>
        </>
    );
}

export default Bodycontent;