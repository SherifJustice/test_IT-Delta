import banner from "../../img/1.png"
import avatar from "../../img/Avatar profile.png"
import phone from "../../img/Phone.svg"
import mail from "../../img/Mail.svg"
export const Header = () => {


    return (
    <header className="header">
        <section className="content">
            <img src={banner} alt="banner" className="content__banner" />
            <img src={avatar} alt="avatar" className="content__avatar" />
            <div className="content__elem">
            <h1 className="content__name">RIcharrd</h1>
            <div className="btn">
            <button className="btn__img"><img src={mail} alt="mail" />Message</button>
            <button className="btn__img"><img src={phone} alt="phone" />Call</button>
            </div>
            </div>
        </section>
    </header>
    )
}
