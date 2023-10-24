import React from 'react'
import './Home.css'
function Home() {
    return (
        <div className='Part'>
            <div className='Left'>
<div className='fc'>
    <img src="/images/initials - fc.svg" alt="" />
    <h3>FSL Creativity</h3>
    <select name='dropdown' id='dro'>
        <option value=""></option>
        <option value=""></option>

      </select>
</div>


            <div className='canva'>
             <img src="/images/crown - golden.svg" alt=""/>
             <h3>Get Canva Pro</h3>
             </div>
            </div>
            <div className='Right'>
                <div className='heading'>
                    <button>Custom Size</button>
                    <button>Upload</button>
                </div>
                <div className="search-1">
                    <h1>Meet Muagic Stdio</h1>
                    <div className='input'>
                        <img src="/images/zoom.svg" alt="" />
                        <input type="text" placeholder='Use 5+ words to describe' />
                    </div>
                </div>

                <div className='logo'>
                    <div className='icon'>
                        <img src="/images/for you hover.svg" alt="" />
                        <h5>for you</h5>
                    </div>
                    <div className='icon'>
                        <img src="/images/docs.svg" alt="" />
                        <h5>docs</h5>
                    </div>
                    <div className='icon'>
                        <img src="/images/whiteboards.svg" alt="" />
                        <h5>whiteboards</h5>
                    </div>
                    <div className='icon'>
                        <img src="/images/presentations.svg" alt="" />
                        <h5>presentations</h5>
                    </div>
                    <div className='icon'>
                        <img src="/images/social media.svg" alt="" />
                        <h5>social media</h5>
                    </div>
                    <div className='icon'>
                        <img src="/images/videos.svg" alt="" />
                        <h5>videos</h5>
                    </div>
                    <div className='icon'>
                        <img src="/images/print products.svg" alt="" />
                        <h5>print products</h5>
                    </div>

                    <div className='icon'>
                        <img src="/images/websites.svg" alt="" />
                        <h5>Websites</h5>
                    </div>
                    <div className='icon-1'>
                        <img src="/images/more hover.svg" alt="" />
                        <h5>more</h5>
                    </div>

                </div>
            </div>

        </div>
    )
}

export default Home