import React from "react";
import { Link, animateScroll as scroll } from "react-scroll";

import flustered from "./photos/Flustered.jpg"
import landscape from "./photos/Landscape.jpg"
import orangeShirt from "./photos/OrangeShirt.jpg"
import bedtime from "./photos/Bedtime.jpg"

import eepySmile from "./photos/EepySmile.jpg"
import eepyTime from "./photos/EppyTime.jpg"
import angel from "./photos/Angel.jpg"
import cuddle from "./photos/Cuddle.jpg"
import yellowShirt from "./photos/YellowShirt.jpg"

import happy from "./photos/Happy.png"
import headKiss from "./photos/HeadKiss.jpg"
import heart from"./photos/Heart.jpg"
import pretty from "./photos/Pretty.jpg"
import smile from "./photos/Smile.jpg"

import abbyFace from "./photos/AbbyFace.jpg"
import awkward from "./photos/Awkward.jpg"
import banana from "./photos/Banana.jpg"
import frunk from "./photos/Frunk.jpg"
import gamer from "./photos/Gamer.jpg"
import shart from "./photos/Shart.jpg"
import sneakySneak from "./photos/SneakySneak.jpg"
import stampeders from "./photos/Stampeders.jpg"

function App() {
  return (
    <>
      <div className="py-8 flex items-center justify-center" id="start">
        <h1 className="font-bold text-6xl">Hi Ella!</h1>
      </div>
      <div className="lg:mx-32 text-center">
        <h2 className="mx-4 text-2xl flex items-center justify-center">
          I wanted to give you a website dedicated to how much I love you. That is what this is. I hope you love it as much as I love you!
        </h2>
        <p className="mx-4 mt-8 flex items-center justify-center">
          Here I have all the pictures of us together as well as stories of our time together. I wanted this site to be a one stop where you can see our whole story together. So let's get started!
        </p>
      </div>
      <div className="my-8">
        <h2 className="flex items-center justify-center text-2xl font-bold" id="gettingStarted">
          Getting Started
        </h2>
        <p className="pt-2 text-center mx-4">
          Just to give a brief overview of how the website works, it is split into sections that tell you different reasons of why I love you! There will be some of my favourite pictures spread around the website for you to enjoy. I hope you like this simple website!
        </p>
      </div>
      <div className="">
        <h2 className="flex items-center justify-center text-2xl font-bold">
          Table of Contents
        </h2>
        <ul className="pt-4 text-lg">
          <li className="flex justify-center font-semibold hover:underline">
            <Link to="start" smooth={true} duration={300}>Start</Link>
          </li>
          <li className="flex justify-center font-semibold hover:underline">
            <Link to="gettingStarted" smooth={true} duration={300}>Getting Started</Link>
          </li>
          <li className="flex justify-center font-semibold hover:underline">
            <Link to="theStart" smooth={true} duration={300}>The Start</Link>
          </li>
          <li className="flex justify-center font-semibold hover:underline">
            <Link to="theReturn" smooth={true} duration={300}>The Return</Link>
          </li>
          <li className="flex justify-center font-semibold hover:underline">
            <Link to="newBeginning" smooth={true} duration={300}>A New Beginning</Link>
          </li>
          <li className="flex justify-center font-semibold hover:underline">
            <Link to="sillyPictures" smooth={true} duration={300}>Silly Pictures</Link>
          </li>
          <li className="flex justify-center font-semibold hover:underline">
            <Link to="toBeContinued" smooth={true} duration={300}>To Be Continued</Link>
          </li>
        </ul>
      </div>
      <div className="my-8" id="theStart">
        <h2 className="flex items-center justify-center font-bold text-2xl">
          The Start
        </h2>
        <p className="pt-4 mx-4 text-center flex items-center justify-center">
          With a rough start to our relationship I still look at it with so much joy. I've put some pictures here to commemorate this time.
        </p>
        <div className="pt-5 flex items-center justify-center">
          <img src={flustered} alt="flustered" className="w-72" />
        </div>
        <div className="pt-5 flex items-center justify-center">
          <img src={landscape} alt="Landscape" className="w-72" />
        </div>
        <div className="pt-5 flex items-center justify-center">
          <img src={orangeShirt} alt="Orange Shirt" className="w-72" />
        </div>
        <div className="pt-5 flex items-center justify-center">
          <img src={bedtime} alt="betime" className="w-72" />
        </div>
        <p className="pt-5 mx-4 text-center flex items-center justify-center">
          These are some of my favourite photos from that time. I just love your smile in all of these, it's very cute. I hope to make you smile like that more in the future.
        </p>
      </div>
      <div id="theReturn">
        <h2 className="flex items-center justify-center font-bold text-2xl">
          The Return
        </h2>
        <p className="pt-4 mx-4 text-center flex items-center justify-center">
          This section is for that time we came back together in the spring/summer. I remember being happy around that time since Tears of the Kingdom came out. Kidding, it was just so nice to have you back even just as a friend that I could rely on. To this day I feel as I can still rely on you everyday! I love you very much!
        </p>
        <div className="pt-5 flex items-center justify-center">
          <img src={eepySmile} alt="eepySmile" className="w-72" />
        </div>
        <div className="pt-5 flex items-center justify-center">
          <img src={eepyTime} alt="eepyTime" className="w-72" />
        </div>
        <div className="pt-5 flex items-center justify-center">
          <img src={angel} alt="angel" className="w-72" />
        </div>
        <div className="pt-5 flex items-center justify-center">
          <img src={cuddle} alt="cuddle" className="w-72" />
        </div>
        <div className="pt-5 flex items-center justify-center">
          <img src={yellowShirt} alt="yellowShirt" className="w-72" />
        </div>
        <p className="pt-5 mx-4 text-center flex items-center justify-center">
          You're just so pretty that I had to add these photos to this section. I so happy to be with someone as pretty as you!
        </p>
      </div>
      <div className="py-8" id="newBeginning">
        <h2 className="flex items-center justify-center font-bold text-2xl">
          A New Beginning
        </h2>
        <p className="pt-4 mx-4 text-center flex items-center justify-center">
          This section is all about our time together as an offical couple. There is not much to say here. I just love you and I can't wait to see what the future has in store for us. Here is last bit of cute photos we have together!
        </p>
        <div className="pt-5 flex items-center justify-center">
          <img src={happy} alt="happy" className="w-72" />
        </div>
        <div className="pt-5 flex items-center justify-center">
          <img src={headKiss} alt="headKiss" className="w-72" />
        </div>
        <div className="pt-5 flex items-center justify-center">
          <img src={heart} alt="heart" className="w-72" />
        </div>
        <div className="pt-5 flex items-center justify-center">
          <img src={pretty} alt="pretty" className="w-72" />
        </div>
        <div className="pt-5 flex items-center justify-center">
          <img src={smile} alt="smile" className="w-72" />
        </div>
      </div>
      <div id="sillyPictures">
        <h2 className="flex items-center justify-center font-bold text-2xl">
          Silly Pictures
        </h2>
        <p className="pt-4 mx-4 text-center flex items-center justify-center">
          This section is solely dedicated to all the silly picture I have of us. I love these just as much as I love the nice ones and I hope to take so much more in the future.
        </p>
        <div className="pt-5 flex items-center justify-center">
          <img src={abbyFace} alt="abbyFace" className="w-72" />
        </div>
        <div className="pt-5 flex items-center justify-center">
          <img src={awkward} alt="awkward" className="w-72" />
        </div>
        <div className="pt-5 flex items-center justify-center">
          <img src={banana} alt="banana" className="w-72" />
        </div>
        <div className="pt-5 flex items-center justify-center">
          <img src={frunk} alt="frunk" className="w-72" />
        </div>
        <div className="pt-5 flex items-center justify-center">
          <img src={gamer} alt="gamer" className="w-72" />
        </div>
        <div className="pt-5 flex items-center justify-center">
          <img src={shart} alt="shart" className="w-72" />
        </div>
        <div className="pt-5 flex items-center justify-center">
          <img src={sneakySneak} alt="sneakySneak" className="w-72" />
        </div>
        <div className="pt-5 flex items-center justify-center">
          <img src={stampeders} alt="stampeders" className="w-72" />
        </div>
      </div>
      <div className="py-8" id="toBeContinued">
          <h2 className="flex items-center justify-center font-bold text-2xl">
            To Be Contined
          </h2>
          <p className="pt-4 mx-4 text-center flex items-center justify-center">
            I hope you enjoyed looking through this site as I did making it! I love you very much and I can't wait to update it with more pictures and reasons I love you as our relationship continues.
          </p>
        </div>
    </>
  );
}

export default App;
