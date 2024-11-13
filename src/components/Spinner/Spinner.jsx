import { ColorRing } from 'react-loader-spinner';

export const Spinner = () => {
  return (
    <div>
      <ColorRing
        visible={true}
        height="160"
        width="160"
        ariaLabel="color-ring-loading"
        wrapperStyle={{
          position: 'fixed',
          top: '25%',
          left: '45%',
          zIndex: '19',
        }}
        wrapperClass="color-ring-wrapper"
        colors={['#e15b64', '#f47e60', '#f8b26a', '#abbd81', '#849b87']}
      />
    </div>
  );
};
