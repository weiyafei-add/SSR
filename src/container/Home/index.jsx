import React, { useEffect } from "react";
import { connect, useSelector, useDispatch } from "react-redux";
import { getHomeList } from "./stroe/actions";
import styles from "./index.css";
import withStyle from "../../withStyle";

const prefix = "home";

const Home = (props) => {
  const { getHomeList } = props;

  const { name, newList } = useSelector((state) => state.home);

  useEffect(() => {
    if (!newList.length) {
      getHomeList(false);
    }
    return () => {};
  }, []);

  const renderContext = () => {
    return newList.map((item, index) => <p key={index}>{item}</p>);
  };

  const debounce = (fun, delay) => {
    let timer = null;
    let run = false;
    return (type) => {
      if (!run) {
        fun(type);
      }
      if (timer) {
        clearTimeout(timer);
      }
      run = true;
      timer = setTimeout(() => {
        run = false;
      }, delay);
    };
  };

  const handleOnBtnClick = debounce((type) => {
    getHomeList();
  }, 5000);

  const renderServerStyle = () => {
    if (styles._getCss) {
      props.staticContext.css.push(styles._getCss());
    }
  };

  return (
    <div className={styles.home}>
      <p>hello welcome{props.name}</p>
      <button onClick={() => handleOnBtnClick("aaa")}>点击</button>
      {renderContext()}
      {/* {renderServerStyle()} */}
    </div>
  );
};

Home.loadData = (store) => {
  return store.dispatch(getHomeList(true));
};

const mapStateToProps = (state) => ({
  name: state.home.name,
});

const mapDispatchToProps = (dispatch) => ({
  getHomeList() {
    dispatch(getHomeList());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);
