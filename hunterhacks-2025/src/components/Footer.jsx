import './Footer.css';
import discord from '../assets/discord.png'
import insta from '../assets/instaicon.png'


function Footer(){
    return(
        <>
            {/* <img src={ContactPanel} alt='Got more questions? 
            Email us at cunyhunterhacks@gmail.com or DM on Instagram!' ></img> */}

            <div className='questions'>
                <div className='img-holder'>
                    <a href="https://discord.gg/DwY36uXC8E">
                    <img src={discord} style={{ width: "75px", height: "75px", objectFit: "contain" }} />
                    </a>
                    <a href="https://www.instagram.com/cunyhunterhacks/">
                    <img src={insta} style={{ width: "100px", height: "100px", objectFit: "contain" }} />
                    </a>
                </div>
                <p className='q-text'>
                    Got more questions? Email us at <a href="mailto:cunyhunterhacks@gmail.com">cunyhunterhacks@gmail.com</a>, in our Discord server, or DM on Instagram!
                </p>
            </div>


            <div className='footer'>
                <h2 className='footer-header'>
                Copyright HunterHacks@ 2025
                </h2>
                <p className='footer-text'>
                    Made with Love from the GWC Team:<br />
                    Developer and Lead Designer: @Kelly Lin<br />
                    Lead Developer: @Kyle Bautista<br />
                    Developer: @Ynalois Pangilinan<br />
                    <br />
                    And Additional Help From:<br />
                    @Maggie Ma @Tahya Mumtahi @Fariha Kha
                </p>
            </div>
        </>
    )
} export default Footer