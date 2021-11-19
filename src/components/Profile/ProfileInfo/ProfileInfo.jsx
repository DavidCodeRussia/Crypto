import s from './ProfileInfo.module.css';

const ProfileInfo = (props) => {

    let descrription = [
        {id: 1, question: 'Name: David'},
        {id: 2, question: 'Surname: Arakelyan'},
        {id: 3, question: 'Owner: Bitcoin, ETH, Dogecoin ...'},
        {id: 4, question: 'Balance: 23647326723 $'},
        {id: 5, question: 'City: Saratov, Russia'},
        {id: 6, question: 'Years Old: 17'},
        {id: 7, question: 'Gender: Walmart Backpack 132P'}
    ]

    let descriptionOn = descrription.map( d => <div className={s.descriptionItem}>{d.question}</div> )

    return (
        <div className={s.profile}>
            <div className={s.avatar}>
                <img src="https://www.pngitem.com/pimgs/m/78-786293_1240-x-1240-0-avatar-profile-icon-png.png"/>
            </div>
            <div className={s.description}>
                {descriptionOn}
            </div>
        </div>
    )
}

export default ProfileInfo;