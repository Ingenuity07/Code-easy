import Cards from './Cards';
import useFetch from './useFetch';

const Home = () => {

  const { data, isPending, error } = useFetch('http://localhost:8000/courseName')

  return (
    <div className="home">

      <section className="bgimage">
        <div>
          <h1>Code Easy</h1>
          <p>"A platform to Learn and Grow"</p>
        </div>
      </section>


      <hr style={{ color: "white", margin: "3rem" }} />

      {error && <div>{error}</div>}
      {isPending && <div>Loading...</div>}
      {data && <Cards data={data} title='All Courses' />}

      <hr style={{ color: "white", margin: "2rem" }} />
    </div>
  );
}

export default Home;