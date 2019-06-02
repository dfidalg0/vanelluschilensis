import Document, { Head, Main, NextScript } from 'next/document'

export default class MyDocument extends Document {

  render () {

    return (

      <html>

        <Head>

        </Head>

        <body>

          <Main />

          <NextScript />

          <script src={'http://localhost/jquery-3.1.1.min.js'} async/>

        </body>

      </html>

    )

  }

}
