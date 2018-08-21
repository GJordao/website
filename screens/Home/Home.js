// Aphrodite
import { css } from "aphrodite/no-important";
// Styles
import styles from "./Home.css";

const Home = () => {
    return (
        <div className={css(styles.container)}>
            <div className={css(styles.contentContainer)}>
                <div className={css(styles.description)}>
                    Hello my name is Gustavo Jordão I'm a software developer
                    from Portugal who works mainly with JavaScript technologies
                    like React, Node, Express and React Native but also other
                    interesting technologies and tools like GraphQl, Firebase,
                    and Docker. I'm a tech geek who likes to learn new things,
                    participate in hackathons and share with the community,
                    being it through talks or workshops. I'm currently living in
                    sunny Faro but am looking to go abroad somewhere in Europe
                    for new experiences and new challenges :).
                </div>
                <div className={css(styles.picContainer)}>
                    <img
                        className={css(styles.pic)}
                        src={"/static/c_gustavo.jpg"}
                    />
                </div>
                <div className={css(styles.linksContainer)}>
                    <a href={"https://www.linkedin.com/in/gjord%C3%A3o/"}>
                        <img
                            className={css(styles.link)}
                            src={"/static/ic_linkedin.svg"}
                        />
                    </a>
                    <a href={"mailto:jordao.f.gustavo@gmail.com"}>
                        <img
                            className={css(styles.link)}
                            src={"/static/ic_email.svg"}
                        />
                    </a>
                    <a
                        target={"_blank"}
                        href={
                            "https://firebasestorage.googleapis.com/v0/b/website-jordao.appspot.com/o/GustavoJordao_cv_EN.pdf?alt=media&token=cd8b3cc6-6328-4c4b-a6c2-092c074d1159"
                        }
                    >
                        <img
                            className={css(styles.link)}
                            src={"/static/ic_curriculum.svg"}
                        />
                    </a>
                    <a href={"https://github.com/gjordao"}>
                        <img
                            className={css(styles.link)}
                            src={"/static/ic_github.svg"}
                        />
                    </a>
                </div>
                <div className={css(styles.bonusContainer)}>
                    <img
                        alt={"This is my dog Pixel"}
                        className={css(styles.pixel)}
                        src={"/static/pixel.jpeg"}
                    />
                    <div className={css(styles.pixelDescription)}>
                        Bonus points for my (female) pupper Pixel!
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;
