import React, { Component } from "react";
import { withStore } from "../store/store";
import { observer } from "mobx-react";
import Username from "../components/Username";

/* New version */
const Home = observer(({ store }) => {
  const toggleTitle = () => {
    if (store.title === "Coding is Love") {
      store.setTitle("Mobx React context");
    } else {
      store.setTitle("Coding is Love");
    }
  };

  return (
    <div className="App">
      <header className="App-header">
        <a
          className="App-link"
          href="https://codingislove.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          {store.title}
        </a>
        <button onClick={toggleTitle} style={{ margin: 20 }}>
          Toggle title
        </button>
        <Username />
      </header>
    </div>
  );
});

export default withStore(Home);

/* Old version */
// @observer
// class Home extends Component {
//   toggleTitle = () => {
//     const { store } = this.props;
//     if (store.title === "Coding is Love") {
//       store.setTitle("Mobx React Context");
//     } else {
//       store.setTitle("Coding is Love");
//     }
//   };
//
//   render() {
//     const { store } = this.props;
//     return (
//       <div className="App">
//         <header className="App-header">
//           <img src={logo} className="App-logo" alt="logo" />
//           <a
//             className="App-link"
//             href="https://codingislove.com"
//             target="_blank"
//             rel="noopener noreferrer"
//           >
//             {store.title}
//           </a>
//           <button onClick={this.toggleTitle} style={{ margin: 20 }}>
//             Toggle title
//           </button>
//         </header>
//       </div>
//     );
//   }
// }
//
// export default Home;
