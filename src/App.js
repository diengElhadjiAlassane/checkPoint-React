import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

function App() {

  return (
    <div className="App">
        <h1 className="text-center mt-3">Informations Personnelles</h1>
        <div className="m-auto px-4 col-12 col-sm-10 col-lg-6">

            <form className="mb-3">
                <label htmlFor="todo" className="form-label mt-3">Nom</label>
                <input type="text" className="form-control" id="todo"/>
                <label htmlFor="todo" className="form-label mt-3">Prenom</label>
                <input type="text" className="form-control" id="todo"/>
                <label htmlFor="todo" className="form-label mt-3">Classe</label>
                <input type="text" className="form-control" id="todo"/>
                <label htmlFor="todo" className="form-label mt-3">Adresse</label>
                <input type="text" className="form-control" id="todo"/>

                <button className="mt-2 btn btn-primary d-block">Envoyez</button>
            </form>

            
        </div>

    </div>
  );
}

export default App;