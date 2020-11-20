import React from "react";
import { action, makeObservable, observable } from "mobx";

/* NEW WAY STORE*/
export default class Store {
  title = "Coding is Love";
  user = {
    userId: 1,
    name: "Iulian Carnaru",
    website: "https://iuliancarnaru.uk",
    email: "iulian.carnaru@gmail.com",
  };

  constructor() {
    makeObservable(this, {
      title: observable,
      user: observable,
      setUser: action.bound,
      updateUser: action.bound,
      clearUser: action.bound,
      setTitle: action.bound,
    });
  }

  setUser(user) {
    this.user = user;
  }

  updateUser(data) {
    this.user = { ...this.user, ...data };
  }

  clearUser() {
    this.user = undefined;
  }

  setTitle(title) {
    this.title = title;
  }
}

/* OLD WAY STORE */
// export default class Store {
//   @observable title = "Coding is Love";
//
//   @observable user = {
//     userId: 1,
//     name: "Ranjith kumar V",
//     website: "https://codingislove.com",
//     email: "ranjith@codingislove.com",
//   };
//
//   @action
//   setUser(user) {
//     this.user = user;
//   }
//
//   @action
//   updateUser(data) {
//     this.user = { ...this.user, ...data };
//   }
//
//   @action
//   clearUser() {
//     this.user = undefined;
//   }
//
//   @action
//   setTitle(title) {
//     this.title = title;
//   }
// }

/* Store helpers */
const StoreContext = React.createContext(undefined, undefined);

export const StoreProvider = ({ children, store }) => {
  return (
    <StoreContext.Provider value={store}>{children}</StoreContext.Provider>
  );
};

/* Hook to use store in any functional component */
export const useStore = () => React.useContext(StoreContext);

/* HOC to inject store to any functional or class component */
export const withStore = (Component) => (props) => {
  return <Component {...props} store={useStore()} />;
};
