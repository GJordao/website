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
            <html>
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
                </Head>
                <body>
                    <Main />
                    <NextScript />
                </body>
            </html>
        );
    }
}
