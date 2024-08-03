import React from "react";
import "../styles/About.css";
import MultiplePizzas from "../assets/multiplePizzas.jpeg";

function About() {
  return (
    <div className="about">
      <div
        className="aboutTop"
        style={{ backgroundImage: `url(${MultiplePizzas})` }}
      ></div>
      <div className="aboutBottom">
        <h1>About Us</h1>
        <p>
          Welcome to SliceHeaven! At SliceHeaven, we believe that pizza is more
          than just food; it's an experience, a moment to be shared with loved
          ones, and a slice of joy in every bite. Founded with a passion for
          crafting the perfect pizza, SliceHeaven has quickly become the go-to
          destination for pizza enthusiasts who crave quality, flavor, and
          creativity. Our Story SliceHeaven was born out of a simple idea: to
          create pizzas that not only taste incredible but also bring people
          together. Our journey began in a cozy kitchen where traditional
          recipes met innovative techniques, resulting in pizzas that are both
          classic and unique. Today, we continue to honor our roots while
          embracing new culinary adventures, always striving to deliver the best
          pizza experience to our customers. Our Pizzas Every pizza at
          SliceHeaven is a masterpiece, crafted with love and the finest
          ingredients. From our hand-tossed dough made fresh daily to our
          signature sauces and premium toppings, we ensure that every slice is a
          taste of heaven. Whether you prefer a timeless Margherita, a bold BBQ
          Chicken, or a custom creation of your own, we have something to
          satisfy every pizza lover's palate. Our Commitment Quality and
          customer satisfaction are at the heart of everything we do. We source
          our ingredients from trusted local suppliers, ensuring freshness and
          sustainability. Our dedicated team works tirelessly to maintain high
          standards of hygiene and service, so you can enjoy your pizza
          worry-free. At SliceHeaven, we are committed to providing a delightful
          dining experience, whether you’re dining in, taking out, or getting
          delivery.
        </p>
      </div>
    </div>
  );
}

export default About;
