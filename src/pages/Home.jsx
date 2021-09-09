import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import { NewsItem, NewsItemLoading } from '../components';
import { fetchNews } from '../redux/actions/home';
import Button from '../components/Button';

function Home() {
  const dispatch = useDispatch()
  const { items, isLoaded } = useSelector(({ home }) => home)

  const loadData = () => {
    setInterval(() => {
      dispatch(fetchNews())
    }, 60000)
  }

  React.useEffect(() => {
    dispatch(fetchNews())
    // loadData()
  }, [dispatch])

  const onClickUpdate = () => {
    dispatch(fetchNews())
  }

  return (
    <div className="container">
      <div className="content__top">
        <h1 className="content__title">News</h1>
        <Button onClick={onClickUpdate}>
          <span>Update</span>
        </Button>
      </div>
      <div className="content__main">
        <div className="content__items">
          {isLoaded
            ? items.map(({ id, score, title, by, time }, index) => (
                <Link key={id} to={`news/${id}`}>
                  <NewsItem
                    index={++index}
                    score={score}
                    title={title}
                    by={by}
                    time={time} />
                  </Link> ))

            : Array(15).fill(0).map((el, index) => <NewsItemLoading key={index} />)}
        </div>
      </div>
    </div>
  )
}

export default Home;