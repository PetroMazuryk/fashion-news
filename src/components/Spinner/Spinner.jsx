import { ColorRing } from 'react-loader-spinner';

export const Spinner = () => {
  return (
    <div
      style={{
        position: 'fixed',
        top: '25%',
        left: '50%',
        transform: 'translateX(-50%)',
        zIndex: '19',
      }}
    >
      <ColorRing
        visible={true}
        height="160"
        width="160"
        ariaLabel="color-ring-loading"
        colors={['#e15b64', '#f47e60', '#f8b26a', '#abbd81', '#849b87']}
      />
    </div>
  );
};
