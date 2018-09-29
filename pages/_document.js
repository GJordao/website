import Document, { Head, Main, NextScript } from "next/document";
import { StyleSheetServer } from "aphrodite/no-important";

export default class MyDocument extends Document {
    static async getInitialProps({ renderPage }) {
        const { css } = StyleSheetServer.renderStatic(() => renderPage());
        const page = renderPage();
        return { ...page, css };
    }

    render() {
        return (
            <html lang="en">
                <Head>
                    <meta
                        name="viewport"
                        content="width=device-width, initial-scale=1, viewport-fit=cover"
                    />
                    <title>Gustavo Jordão</title>
                    <link
                        href="https://fonts.googleapis.com/css?family=Roboto+Slab"
                        rel="stylesheet"
                    />
                    <style
                        dangerouslySetInnerHTML={{
                            __html: this.props.css.content
                        }}
                    />
                    <style>{`
                        html {
                            box-sizing: border-box;
                            font-family: Roboto Slab;
                        }
                        *, *:before, *:after {
                            -webkit-font-smoothing: antialiased; 
                            -moz-osx-font-smoothing: grayscale;
                            box-sizing: inherit;
                        }
                        body { margin: 0; background-color: rgb(30,30,30); }
                    `}</style>
                    <meta
                        name="description"
                        content="I am a fullstack developer, tech geek and lover of beer"
                    />
                    <meta property="og:title" content="Gustavo Jordão" />
                    <meta property="og:type" content="website" />
                    <meta
                        property="og:description"
                        content="Fullstack developer, tech geek and lover of beer"
                    />
                    <meta property="og:url" content="https://jordao.xyz" />
                    <meta
                        property="og:image"
                        content="https://jordao.xyz/static/c_gustavo.jpg"
                    />
                </Head>
                <body>
                    <Main />
                    <NextScript />
                </body>
            </html>
        );
    }
}
