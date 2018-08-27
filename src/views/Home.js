import React, { Component } from 'react';
import '../App.css';
import TopSpan from "../Components/TopSpan"

class Home extends Component {
  render() {
    return (
      <div className="App">
        <div className="alpha-1"> <div className="beta-1">
          <div className="content">
            <h2>Do you feel like? . . .</h2>
            <p>God can’t use you because you’ve been through divorce? All your hopes and dreams
were shattered when the judge stamped that certificate? It’s easier for people in the
church to point the finger of judgment rather than help heal your wounds? Others view
you as leprous because you are divorced?</p>
          </div>
        </div></div>
        <div className="alpha-1"> <div className="beta-1">
          <div className="content">
          <h2>My mission</h2>
          <p>Just like you or someone you love, I’ve been through a divorce. I’ve walked this road with the same
devastating fear, shame, loss and depression. And, just like you, I encountered judgment disguised as well-
intentioned “correction or advice” from some in the church and Evangelical community. This only compounded
all the above.
I learned a lot while trying to pick up the shards of shattered dreams and I want to encourage you that you are
not alone. Your dreams matter to the Lord! He isn’t done with you just because you have been through divorce.
Your call and blessings are assured. He is waiting for you to reach out and take them.</p>
          </div>
        </div></div>
        <div className="alpha-1"> <div className="beta-1">
          <div className="content">
            <h2>Who is Dana?</h2>
            <p>Glad you asked! I am a 50-something (sounds younger than giving my exact age)
divorcee with two grown children. I’ve been active in ministry for most of my adult life
ranging from nursery worker, youth co-pastor, teacher/speaker and pastor’s wife. I’m a
mom, writer, worship singer and mighty woman of God rolled into a 5’4” force of nature.
If you don’t believe me, just ask my adult kids.</p>
          </div>
        </div></div>
        {/* alpha-1 == width: 100% | beta-1 == width: 80%ish; margin: 0 auto; | webContent == style as needed   */}
      </div>
    );
  }
}

export default Home;
