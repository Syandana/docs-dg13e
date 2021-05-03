import Layout from "./Layout"
import card from '../lib/data/cards.json'

const Index = (props) => (
  <Layout>
    <div className="container">
      <div className="row">
        {card.map(card => (
          <div className="col-lg-6 mb-4">
            <div className="card">
              <div className="card-body">
                <i className="fas fa-tasks"></i>
                <h3 className="card-title mt-0"><i className="fas fa-tasks">&nbsp;</i>{card.title}</h3>
                <p className="card-text mt-0 mb-2">{card.text}</p>
                {/* <a href={card.link} className="btn btn-primary">
                  <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" class="bi bi-list-task" viewBox="0 0 16 16">
                    <path fill-rule="evenodd" d="M2 2.5a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5V3a.5.5 0 0 0-.5-.5H2zM3 3H2v1h1V3z" />
                    <path d="M5 3.5a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5zM5.5 7a.5.5 0 0 0 0 1h9a.5.5 0 0 0 0-1h-9zm0 4a.5.5 0 0 0 0 1h9a.5.5 0 0 0 0-1h-9z" />
                    <path fill-rule="evenodd" d="M1.5 7a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5H2a.5.5 0 0 1-.5-.5V7zM2 7h1v1H2V7zm0 3.5a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5H2zm1 .5H2v1h1v-1z" />
                  </svg>
                </a> */}
              </div>
            </div>
          </div>
        ))}

      </div>
    </div>
  </Layout>
)

export default Index