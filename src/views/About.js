import React, { Component } from 'react';
import '../App.css';

export default class About extends Component {
    render() {
        return (
            <div>
                <h2>About Dana</h2>
                <div className="topLevelparent">
                    <div className="centered-main">
                    
                    <p className="aboutMeVerbage1 aboutMeVerbage">
                        <img className="danaImage" src={require('../Images/danaPic.jpg')}/>
                    When I was seven my mom did something profoundly wrong. In hind sight she probably told me to
                    clean my room, but it propelled me into my calling. “That’s IT!” I yelled at my Chatty Kathy doll. “I’m
                    going to write a book!” I promptly sat down at my plastic typewriter and typed out the best-selling
                    book title, “Kids Have Rights Too.”</p>
                    <p className="aboutMeVerbage">That was all. Just the title. And I was pretty proud of that. But that 7-year-old’s declaration  served as a prophetic call to my inner soul.</p>
                    <p className="aboutMeVerbage">Though I got no further than the title, the dream of writing something profound and world-changing never left me. After surviving childhood sexual abuse and a dysfunctional marriage, and while in the midst of a soul-ripping divorce, I turned to the only thing that I thought could heal my wounds besides Jesus - the church. I was met with many well-intentioned, but often judgmental finger-pointing “scriptural advice”, whispers, and a few cold shoulders. You see, I was the dutiful minister’s wife who never spoke about trials in my own marriage. I made sure all the mess was covered with a smile and a scripture or two because ministry leadership is supposed to have the answers…not the problems.</p>
                    <p className="aboutMeVerbage">What people didn’t know - I was imploding from the weight of carrying pain. I was warned not to discuss our marriage troubles outside the family because it could harm our ministry. It wasn’t until frightening stroke-like symptoms manifested that I woke up and said enough.</p>
                    <p className="aboutMeVerbage">While navigating the road to recovery, I noticed the plethora of Christian books on divorce; yet:
                     There was little on how to heal from divorce AND the judgment from your church peers or lay church counselors.
                     Very little to help me rebuild my identity as His “divorced” daughter.
                     No proclamations that I was still useful to Him.
                     And…no one told me I still had a destiny in the Kingdom of God or that my call still matteredto the Lord.</p>
                    <p className="aboutMeVerbage">You see, I’ve been broken just like you; but I refuse to stay broken. I refuse to stay in the confines of the typical mainstream church anti-divorce box presented in book stores and the internet.</p>
                    <p className="aboutMeVerbage">So, I chose to press my face like flint toward the sandstorm of divorce and find the Cross and my identity as His daughter in spite of what is represented in the Christian community. It’s cheaper than microdermabrasion and so much more powerful!</p>
                    <p className="aboutMeVerbage">Please hear me. I’m not pointing the finger at one denomination, evangelical church or Christians. I’m just one in a sea of millions who felt the dizzying whiplash and judgment because I was too broken to stay in a broken marriage.</p>
                    <p className="aboutMeVerbage">If that is you too, you are not alone. I want to partner with you and show you that you are more than a divorce certificate. Your call and destiny are still waiting for you to step up, reach out and seize it!</p>
                    <p className="aboutMeVerbage"></p>
                    </div>
                </div>
            </div>
        );
    }
}