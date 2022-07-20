const Eventos = () => {
  const meuEvento = () => {
    console.log("clicou");
  };
  return (
    <div>
      <p>Clique para disparar um evento</p>
      <button onClick={meuEvento}>Ativar!</button>
    </div>
  );
};

export default Eventos;
