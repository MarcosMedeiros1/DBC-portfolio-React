const Main = ({ data }) => {
  console.log(data);

  return (
    <main>
      <section>
        <img src="" alt="" />
        <div>
          <h1>Marcos Oliveira Medeiros</h1>
          <p>bio {data.bio}</p>
        </div>
      </section>
    </main>
  );
};

export default Main;
