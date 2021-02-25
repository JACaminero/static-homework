import Head from 'next/head'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      
      <div className="photo">
        <div className="card-desc">
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQkBBgYEuP70dZpP3xdw8vSBZrqA7vTg2WNYA&usqp=CAU"/>
          <h2>Bio</h2>
          <hr />
          <p>
            *Narrado con voz muy muy MUY rasposa* My name is Batman, and first of all, let's get this out of the way,
            Im definitely <strong>NOT</strong> Bruce Wayne. So if yall could be so kind to make a small donation of at least 500 
            dollars each to support our crime fighting efforts..... that be hella cool.
          </p>
        </div>
      </div>      
      
      <main>
        <div className="card">
          <h2 className="title">
            Hello There, Im <a href="https://www.dccomics.com/characters/batman">Batman</a>
          </h2>
        </div>
        <div className="grid">
          <div className="ability">
            <h2>Habilidades</h2>
            <hr />
            <ul className="description">
              <li>Ser Batman</li>
              <li>No ser Bruce Wayne</li>
              <li>POW</li>
              <li>WAPOW</li>
            </ul>
          </div>
            <div className="hobby">
            <h2>Hobby</h2>
            <hr />
            <ul className="description">
              <li>Combatir el crimen</li>
              <li>Conducir el Batimovil</li>
              <li>Ser Batman</li>
            </ul>
          </div>  
        </div>
      </main>

      
      <style jsx>{`
        .photo{
          background-image: url(https://dam.smashmexico.com.mx/wp-content/uploads/2017/09/05155736/dc-batman-the-animated-series-a-25-anos-de-su-estreno-cover.jpg);
          width:100%;
          height: 360px;
          background-position: 50% 10%;
        }

        .ability{
          padding: 1rem;
          border: 1px solid #eaeaea;
          border-radius: 10px;
          margin-right: 5rem;
        }
          
        .hobby{
          padding: 1rem;
          border: 1px solid #eaeaea;
          border-radius: 10px;
        }
        
        .face-photo{
          background-image: url(https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQkBBgYEuP70dZpP3xdw8vSBZrqA7vTg2WNYA&usqp=CAU);
          width: 20%;
          height: 220px;
          border-radius: 100%;
          margin-top: 15%;
          margin-left: 3%;
        }

        .photo .card-desc{
          width:25%;
        }

        .card-desc img{
          border-radius: 50%;
          margin-left: 10%; 
        }
        
        li{
          list-style-type: "- ";
        }

        .container {
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }

        main {
          // padding: 5rem 0;
          flex: 1;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }

        a {
          color: inherit;
          text-decoration: none;
        }

        .title a {
          color: #0070f3;
          text-decoration: none;
        }

        .title a:hover,
        .title a:focus,
        .title a:active {
          text-decoration: underline;
        }

        .title {
          margin: 0;
          line-height: 1.15;
          font-size: 4rem;
        }

        .title {
          text-align: center;
        }

        .description {
          line-height: 1.5;
          font-size: 1.5rem;
        }

        code {
          background: #fafafa;
          border-radius: 5px;
          padding: 0.75rem;
          font-size: 1.1rem;
          font-family: Menlo, Monaco, Lucida Console, Liberation Mono,
            DejaVu Sans Mono, Bitstream Vera Sans Mono, Courier New, monospace;
        }

        .grid {
          display: flex;
          align-items: center;
          justify-content: center;
          flex-wrap: wrap;
          max-width: 800px;
          margin-left: 32%;
        }

        .card-desc{
          margin: 2rem;
          margin-top: 12rem;
          flex-basis: 45%;
          padding: 1.5rem;
          text-align: left;
          color: inherit;
          text-decoration: none;
          transition: color 0.15s ease, border-color 0.15s ease;  
        }

        .card {
          margin: 2rem;
          margin-left: 25rem;
          flex-basis: 45%;
          padding: 1.5rem;
          text-align: left;
          color: inherit;
          text-decoration: none;
          border: 1px solid #eaeaea;
          border-radius: 10px;
          transition: color 0.15s ease, border-color 0.15s ease;
        }

        .card h3 {
          margin: 0 0 1rem 0;
          font-size: 1.5rem;
        }

        .card p {
          margin: 0;
          font-size: 1.25rem;
          line-height: 1.5;
        }

        .logo {
          height: 1em;
        }

        @media (max-width: 600px) {
          .grid {
            width: 100%;
            flex-direction: column;
          }
        }
      `}</style>

      <style jsx global>{`
        html,
        body {
          padding: 0;
          margin: 0;
          font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
            Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
            sans-serif;
          background-color: rgb(13,13,13);
          color: white;
        }

        * {
          box-sizing: border-box;
        }
      `}</style>
    </div>
  )
}
