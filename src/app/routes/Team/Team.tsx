import Avatar from 'avataaars';
import './Team.css';

const Team = () => {
    return (
        <>
            <div className='team-header'>
                <h2>Meet our<br/>awesome team!</h2>
            </div>

            <div className='team-container'>
                <div className='container-item'>
                    <Avatar
                        avatarStyle="Transparent"
                        topType="ShortHairShortCurly"
                        accessoriesType="Blank"
                        hairColor="BrownDark"
                        facialHairType="Blank"
                        clotheType="CollarSweater"
                        clotheColor="Black"
                        eyeType="Wink"
                        eyebrowType="Default"
                        mouthType="Default"
                        skinColor="Light"
                    />

                    <div className='team-name'>
                        <h4>Kacper</h4>
                    </div>

                    <div className='team-name-description'>
                        <h6>UX/UX Designer</h6>
                        <p>
                            He loves video editing. He works for popular creators on YouTube.
                        </p>
                    </div>
                </div>

                <div className='container-item'>
                    <Avatar
                        avatarStyle="Transparent"
                        topType="ShortHairShortFlat"
                        accessoriesType="Blank"
                        hairColor="BrownDark"
                        facialHairType="Blank"
                        clotheType="Hoodie"
                        clotheColor="Blue03"
                        eyeType="Default"
                        eyebrowType="Default"
                        mouthType="Twinkle"
                        skinColor="Light"
                    />

                    <div className='team-name'>
                        <h4>Jakub</h4>
                    </div>

                    <div className='team-name-description'>
                        <h6>Frontend</h6>
                        <p>Jakub loves old cars! Actually he is proud owner of MX-5.</p>
                    </div>
                </div>

                <div className='container-item'>
                    <Avatar
                        avatarStyle="Transparent"
                        topType="LongHairBun"
                        accessoriesType="Blank"
                        hairColor="BrownDark"
                        facialHairType="BeardLight"
                        facialHairColor="Brown"
                        clotheType="BlazerSweater"
                        eyeType="Default"
                        eyebrowType="DefaultNatural"
                        mouthType="Default"
                        skinColor="Light"
                    />

                    <div className='team-name'>
                        <h4>Piotr</h4>
                    </div>

                    <div className='team-name-description'>
                        <h6>Backend</h6>
                        <p>Piotr in his free time he is a connoisseur of alcohol.</p>
                    </div>
                </div>

                <div className='container-item'>
                    <Avatar
                        avatarStyle="Transparent"
                        topType="ShortHairShortFlat"
                        accessoriesType="Blank"
                        hairColor="BrownDark"
                        facialHairType="Blank"
                        clotheType="Overall"
                        clotheColor="PastelBlue"
                        eyeType="Default"
                        eyebrowType="DefaultNatural"
                        mouthType="Default"
                        skinColor="Light"
                    />

                    <div className='team-name'>
                        <h4>Gabriel</h4>
                    </div>

                    <div className='team-name-description'>
                        <h6>Backend</h6>
                        <p>Gabriel’s hobby is planting pumpkins.</p>
                    </div>
                </div>

                <div className='container-item'>
                    <Avatar
                        avatarStyle="Transparent"
                        topType="ShortHairShortRound"
                        accessoriesType="Blank"
                        hairColor="BrownDark"
                        facialHairType="Blank"
                        clotheType="Hoodie"
                        clotheColor="Black"
                        eyeType="Default"
                        eyebrowType="Default"
                        mouthType="Eating"
                        skinColor="Brown"
                    />

                    <div className='team-name'>
                        <h4>Artur</h4>
                    </div>

                    <div className='team-name-description'>
                        <h6>Pizza eater</h6>
                        <p>Artur likes to slack off.</p>
                    </div>
                </div>

                <div className='team-welcome'>
                    <h2>YOU’RE WELCOME IN OUR TEAM!</h2>
                    <p>
                        Check if we are currently looking for people <br/> for the position you are
                        interested in!
                    </p>

                    <a href="careers.html">
                        <button className='team-button'>CAREERS</button>
                    </a>
                </div>

            </div>
        </>
    )
}

export default Team;