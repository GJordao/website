// Aphrodite
import { StyleSheet } from "aphrodite/no-important";

const styles = StyleSheet.create({
    bonusContainer: {
        marginBottom: 60,
        marginTop: 60,
        textAlign: "center"
    },
    container: {
        alignItems: "center",
        background: "url(static/background.jpg)",
        backgroundAttachment: "fixed",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        display: "flex",
        flexDirection: "column"
    },
    contentContainer: {
        alignItems: "center",
        display: "flex",
        flex: 1,
        flexDirection: "column",
        marginTop: "15%",
        minHeight: "100vh",
        maxWidth: 1366,
        "@media (max-width: 550px) ": {
            marginTop: "10%",
            padding: 15
        }
    },
    description: {
        color: "#ffffff",
        fontSize: 24,
        lineHeight: 1.71,
        textAlign: "center",
        "@media (max-width: 550px) ": {
            fontSize: 16
        }
    },
    link: {
        height: 25,
        marginLeft: 10,
        marginRight: 10,
        width: 25
    },
    linksContainer: {
        alignItems: "center",
        borderTop: "solid 1px #f7f7f7",
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        height: 60,
        marginTop: 60,
        width: "90%"
    },
    pic: {
        height: "auto",
        width: 200
    },
    picContainer: {
        borderRadius: 100,
        height: 200,
        marginTop: 60,
        overflow: "hidden",
        width: 200
    },
    pixel: {
        borderRadius: 60,
        height: "auto",
        width: 350,
        "@media (max-width: 550px) ": {
            width: 250
        }
    },
    pixelDescription: {
        color: "#fff",
        fontSize: 14,
        fontStyle: "italic",
        "@media (max-width: 550px) ": {
            fontSize: 12
        }
    }
});

export default styles;
