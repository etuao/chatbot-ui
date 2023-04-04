import styled from 'styled-components';

const Popup = styled.div`
  width: 100vw;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 9999;
  background: rgba(0, 0, 0, 0.3);
  display: flex;
  justify-content: center;
  align-items: center;
`;
const LoadingImg = styled.div`
  width: 300px;
  padding-bottom: 30px;
  font-size: 18px;
  line-height: 30px;
  text-align: center;
  background: #fff;
  border-radius: 5px;
  overflow: hidden;
  font-weight: 600;
`;
const Loading = () => {
  return (
    <Popup>
      <LoadingImg>
        <img
          style={{ width: '100%' }}
          src={'./assets/image/loading.gif'}
          alt=""
        />
        <p>正在加载中...</p>
      </LoadingImg>
    </Popup>
  );
};

export default Loading;
