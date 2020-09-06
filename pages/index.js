import Layout from '../components/layout';
import fetch from 'isomorphic-unfetch';

const Index = ({musicData}) => {
    console.log(musicData)
    return (
        <Layout>
        <div>
            <h1> Bienvenido a mi app</h1>
            <h3>Lista de canciones</h3>
            {musicData.map((item, i) => {
                return (
                <li key={i}>{item.title}</li>
                )
            })}
        </div>
        </Layout>
    );
}

Index.getInitialProps = async function() {
    const response = await fetch(`http://www.what-song.com/api/recent-movies`);
    const result = await response.json();
    return { musicData: result.data }
}

export default Index;