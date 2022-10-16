import React from 'react';
import Head from 'next/head';
import { useSelector } from 'react-redux';
import { Avatar, Card } from 'antd';
import { END } from 'redux-saga';
import AppLayout from '../components/AppLayout';
import wrapper from '../store/configureStore';
import { LOAD_USER_REQUEST } from '../reducers/user';

function About() {
  const { userInfo } = useSelector((state) => state.user);
  return (
    <AppLayout>
      <Head>
        <title>LJBBS | Nodebird</title>
      </Head>
      {userInfo
        ? (
          <Card
            actions={[
              <div key="twit">
                짹짹
                <br />
                {userInfo.Posts}
              </div>,
              <div key="following">
                팔로잉
                <br />
                {userInfo.Followings}
              </div>,
              <div key="follower">
                팔로워
                <br />
                {userInfo.Followers}
              </div>,
            ]}
          >
            <Card.Meta
              avatar={<Avatar>{userInfo.nickname[0]}</Avatar>}
              title={userInfo.nickname}
              description="LJBBS !!!!!"
            />
          </Card>
        )
        : null}
    </AppLayout>
  );
}

export const getStaticProps = wrapper.getStaticProps((store) => async ({ req, res, ...etc }) => {
  store.dispatch({
    type: LOAD_USER_REQUEST,
    data: 1,
  });
  store.dispatch(END);
  await store.sagaTask.toPromise();
});

export default About;
