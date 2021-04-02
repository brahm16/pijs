import React, { useRef, useState, useCallback } from 'react'
import ReactDOM from 'react-dom'
import { useSpring, animated } from 'react-spring'
import MainLanding from "./MainLanding";

import Promotion from "./Promotion";
import Places from "./Places";
import Header from "./Header";
import Footer from "./Footer";
import About from "./About";
import Products from "./Products";
import Search from "./Search";

function Affiche({ children, offset, pos, start, end }) {
  const [transform] = useState(() =>
  offset.interpolate({ range: [start, end], output: [100, 0], extrapolate: 'clamp' }).interpolate(s => `translate3d(${s}px,0,0)`),
)
const [opacity] = useState(() => offset.interpolate([start, end], [0, 1]))
return <animated.div style={{ position: 'absolute', left: 0, top: `${pos * 100}vh`, transform, opacity }}>{children}</animated.div>
}


function Landing() {
  
  
    const [{ scroll }, set] = useSpring(() => ({ scroll: 0 }))
   const onScroll = useCallback(e => void set({ scroll: e.target.scrollTop / (window.innerHeight / 2) }), [])

   
    return (
      <>
          <Header />
          <MainLanding  />
          <div  onScroll={onScroll}>
            <About />

          <Places />
          <Search />
          <Products />
          <Promotion />
          </div>

          <Footer />
          </>
    );
  
}

export default Landing;